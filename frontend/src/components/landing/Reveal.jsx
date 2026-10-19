import React from "react";
import { motion } from "framer-motion";

// Generic scroll-reveal wrapper: fades + rises into place the first time it
// enters the viewport. Every section/card on the landing page composes this
// instead of re-implementing the same whileInView boilerplate.
export default function Reveal({
  children,
  delay = 0,
  distance = 24,
  duration = 0.7,
  className = "",
  as = "div",
  ...rest
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.16, 0.8, 0.24, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
