'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface DotProps {
  index: number;
  rowIndex: number;
  colIndex: number;
  mousePos: { x: number; y: number } | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function DotItem({ index, rowIndex, colIndex, mousePos, containerRef }: DotProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const [proximity, setProximity] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!mousePos || !dotRef.current || !containerRef.current) {
      setProximity(0);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const dotRect = dotRef.current.getBoundingClientRect();

    const dotX = dotRect.left + dotRect.width / 2 - containerRect.left;
    const dotY = dotRect.top + dotRect.height / 2 - containerRect.top;

    const dist = Math.hypot(dotX - mousePos.x, dotY - mousePos.y);
    const maxRadius = 90;

    if (dist < maxRadius) {
      const factor = Math.pow(1 - dist / maxRadius, 1.5);
      setProximity(factor);
    } else {
      setProximity(0);
    }
  }, [mousePos, containerRef]);

  // Base row opacities for Vercel aesthetics
  const rowBaseColors = [
    'bg-neutral-900 dark:bg-white',
    'bg-neutral-700 dark:bg-neutral-200',
    'bg-neutral-500 dark:bg-neutral-400',
    'bg-neutral-400 dark:bg-neutral-500',
    'bg-neutral-300 dark:bg-neutral-700',
  ];

  const baseColor = rowBaseColors[rowIndex] || rowBaseColors[0];

  const scale = isHovered ? 1.8 : 1 + proximity * 0.75;
  const opacity = Math.min(1, 0.5 + proximity * 0.5);

  return (
    <div
      ref={dotRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center p-1 cursor-pointer"
    >
      <motion.div
        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
          proximity > 0.2 || isHovered
            ? 'bg-emerald-400 dark:bg-teal-300 shadow-[0_0_12px_rgba(20,184,166,0.9)]'
            : baseColor
        }`}
        animate={
          proximity === 0 && !isHovered
            ? {
                scale: [1, 1.18, 1],
                opacity: [0.65, 1, 0.65],
              }
            : {
                scale,
                opacity,
              }
        }
        transition={
          proximity === 0 && !isHovered
            ? {
                duration: 2.8 + rowIndex * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: rowIndex * 0.22 + colIndex * 0.12,
              }
            : {
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }
        }
      />

      {/* Ripple ring on hover */}
      {(isHovered || proximity > 0.6) && (
        <motion.span
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-3 h-3 rounded-full border border-teal-400 pointer-events-none"
        />
      )}
    </div>
  );
}

export default function AnimatedDotPyramid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const rows = [1, 2, 3, 4, 5];
  let globalDotIndex = 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-3xl cursor-pointer select-none group"
    >
      {rows.map((count, rowIndex) => (
        <div key={rowIndex} className="flex items-center gap-2.5 sm:gap-3.5">
          {Array.from({ length: count }).map((_, colIndex) => {
            const currentIndex = globalDotIndex++;
            return (
              <DotItem
                key={currentIndex}
                index={currentIndex}
                rowIndex={rowIndex}
                colIndex={colIndex}
                mousePos={mousePos}
                containerRef={containerRef}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
