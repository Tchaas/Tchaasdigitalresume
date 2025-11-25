import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string | number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const target = typeof value === 'string' ? parseFloat(value) : value;
    const duration = 2000; // 2 seconds
    const intervalTime = 16; // ~60fps
    const steps = duration / intervalTime;
    const increment = target / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const hasDecimal = typeof value === 'string' 
    ? value.includes('.') 
    : !Number.isInteger(value);

  const displayValue = hasDecimal 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
