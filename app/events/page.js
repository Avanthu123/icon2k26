'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const technicalEvents = [
    {
        id: 'game-of-codes',
        sym: '○',
        number: 'T01',
        title: 'Game of Codes',
        full: 'Crack. Code. Conquer.',
        color: '#ff0060',
        glow: 'rgba(255,0,96,0.6)',
        bg: 'rgba(255,0,96,0.05)',
        border: 'rgba(255,0,96,0.4)',
        desc: 'A thrilling coding quest where every solved puzzle takes you one step closer to victory.',
        back: 'Compete in a series of coding, debugging, and logic challenges — a digital treasure hunt that tests your mind, speed, and teamwork.',
        bullets: [
            'Solve coding mysteries, logic puzzles, and debugging rounds to unlock clues.',
            'Each level brings a new challenge — code smart, move fast.',
            'Only the ultimate coder will reach the final treasure.',
        ],
        cta: 'Ready to play the Game of Codes? The hunt begins!',
    },
    {
        id: 'paper-prez',
        sym: '△',
        number: 'T02',
        title: 'Paper Prez',
        full: 'Where Ideas Speak Louder Than Words.',
        color: '#00ffa697',
        glow: 'rgba(0,255,194,0.6)',
        bg: 'rgba(0,255,194,0.05)',
        border: 'rgba(0,255,194,0.4)',
        desc: 'Showcase your research, innovations, and technical brilliance — one paper at a time.',
        back: 'Present your paper before an expert panel and stand a chance to get recognized for originality, clarity, and impact.',
        bullets: [
            'Choose your tech domain and present a paper that inspires innovation.',
            'Get evaluated by academicians and industry experts.',
            'Compete to prove your idea can change the game.',
        ],
        cta: 'Put your thoughts to paper — and your paper on the map.',
    },
    {
        id: 'ui-vision',
        sym: '□',
        number: 'T03',
        title: 'UI Vision',
        full: 'Design Beyond Pixels.',
        color: '#ffd700',
        glow: 'rgba(255,215,0,0.5)',
        bg: 'rgba(255,215,0,0.05)',
        border: 'rgba(255,215,0,0.4)',
        desc: 'Bring your creativity to life through stunning and intuitive UI designs.',
        back: 'Given a theme, design a user interface that’s visually striking, functional, and futuristic.',
        bullets: [
            'Interpret real-world themes into sleek, user-friendly interfaces.',
            'Showcase your creativity, layout sense, and design logic.',
            'Impress the judges with innovation, clarity, and aesthetic precision.',
        ],
        cta: 'Dream it. Design it. Display it at UI Vision!',
    },
    {
        id: 'bi-blitz',
        sym: '○',
        number: 'T04',
        title: 'BI Blitz',
        full: 'Bid. Build. Blitz.',
        color: '#a855f7',
        glow: 'rgba(168,85,247,0.5)',
        bg: 'rgba(168,85,247,0.05)',
        border: 'rgba(168,85,247,0.4)',
        desc: 'An adrenaline-packed analytics challenge where data meets daring decisions.',
        back: 'Bid on mystery profiles, analyze their data, and create insightful dashboards before time runs out.',
        bullets: [
            'Use your points to strategically bid on data sets or “people”.',
            'Build visual dashboards using your analytical and design skills.',
            'Fast decisions, smart visuals — only one team can dominate the data.',
        ],
        cta: 'Your dashboards decide your destiny — play smart in BI Blitz!',
    },
];

