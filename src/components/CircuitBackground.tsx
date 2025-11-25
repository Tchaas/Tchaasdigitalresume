import { useEffect, useRef } from "react";

interface CircuitBackgroundProps {
  className?: string;
}

export function CircuitBackground({ className = "" }: CircuitBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // ---- circuit path + pulses setup ----
    type Segment = { x1: number; y1: number; x2: number; y2: number };

    const paths: Segment[][] = [];
    const pulses: { pathIndex: number; t: number; speed: number }[] = [];
    const PATH_COUNT = 18;
    const PULSES_PER_PATH = 3;
    const lineColor = "rgba(23, 255, 108, 0.35)";

    const buildPaths = () => {
      paths.length = 0;
      pulses.length = 0;

      for (let i = 0; i < PATH_COUNT; i++) {
        const y =
          (canvas.height / PATH_COUNT) * i + Math.random() * 40 - 20;
        const segments: Segment[] = [];
        let x = -100;

        while (x < canvas.width + 100) {
          const segLength = 80 + Math.random() * 140;
          const nextX = x + segLength;
          const offsetY = (Math.random() - 0.5) * 40;
          segments.push({ x1: x, y1: y, x2: nextX, y2: y + offsetY });
          x = nextX;
        }

        paths.push(segments);

        for (let j = 0; j < PULSES_PER_PATH; j++) {
          pulses.push({
            pathIndex: i,
            t: Math.random(),
            speed: 0.0004 + Math.random() * 0.0007,
          });
        }
      }
    };

    buildPaths();

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

    // subtle automatic drift, mouse just nudges it
    let mouseX = 0.5;
    let mouseY = 0.5;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = 0.5 + (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = 0.5 + (e.clientY / window.innerHeight - 0.5) * 0.3;
    };

    window.addEventListener("pointermove", handlePointerMove);

    let animationFrameId: number;

    const animate = () => {
      const { width, height } = canvas;
      const t = performance.now() * 0.0001; // slow time-based drift

      // background gradient with slow automatic drift
      const centerX = width * (mouseX * 0.7 + 0.15 * Math.sin(t));
      const centerY = height * (mouseY * 0.7 + 0.15 * Math.cos(t));

      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        40,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      grad.addColorStop(0, "#050608");
      grad.addColorStop(1, "#000000");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // draw circuit lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      paths.forEach((segments) => {
        ctx.beginPath();
        segments.forEach((seg, idx) => {
          if (idx === 0) ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        });
        ctx.stroke();
      });

      // draw moving pulses
      pulses.forEach((p, index) => {
        p.t = (p.t + p.speed) % 1;
        const pt = getPointOnPath(paths[p.pathIndex], p.t);

        const radius = 2.5;
        const alpha =
          0.5 + 0.5 * Math.sin(performance.now() * 0.004 + index);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23, 255, 108, ${alpha})`;
        ctx.shadowColor = "rgba(23, 255, 108, 0.8)";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

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
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
    />
  );
}
