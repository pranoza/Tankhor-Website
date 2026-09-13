'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function AnimatedDotPyramid() {
  const [hoveredDot, setHoveredDot] = useState<{ r: number; c: number } | null>(null);

  const rows = [1, 2, 3, 4, 5];

  // Base row opacities for Vercel aesthetics
  const rowBaseColors = [
    'bg-neutral-900 dark:bg-white',
    'bg-neutral-700 dark:bg-neutral-200',
    'bg-neutral-500 dark:bg-neutral-400',
    'bg-neutral-400 dark:bg-neutral-500',
    'bg-neutral-300 dark:bg-neutral-700',
  ];

  return (
    <div
      onMouseLeave={() => setHoveredDot(null)}
      className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3.5 p-4 sm:p-6 rounded-3xl select-none group"
    >
      {rows.map((count, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-2.5 sm:gap-3.5">
          {Array.from({ length: count }).map((_, colIndex) => {
            // Align column index centered relative to row length for symmetrical distance calculation
            const normalizedCol = colIndex - (count - 1) / 2;
            const hoveredNormalizedCol =
              hoveredDot !== null
                ? hoveredDot.c - (rows[hoveredDot.r] - 1) / 2
                : null;

            const dist =
              hoveredDot !== null && hoveredNormalizedCol !== null
                ? Math.hypot(rowIndex - hoveredDot.r, normalizedCol - hoveredNormalizedCol)
                : null;

            const isDirectlyHovered = dist !== null && dist < 0.2;
            const isNear = dist !== null && dist < 1.6;
            const isMid = dist !== null && dist >= 1.6 && dist < 2.6;

            const baseColor = rowBaseColors[rowIndex] || rowBaseColors[0];

            let dotColor = baseColor;
            let scale = 1;
            let opacity = 0.85;

            if (isDirectlyHovered) {
              dotColor = 'bg-teal-400 dark:bg-teal-300 shadow-[0_0_16px_rgba(20,184,166,1)] ring-2 ring-teal-400/40';
              scale = 1.85;
              opacity = 1;
            } else if (isNear) {
              dotColor = 'bg-emerald-400/90 dark:bg-teal-400/90 shadow-[0_0_10px_rgba(20,184,166,0.6)]';
              scale = 1.35;
              opacity = 0.95;
            } else if (isMid) {
              dotColor = 'bg-teal-500/60 dark:bg-teal-500/60 shadow-[0_0_6px_rgba(20,184,166,0.3)]';
              scale = 1.15;
              opacity = 0.9;
            }

            return (
              <div
                key={`dot-${rowIndex}-${colIndex}`}
                onMouseEnter={() => setHoveredDot({ r: rowIndex, c: colIndex })}
                className="relative flex items-center justify-center p-1 cursor-pointer"
              >
                <motion.div
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${dotColor}`}
                  animate={
                    hoveredDot === null
                      ? {
                          scale: [1, 1.15, 1],
                          opacity: [0.65, 0.95, 0.65],
                        }
                      : {
                          scale,
                          opacity,
                        }
                  }
                  transition={
                    hoveredDot === null
                      ? {
                          duration: 2.8 + rowIndex * 0.35,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: rowIndex * 0.2 + colIndex * 0.1,
                        }
                      : {
                          type: 'spring',
                          stiffness: 350,
                          damping: 22,
                        }
                  }
                />

                {/* Expanding pulse ripple on direct hover */}
                {isDirectlyHovered && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute w-3 h-3 rounded-full border border-teal-400 pointer-events-none"
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
