'use client';
import { useEffect, useRef } from 'react';

export default function Card3D({ children, className = '', style = {} }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);
            el.style.transform = `perspective(800px) rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg) translateZ(10px)`;
        };

        const onMouseLeave = () => {
            el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
        };

        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);
        return () => {
            el.removeEventListener('mousemove', onMouseMove);
            el.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div ref={ref} className={`card-3d ${className}`} style={{ transition: 'transform 0.15s ease, box-shadow 0.3s', willChange: 'transform', ...style }}>
            {children}
        </div>
    );
}