const nonTechnicalEvents = [
    {
        id: 'connexions',
        sym: '△',
        number: 'N01',
        title: 'Connexions',
        full: 'Guess It Before They Do!',
        color: '#22c55e',
        glow: 'rgba(34,197,94,0.5)',
        bg: 'rgba(34,197,94,0.05)',
        border: 'rgba(34,197,94,0.4)',
        desc: 'Decode the images, connect the dots, and guess the phrase before anyone else.',
        back: 'A fun and fast-paced picture-guessing challenge where observation meets quick wit.',
        bullets: [
            'Solve visual clues that hide famous phrases, movies, or idioms.',
            'Compete in multiple rounds of increasing difficulty.',
            'Speed and creativity are your keys to survival.',
        ],
        cta: 'Think fast — connect faster!',
    },
    {
        id: 'talent-hunt',
        sym: '□',
        number: 'N02',
        title: 'Talent Hunt',
        full: 'Unleash the Star Within.',
        color: '#f97316',
        glow: 'rgba(249,115,22,0.5)',
        bg: 'rgba(249,115,22,0.05)',
        border: 'rgba(249,115,22,0.4)',
        desc: 'A stage that celebrates every form of talent — from singing to mimicry.',
        back: 'Step into the spotlight and let your talent shine through. The crowd awaits your performance!',
        bullets: [
            'Showcase singing, dancing, mimicry, or any unique skill.',
            'Perform solo or in teams — the stage is yours.',
            'Win the hearts of judges and the audience alike.',
        ],
        cta: 'Dare to shine? The ICON stage is waiting!',
    },
    {
        id: 'esports-arena',
        sym: '○',
        number: 'N03',
        title: 'Esports Arena',
        full: 'Play. Survive. Dominate.',
        color: '#06b6d4',
        glow: 'rgba(6,182,212,0.5)',
        bg: 'rgba(6,182,212,0.05)',
        border: 'rgba(6,182,212,0.4)',
        desc: 'The ultimate gaming showdown featuring PUBG and Free Fire.',
        back: 'Battle it out in an intense Esports tournament where only the best squads make it to the final circle.',
        bullets: [
            'Squad up and fight for victory in your chosen battleground.',
            'Strategic teamwork and survival instincts will define your win.',
            'Streamed matches, roaring crowds, and epic finishes await.',
        ],
        cta: 'Ready. Aim. Win. Welcome to the Esports Arena.',
    },
    {
        id: 'prompt-engineering',
        sym: '△',
        number: 'N04',
        title: 'Prompt Engineering',
        full: 'Shape the Web with Words.',
        color: '#a855f7',
        glow: 'rgba(168,85,247,0.5)',
        bg: 'rgba(168,85,247,0.05)',
        border: 'rgba(168,85,247,0.4)',
        desc: 'Transform a dull website into a masterpiece — using only your prompts.',
        back: 'A creative challenge where you’ll revamp a given website with limited prompts to achieve the best AI-driven makeover.',
        bullets: [
            'Use concise, clever prompts to generate a new look and layout.',
            'Limited attempts — precision matters more than perfection.',
            'Blend creativity, logic, and linguistic skill to stand out.',
        ],
        cta: 'Prompt your way to perfection — one command at a time!',
    },
];

