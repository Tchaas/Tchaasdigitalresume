import { useEffect, useRef } from "react";

interface CircuitBackgroundProps {
  className?: string;
}

type Segment = { x1: number; y1: number; x2: number; y2: number };
type Pulse = { pathIndex: number; t: number; speed: number };

export function CircuitBackground({ className = "" }: CircuitBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const paths: Segment[][] = [];
    const pulses: Pulse[] = [];
    const pads: { x: number; y: number }[] = [];

    const GRID = 42;           // spacing between “tracks”
    const PATH_COUNT = 26;     // how many distinct routed traces
    const PULSES_PER_PATH = 3;
    const TRACE_WIDTH = 1.4;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildCircuit();
    };

    const buildCircuit = () => {
      paths.length = 0;
      pulses.length = 0;
      pads.length = 0;

      const w = canvas.width;
      const h = canvas.height;

      // Helper: snap to grid
      const snap = (v: number) => Math.round(v / GRID) * GRID;

      // Build orthogonal paths that follow the grid
      for (let i = 0; i < PATH_COUNT; i++) {
        const segments: Segment[] = [];

        // start somewhere on the left or top
        let x = snap(Math.random() < 0.5 ? -GRID : Math.random() * w);
        let y = snap(Math.random() * h);

        let lastDir: number | null = null;
        const steps = 6 + Math.floor(Math.random() * 10);

        for (let s = 0; s < steps; s++) {
          // Directions: 0=right,1=down,2=left,3=up
          const dirs = [0, 1, 2, 3].filter((d) =>
            lastDir === null ? true : (d + 2) % 4 !== lastDir // no immediate reverse
          );
          const dir = dirs[Math.floor(Math.random() * dirs.length)];
          lastDir = dir;

          const stepUnits = 1 + Math.floor(Math.random() * 3); // 1–3 grid units
          const dx =
            dir === 0 ? GRID * stepUnits :
            dir === 2 ? -GRID * stepUnits : 0;
          const dy =
            dir === 1 ? GRID * stepUnits :
            dir === 3 ? -GRID * stepUnits : 0;

          const nx = x + dx;
          const ny = y + dy;

          // keep inside a padded area so traces don't hug the edge
          const margin = GRID * 2;
          if (nx < -margin || nx > w + margin || ny < margin || ny > h - margin) {
            break;
          }

          segments.push({ x1: x, y1: y, x2: nx, y2: ny });

          // chance to drop a pad at corners / endpoints
          if (Math.random() < 0.25) {
            pads.push({ x: nx, y: ny });
          }

          x = nx;
          y = ny;
        }

        if (segments.length > 0) {
          paths.push(segments);

          // attach pulses to this path
          for (let j = 0; j < PULSES_PER_PATH; j++) {
            pulses.push({
              pathIndex: paths.length - 1,
              t: Math.random(),
              speed: 0.001 + Math.random() * 0.0015,
            });
          }
        }
      }
    };

    const getPointOnPath = (pathSegments: Segment[], t: number) => {
      const totalSegments = pathSegments.length;
      const scaled = t * totalSegments;
      const idx = Math.min(totalSegments - 1, Math.floor(scaled));
      const localT = scaled - idx;
      const seg = pathSegments[idx];
      return {
        x: seg.x1 + (seg.x2 - seg.x1) * localT,
        y: seg.y1 + (seg.y2 - seg.y1) * localT,
      };
    };

    resize();
    window.addEventListener("resize", resize);

    // subtle parallax
    let mouseX = 0.5;
    let mouseY = 0.5;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove);

    let animationFrameId: number;

    const animate = () => {
      const { width: w, height: h } = canvas;
      const t = performance.now() * 0.00012;

      // --- Background gradient (blue → teal → green bias) ---
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "#020617");  // deep navy
      grad.addColorStop(0.4, "#012a3a"); // cyan / blue
      grad.addColorStop(0.8, "#022c22"); // teal / green
      grad.addColorStop(1, "#00110c");   // darker green edge
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // --- Faint matrix grid (like a PCB underlayer) ---
      ctx.save();
      ctx.strokeStyle = "rgba(12, 148, 136, 0.12)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      const GRID_BG = GRID;
      for (let x = 0; x <= w; x += GRID_BG) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y <= h; y += GRID_BG) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
      ctx.restore();

      // --- Main traces (brighter, PCB style) ---
      ctx.lineWidth = TRACE_WIDTH;
      ctx.lineCap = "round";

      paths.forEach((segments, i) => {
        // small hue variation per path
        const phase = (i / paths.length) * Math.PI * 2 + t * 2;
        const greenBoost = 180 + 60 * Math.sin(phase);
        const blueBoost = 160 + 40 * Math.cos(phase * 0.6);

        ctx.strokeStyle = `rgba(${40}, ${greenBoost}, ${blueBoost}, 0.55)`;

        ctx.beginPath();
        segments.forEach((seg, idx) => {
          if (idx === 0) ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        });
        ctx.stroke();
      });

      // --- Pads / vias (circular nodes on the network) ---
      pads.forEach((pad, index) => {
        const pulse = 0.3 + 0.2 * Math.sin(t * 8 + index);
        const rOuter = 6 + pulse * 4;
        const rInner = 2.5;

        // outer glow
        ctx.beginPath();
        ctx.arc(pad.x, pad.y, rOuter, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.20)";
        ctx.fill();

        // inner pad ring
        ctx.beginPath();
        ctx.arc(pad.x, pad.y, rInner, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(209, 250, 229, 0.9)";
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });

      // --- Flowing pulses on traces ---
      pulses.forEach((p, index) => {
        const path = paths[p.pathIndex];
        if (!path || path.length === 0) return;

        p.t = (p.t + p.speed) % 1;
        const pt = getPointOnPath(path, p.t);

        const baseR = 2.6;
        const flicker = 0.4 + 0.3 * Math.sin(performance.now() * 0.006 + index);
        const radius = baseR + flicker;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 197, 94, 0.95)";
        ctx.shadowColor = "rgba(52, 211, 153, 0.9)";
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    buildCircuit();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-20 pointer-events-none ${className}`}
    />
  );
}
