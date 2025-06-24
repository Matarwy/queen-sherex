import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionDiv = motion.div;

export default function ScrollAnimate({
  children,
  direction = "up",     // 'left', 'right', 'up', 'down'
  delay = 0,
  duration = 0.6,
  bounce = false,
  once = false,
}) {
  const ref = useRef();
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else if (!once) {
      controls.start("exit");
    }
  }, [inView, controls, once]);

  const offset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...offset[direction],
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: bounce
        ? {
            type: "spring",
            bounce: 0.3,
            delay,
            duration,
          }
        : {
            ease: "easeOut",
            delay,
            duration,
          },
    },
    exit: {
      opacity: 0,
      ...offset[getOppositeDirection(direction)],
      transition: { duration: 0.4 },
    },
  };

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </MotionDiv>
  );
}

// 👇 Helper to reverse direction on exit
function getOppositeDirection(dir) {
  const map = { up: "down", down: "up", left: "right", right: "left" };
  return map[dir] || "up";
}
