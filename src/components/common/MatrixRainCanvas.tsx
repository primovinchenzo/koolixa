'use client';

import React, { useEffect, useRef } from 'react';

interface MatrixRainCanvasProps {
  isHovered?: boolean;
  speed?: 'normal' | 'slow';
  opacity?: number;
  position?: 'absolute' | 'fixed';
}

export default function MatrixRainCanvas({
  isHovered = true,
  speed = 'normal',
  opacity = 0.92,
  position = 'absolute',
}: MatrixRainCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let frameCount = 0;
    // Slow mode updates every 3rd frame for hypnotic, smooth ambient rain
    const speedDivider = speed === 'slow' ? 3 : 1;

    const setSize = () => {
      if (position === 'fixed') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    setSize();
    window.addEventListener('resize', setSize);

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ';
    const fontSize = speed === 'slow' ? 16 : 13;
    const columns = Math.floor((canvas.width || 300) / fontSize) || 20;
    const drops: number[] = Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * -30));

    const draw = () => {
      frameCount++;

      if (frameCount % speedDivider === 0) {
        // Trail fade effect
        ctx.fillStyle = speed === 'slow' ? 'rgba(8, 14, 28, 0.12)' : 'rgba(8, 14, 28, 0.18)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `600 ${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];

          // Glowing cyan/green matrix colors with bright lead character
          const isLead = Math.random() > 0.85;
          ctx.fillStyle = isLead ? '#ffffff' : Math.random() > 0.5 ? '#00f0ff' : '#00ff9d';

          ctx.fillText(char, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

      if (isHovered) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    if (isHovered) {
      if (speed === 'slow') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = 'rgba(8, 14, 28, 0.88)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      draw();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setSize);
    };
  }, [isHovered, speed, position]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: position,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        pointerEvents: 'none',
        opacity: isHovered ? opacity : 0,
        transition: 'opacity 0.4s ease-in-out',
        zIndex: 0,
      }}
    />
  );
}
