import { useEffect, useRef } from "react";

export function InteractiveSparks() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSpark = (x: number, y: number) => {
      const spark = document.createElement("div");

      const size = 4 + Math.random() * 8; // small but varied
      const lifespan = 200 + Math.random() * 150;

      spark.style.position = "absolute";
      spark.style.left = `${x - size / 2}px`;
      spark.style.top = `${y - size / 2}px`;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.borderRadius = "50%";
      spark.style.pointerEvents = "none";
      spark.style.opacity = "1";

      // emerald glow
      spark.style.background = "radial-gradient(circle, rgba(16,255,160,0.95), rgba(16,255,160,0.4), transparent)";
      spark.style.boxShadow = "0 0 8px rgba(16,255,160,0.8)";

      spark.style.transition = `transform ${lifespan}ms ease-out, opacity ${lifespan}ms ease-out`;
      spark.style.transform = "scale(1)";

      container.appendChild(spark);

      // allow animation before removal
      requestAnimationFrame(() => {
        spark.style.opacity = "0";
        spark.style.transform = "scale(2)";
      });

      setTimeout(() => {
        spark.remove();
      }, lifespan);
    };

    const handleMove = (e: PointerEvent) => {
      createSpark(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
}
