"use client"

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion, type MotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
      timerRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % childrenArray.length)
      }, delay)

      return () => {
        if (timerRef.current !== null) clearTimeout(timerRef.current)
      }
    }, [index, delay, childrenArray.length])

    const visibleCount = Math.min(4, childrenArray.length)

    const itemsToShow = useMemo(() => {
      const items: React.ReactNode[] = []
      for (let i = 0; i < visibleCount; i++) {
        const idx = (index + i) % childrenArray.length
        items.push(childrenArray[idx])
      }
      return items
    }, [index, childrenArray, visibleCount])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence mode="popLayout">
          {itemsToShow.map((item, i) => (
            <AnimatedListItem key={(item as React.ReactElement).key ?? i}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
