"use client";

import Spline from "@splinetool/react-spline";
import React, { Suspense, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const NotFoundClient = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-300, 300], [10, -10]);
  const rotateY = useTransform(dx, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="w-full h-full"
      >
        <Suspense fallback={<div className="flex items-center justify-center w-full h-full text-white">Loading 3D Universe...</div>}>
          <Spline 
            scene="/assets/404.splinecode" 
            className="w-full h-full"
          />
        </Suspense>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-[hsl(20,100%,70%)] text-xl font-medium tracking-widest uppercase mb-2">404 Error</h2>
          <p className="text-white/50 text-sm">The newsletter is currently lost in space.</p>
        </motion.div>
        
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[hsl(20,100%,70%)] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,140,70,0.4)] transition-all"
          >
            Back to Reality
          </motion.button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundClient;
