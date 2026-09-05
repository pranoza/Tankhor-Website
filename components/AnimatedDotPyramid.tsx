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
    const maxRadius = 85;

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
    'bg-neutral-800 dark:bg-neutral-100',
    'bg-neutral-700 dark:bg-neutral-200',
    'bg-neutral-600 dark:bg-neutral-300',
    'bg-neutral-500 dark:bg-neutral-400',
    'bg-neutral-400 dark:bg-neutral-500',
    'bg-neutral-400 dark:bg-neutral-500',
    'bg-neutral-300 dark:bg-neutral-600',
  ];

  const baseColor = rowBaseColors[rowIndex] || rowBaseColors[0];

  const scale = isHovered ? 1.75 : 1 + proximity * 0.7;
  const opacity = Math.min(1, 0.6 + proximity * 0.4);

  return (
    <div
      ref={dotRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center p-0.5 sm:p-1 cursor-pointer"
    >
      <motion.div
        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
          proximity > 0.2 || isHovered
            ? 'bg-emerald-400 dark:bg-teal-300 shadow-[0_0_12px_rgba(20,184,166,0.9)]'
            : baseColor
        }`}
        animate={
          proximity === 0 && !isHovered
            ? {
                scale: [1, 1.18, 1],
                opacity: [0.6, 1, 0.6],
              }
            : {
                scale,
                opacity,
              }
        }
        transition={
          proximity === 0 && !isHovered
            ? {
                duration: 2.6 + (rowIndex % 3) * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: rowIndex * 0.15 + colIndex * 0.08,
              }
            : {
                type: 'spring',
                stiffness: 320,
                damping: 22,
              }
        }
      />

      {/* Ripple ring on hover */}
      {(isHovered || proximity > 0.65) && (
        <motion.span
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.75, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-teal-400 pointer-events-none"
        />
      )}
    </div>
  );
}

export default function AnimatedDotPyramid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // 11 Columns Dot Matrix forming a distinct T-Shirt / Apparel silhouette
  const tShirtMatrix = [
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0], // Row 0: Left shoulder, neck gap, right shoulder
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], // Row 1: Upper sleeves & V-neck notch
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Row 2: Full chest and sleeve width
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1], // Row 3: Sleeve sleeve cuffs + chest torso
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], // Row 4: Torso upper
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], // Row 5: Torso mid
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], // Row 6: Torso lower
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], // Row 7: T-Shirt Hem
  ];

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
      className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-5 rounded-3xl cursor-pointer select-none group"
    >
      {tShirtMatrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center gap-1.5 sm:gap-2">
          {row.map((val, colIndex) => {
            if (val === 0) {
              return (
                <div
                  key={`empty-${rowIndex}-${colIndex}`}
                  className="w-3.5 h-3.5 sm:w-5 sm:h-5 pointer-events-none"
                />
              );
            }

            const currentIndex = globalDotIndex++;
            return (
              <DotItem
                key={`dot-${currentIndex}`}
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
