import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let lastX = 0;
    let lastY = 0;

    const updateCursor = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const isPointer = e.target.tagName === 'BUTTON' || 
                         e.target.tagName === 'A' || 
                         window.getComputedStyle(e.target).cursor === 'pointer';

        if (cursorRef.current && cursorTrailRef.current) {
          lastX = e.clientX;
          lastY = e.clientY;
          
          cursorRef.current.style.transform = `translate(${lastX}px, ${lastY}px) scale(${isPointer ? 1.5 : 1})`;
          cursorTrailRef.current.style.transform = `translate(${lastX}px, ${lastY}px) scale(${isPointer ? 1.2 : 1})`;
        }
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full bg-purple-500/50 pointer-events-none z-50 mix-blend-screen will-change-transform"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorTrailRef}
        className="fixed w-8 h-8 rounded-full border border-purple-500/30 pointer-events-none z-50 will-change-transform"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor; 