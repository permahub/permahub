"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const SparklesCore = React.memo(
  ({
    id,
    className,
    background,
    minSize = 0.4,
    maxSize = 1,
    speed = 1,
    particleColor = "#fff",
    particleDensity = 100,
  }: {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(
      null
    );
    const [particles, setParticles] = useState<
      Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
      }>
    >([]);
    const [frameCount, setFrameCount] = useState(0);
    const [randomSeed, setRandomSeed] = useState(Math.random());

    useEffect(() => {
      // Generate a new random seed only on mount
      setRandomSeed(Math.random());
    }, []);

    // Initialize canvas context and particles
    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        setContext(ctx);

        if (ctx) {
          // Set canvas dimensions
          const dpr = window.devicePixelRatio || 1;
          const rect = canvas.getBoundingClientRect();
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          ctx.scale(dpr, dpr);

          // Generate particles
          const particleCount = Math.min(Math.floor((rect.width * rect.height) / 1000) * particleDensity / 100, 1000);
          const newParticles = Array.from({ length: particleCount }).map(() => ({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            size: minSize + Math.random() * (maxSize - minSize),
            speedX: (Math.random() - 0.5) * speed,
            speedY: (Math.random() - 0.5) * speed,
          }));
          setParticles(newParticles);
        }
      }
    }, [randomSeed, minSize, maxSize, speed, particleDensity]);

    // Animation loop
    useEffect(() => {
      let animationFrameId: number;
      let previousTime = 0;

      const animate = (currentTime: number) => {
        if (context && canvasRef.current) {
          // Calculate time elapsed since last frame
          const deltaTime = currentTime - previousTime;
          previousTime = currentTime;

          // Clear canvas
          const rect = canvasRef.current.getBoundingClientRect();
          context.clearRect(0, 0, rect.width, rect.height);

          // Update and draw particles
          particles.forEach((particle) => {
            // Update position based on speed and deltaTime
            particle.x += particle.speedX * (deltaTime * 0.01);
            particle.y += particle.speedY * (deltaTime * 0.01);

            // Wrap around edges
            if (particle.x < 0) particle.x = rect.width;
            if (particle.x > rect.width) particle.x = 0;
            if (particle.y < 0) particle.y = rect.height;
            if (particle.y > rect.height) particle.y = 0;

            // Draw particle
            context.beginPath();
            context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            context.fillStyle = particleColor;
            context.fill();
          });

          setFrameCount(frameCount + 1);
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [context, particles, frameCount, particleColor]);

    return (
      <canvas
        id={id}
        ref={canvasRef}
        className={cn("h-full w-full", className)}
        style={{
          background: background || "transparent",
        }}
      />
    );
  }
);

SparklesCore.displayName = "SparklesCore";
