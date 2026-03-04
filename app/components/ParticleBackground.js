'use client';
import { useEffect, useRef } from 'react';

const SYMBOLS = ['○', '△', '□'];
const COLORS = ['#ff0060', '#00ffc2', '#ffd700'];

export default function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);

        const particles = Array.from({ length: 28 }, () => createParticle(W, H, true));

        function createParticle(w, h, randomY = false) {
            const idx = Math.floor(Math.random() * SYMBOLS.length);
            return {
                x: Math.random() * w,
                y: randomY ? Math.random() * h : h + 20,
                size: Math.random() * 18 + 10,
                speed: Math.random() * 0.4 + 0.15,
                sym: SYMBOLS[idx],
                color: COLORS[idx],
                alpha: Math.random() * 0.07 + 0.03,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.006,
            };
        }

        let animId;
        function draw() {
            ctx.clearRect(0, 0, W, H);
            particles.forEach((p, i) => {
                p.y -= p.speed;
                p.rotation += p.rotSpeed;
                if (p.y + p.size < 0) {
                    particles[i] = createParticle(W, H);
                }
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.font = `${p.size}px Orbitron, sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 8;
                ctx.fillText(p.sym, 0, 0);
                ctx.restore();
            });
            animId = requestAnimationFrame(draw);
        }

        draw();

        const onResize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 1,
            }}
        />
    );
}
