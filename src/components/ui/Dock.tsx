'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

const DEFAULT_SIZE = 32;
const DEFAULT_MAGNIFICATION = 44;
const DEFAULT_DISTANCE = 120;

interface DockProps {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  children: React.ReactNode;
}

function Dock({
  className,
  iconSize = DEFAULT_SIZE,
  iconMagnification = DEFAULT_MAGNIFICATION,
  iconDistance = DEFAULT_DISTANCE,
  children,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (React.isValidElement<DockIconProps>(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto flex h-[52px] w-max items-center justify-center gap-1.5 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-1.5 backdrop-blur-md',
        className,
      )}
    >
      {renderChildren()}
    </motion.div>
  );
}

interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(4, size * 0.15);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full text-[var(--primary)] transition-colors hover:bg-[var(--primary-soft)]"
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon };
