'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card3D from '../components/Card3D';

const highlights = [
    {
        sym: '○',
        title: 'National Level Symposium',
        desc:
            'ICON brings together the brightest minds from IT, CSE, Cybersecurity, AI & DS and beyond — competing in a thrilling mix of technical and non-technical events that test both skill and spirit.',
    },
    {
        sym: '△',
        title: 'Open to All',
        desc: 'Open to UG / PG students from engineering colleges all across India.',
    },
    {
        sym: '□',
        title: 'Networking',
        desc: 'Connect with fellow innovators and industry professionals to explore career opportunities.',
    },
    {
        sym: '○',
        title: 'Big Prizes',
        desc:
            'With prize pool of over Rupees 1 Lakh, win exciting cash prizes, internship opportunities, vouchers and other goodies!',
    },
];

export default function TechFusionPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: 70 }}>
            {/* HERO */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
            }}>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '6rem 2rem 4rem' }}>
                    <span className="player-badge" style={{ marginBottom: '1.2rem', display: 'inline-block' }}>ABOUT ICON '26</span>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <Image
                            src="/logos/icon logo final.png"
                            alt="ICON '26 logo"
                            width={360}
                            height={120}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', maxWidth: 650, margin: '0 auto 2rem', lineHeight: 1.8 }}>
                        ICON '26 – A National Level Technical Symposium organised by the Department of Information Technology, Crescent
                        Institute, in association with the Society of Information Technologists (SIT).
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <span className="tag-pill tag-pill-teal">24th Edition</span>
                    </div>
                </div>
            </section>

            {/* ABOUT TECHFUSION */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div className="reveal">
                            <span className="player-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>ABOUT</span>
                            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: 1 }}>
                                ICON '26 – <span style={{ color: 'var(--secondary)', textShadow: '0 0 15px var(--secondary-glow)' }}>NATIONAL LEVEL TECH SYMPOSIUM</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1.05rem' }}>
                                ICON is the Department of Information Technology’s flagship national-level symposium, bringing together bright minds from across the country to compete, collaborate, and create. Founded as a platform to unleash student talent and technical prowess, ICON blends technical challenges, workshops, and non-technical events to foster innovation, creativity, and interdisciplinary thinking.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                                From algorithm battles and tech quests to stage showcases and strategy games, ICON has grown into a dynamic arena that celebrates the spirit of learning, leadership, and forward-thinking in the ever-evolving world of technology.
                            </p>
                        </div>

                        {/* About photo */}
                        <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card3D style={{ padding: 0, overflow: 'hidden' }}>
                                <Image
                                    src="/photos/about.jpg"
                                    alt="ICON '26 overview"
                                    width={600}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </Card3D>
                        </div>
                    </div>
                </div>
            </section>

            <div className="glow-line" style={{ margin: '0 2rem' }} />

            {/* HIGHLIGHTS */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title reveal">EVENT <span className="highlight">HIGHLIGHTS</span></h2>
                    <div className="title-divider reveal"><span className="divider-symbol">△</span></div>
                    <p className="section-subtitle reveal">Everything that makes ICON '26 a symposium worth experiencing.</p>

                    <div className="highlights-grid">
                        {highlights.map((h, i) => (
                            <Card3D key={i} className="reveal" style={{ padding: '2rem', cursor: 'default' }}>
                                <div style={{
                                    fontFamily: 'var(--font-title)',
                                    fontSize: '2rem',
                                    color: ['var(--primary)', 'var(--secondary)', 'var(--accent)'][i % 3],
                                    marginBottom: '1rem',
                                    textShadow: `0 0 15px ${['var(--primary-glow)', 'var(--secondary-glow)', 'var(--accent-glow)'][i % 3]}`,
                                }}>{h.sym}</div>
                                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: 1.5, marginBottom: '0.8rem', color: 'var(--text)', textTransform: 'uppercase' }}>{h.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{h.desc}</p>
                            </Card3D>
                        ))}
                    </div>
                </div>
            </section>

            <div className="glow-line glow-line-teal" style={{ margin: '0 2rem' }} />

            {/* PPT/GUIDELINES */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                        <span className="player-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>HOW TO PARTICIPATE</span>
                        <h2 className="section-title reveal">QUICK <span className="highlight-teal">GUIDELINES</span></h2>
                        <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                            {[
                                '○ Online registration on UnStop is mandatory.',
                                '△ Join the WhatsApp group (link in the events page) for updates.',
                                '□ Cross-college teams are allowed.',
                                '○ Participation certificates awarded to all participants.',
                                '△ Lunch and refreshments will be provided.',
                                '□ Transport should be arranged by participants themselves.',
                                '○ Accommodation will be provided on a first-come basis.',
                            ].map((g, i) => (
                                <div key={i} className="reveal" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 12,
                                    padding: '1rem 0',
                                    borderBottom: '1px solid rgba(255,0,96,0.1)',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.7,
                                }}>
                                    <span style={{ color: ['var(--primary)', 'var(--secondary)', 'var(--accent)'][i % 3], fontFamily: 'var(--font-mono)', minWidth: 20, fontSize: '1rem' }}>{g.slice(0, 1)}</span>
                                    <span>{g.slice(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://unstop.com"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                            >
                                □ Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