function EventCard({ event, idx }) {
    const d = event;
    const ref = useRef(null);
    const [flipped, setFlipped] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const onMove = (e) => {
        if (flipped || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: -y * 18, y: x * 18 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onClick={() => setFlipped(!flipped)}
                style={{
				height: 430,
                perspective: 1000,
                cursor: 'pointer',
                animationDelay: `${idx * 0.08}s`,
            }}
            className="reveal"
        >
            <div style={{
                width: '100%', height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: flipped ? 'transform 0.6s cubic-bezier(.4,2,.6,1)' : 'transform 0.2s ease',
                transform: flipped
                    ? 'perspective(1000px) rotateY(180deg)'
                    : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}>
                {/* FRONT */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: d.bg,
                    border: `1px solid ${d.border}`,
                    borderRadius: 16,
                    padding: '2rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                }}>
                    {/* Number watermark */}
                    <div style={{
                        position: 'absolute', bottom: -10, right: -10,
                        fontFamily: 'var(--font-title)', fontSize: '8rem', fontWeight: 900,
                        color: `${d.color}08`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
                    }}>{d.number}</div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: 2 }}>EVENT {d.number}</span>
                            <span style={{ border: `1px solid ${d.color}`, color: d.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '2px 8px', borderRadius: 2 }}>ACTIVE</span>
                        </div>
                        <div style={{
                            fontSize: '4rem', lineHeight: 1, marginBottom: '1rem',
                            color: d.color, textShadow: `0 0 30px ${d.glow}`,
                            fontFamily: 'var(--font-heading)',
                        }}>{d.sym}</div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 900,
                            letterSpacing: 2, color: 'var(--text)', textTransform: 'uppercase', marginBottom: 8,
                        }}>{d.title}</h3>
                        <p style={{ color: d.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: 1, textTransform: 'uppercase', opacity: 0.8 }}>{d.full}</p>
                    </div>

                    <div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>{d.desc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: d.color, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 1 }}>
                            <span>CLICK TO FLIP</span>
                            <span style={{ fontSize: '0.9rem' }}>→</span>
                        </div>
                    </div>
                </div>

                {/* BACK */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, ${d.bg}, rgba(5,5,5,0.95))`,
                    border: `1px solid ${d.border}`,
                    borderRadius: 16,
                    padding: '2rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    backdropFilter: 'blur(10px)',
                }}>
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: 2, color: d.color, textTransform: 'uppercase', marginBottom: '0.8rem' }}>WHAT TO EXPECT</h3>
                        {d.back && (
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{d.back}</p>
                        )}
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {d.bullets.map((b, i) => (
                                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                    <span style={{ color: d.color, minWidth: 12 }}>→</span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '1.2rem', color: d.color, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1.6 }}>{d.cta}</p>
                    </div>
                    <a
                        href="https://unstop.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{
                            background: d.color,
                            color: d.color === '#22c55e' || d.color === '#ffd700' ? '#000' : '#fff',
                            boxShadow: `0 0 20px ${d.glow}`,
                            fontSize: '0.8rem',
                            padding: '12px 24px',
                            textDecoration: 'none',
                            justifyContent: 'center',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        Register on UnStop
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function EventsPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.08 }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: 70 }}>
            {/* HERO */}
            <section style={{
                minHeight: '55vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
            }}>
                {/* Animated symbols floating in bg */}
                {['○', '△', '□', '○', '△'].map((s, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        fontSize: `${80 + i * 40}px`,
                        color: ['rgba(255,0,96,0.05)', 'rgba(0,255,194,0.04)', 'rgba(255,215,0,0.04)', 'rgba(168,85,247,0.04)', 'rgba(34,197,94,0.04)'][i],
                        fontFamily: 'var(--font-title)',
                        left: `${i * 20 + 5}%`,
                        top: `${20 + (i % 2) * 30}%`,
                        animation: `floatEl${i} ${5 + i}s ease-in-out infinite alternate`,
                        pointerEvents: 'none',
                        userSelect: 'none',
                    }}>{s}</div>
                ))}

                <div style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem 4rem' }}>
                    <span className="player-badge" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>CHOOSE YOUR EVENT</span>
                    <h1 style={{
						fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                        fontWeight: 900, letterSpacing: '-1px', lineHeight: 0.95, marginBottom: '1.2rem',
                    }}>
                        <span style={{ color: 'var(--text)' }}>ICON </span>
                        <span style={{ color: 'var(--secondary)', textShadow: '0 0 40px var(--secondary-glow)' }}>'26 EVENTS</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: 560, margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
                        Exciting competitions await! The Stakes have been raised for 2026...
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <a href="#technical" className="tag-pill tag-pill-teal">Technical Events</a>
                        <a href="#nontechnical" className="tag-pill tag-pill-red">Non-Technical Events</a>
                    </div>
                </div>

                <style>{`
          ${[0, 1, 2, 3, 4].map(i => `@keyframes floatEl${i} { 0%{transform:translateY(0) rotate(0deg);} 100%{transform:translateY(${-20 - i * 5}px) rotate(${i % 2 === 0 ? 5 : -5}deg);} }`).join('\n')}
        `}</style>
            </section>

            {/* TECHNICAL EVENTS */}
            <section className="section" id="technical">
                <div className="container">
                    <h2 className="section-title reveal">TECHNICAL <span className="highlight">EVENTS</span></h2>
                    <div className="title-divider reveal"><span className="divider-symbol">○</span></div>
                    <p className="section-subtitle reveal">Code, build, analyse, and design your way to the top.</p>
                    <div className="events-grid" style={{ marginTop: '2rem' }}>
                        {technicalEvents.map((d, i) => (
                            <EventCard key={d.id} event={d} idx={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* NON-TECHNICAL EVENTS */}
            <section className="section" id="nontechnical">
                <div className="container">
                    <h2 className="section-title reveal">NON-TECHNICAL <span className="highlight-teal">EVENTS</span></h2>
                    <div className="title-divider reveal"><span className="divider-symbol">△</span></div>
                    <p className="section-subtitle reveal">Stage, strategy, and pure fun — beyond the code editor.</p>
                    <div className="events-grid" style={{ marginTop: '2rem' }}>
                        {nonTechnicalEvents.map((d, i) => (
                            <EventCard key={d.id} event={d} idx={i + technicalEvents.length} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="glow-line" style={{ margin: '0 2rem' }} />

            {/* ELIGIBILITY and COMMON RULES */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title reveal">ELIGIBILITY & <span className="highlight">RULES</span></h2>
                    <div className="title-divider reveal"><span className="divider-symbol">□</span></div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="card-3d reveal" style={{ padding: '2rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', letterSpacing: 2, color: 'var(--secondary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>△ Eligibility</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {[
                                    'Open to UG & PG students from engineering colleges across India.',
                                    'Teams can be solo or group entries, as per individual event rules.',
                                    'Registration fee: ₹200 per student (regardless of solo or team).',
                                    'Online registration on UnStop is mandatory for all participants.',
                                ].map((e, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 10, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        <span style={{ color: 'var(--secondary)', minWidth: 14 }}>→</span>{e}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card-3d reveal" style={{ padding: '2rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', letterSpacing: 2, color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>○ Common Rules</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {[
                                    'Refer to individual event descriptions for specific rules and formats.',
                                    'Join the official WhatsApp group (link shared post-registration) for live updates.',
                                    'Participants must bring their own laptops and required equipment.',
                                    'Cross-college teams are allowed.',
                                ].map((r, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 10, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        <span style={{ color: 'var(--primary)', minWidth: 14 }}>→</span>{r}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card-3d reveal" style={{ padding: '2rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', letterSpacing: 2, color: 'var(--accent)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>□ Prizes & Perks</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {[
                                    'Prize pool of over ₹1,00,000 across technical and non-technical events.',
                                    'Participation certificates for all registered participants.',
                                    'Lunch and refreshments will be provided.',
                                    'Accommodation will be provided on a first-come, first-served basis.',
                                ].map((p, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 10, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        <span style={{ color: 'var(--accent)', minWidth: 14 }}>→</span>{p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <a
                            href="https://unstop.com"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary reveal"
                            style={{ fontSize: '1rem', padding: '18px 50px' }}
                        >
                            □ Proceed to Registration
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
