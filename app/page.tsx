"use client";
import { useEffect } from "react";
import Lenis from "lenis";

import "./page.css";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Profile from "@/components/Profile";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15, // Increase lerp for even smoother scroll
      duration: 1.5, // Slow down the scroll speed
      easing: (t: number) => Math.sin(t * (Math.PI / 2)), // Using a sine easing function for smoother scrolling
    });

    // Raf loop to drive the scroll
    const raf = (time: number) => {
      lenis.raf(time); // Update Lenis scroll state
      requestAnimationFrame(raf); // Keep animating
    };

    requestAnimationFrame(raf); // Start animation loop

    return () => {
      lenis.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
