'use client';
import { useEffect } from 'react';
import Card3D from '../components/Card3D';

const guidelines = [
    '○ Online registration on UnStop is mandatory.',
    '△ Join the WhatsApp group (link in the events page) for updates.',
    '□ Cross-college teams are allowed.',
    '○ Participation certificates awarded to all participants.',
    '△ Lunch and refreshments will be provided.',
    '□ Transport should be arranged by participants themselves.',
    '○ Accommodation will be provided on a first-come basis.',
];

export default function RegisterPage() {
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
                minHeight: '50vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
            }}>
                {/* Animated ring */}
                <div style={{
                    position: 'absolute', width: 500, height: 500,
                    border: '1px solid rgba(255,0,96,0.1)', borderRadius: '50%',
                    top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    animation: 'ringPulse 3s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute', width: 350, height: 350,
                    border: '1px solid rgba(255,0,96,0.15)', borderRadius: '50%',
                    top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    animation: 'ringPulse 3s ease-in-out infinite 0.5s',
                }} />
                <div style={{
                    position: 'absolute', width: 200, height: 200,
                    border: '2px solid rgba(255,0,96,0.25)', borderRadius: '50%',
                    top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    animation: 'ringPulse 3s ease-in-out infinite 1s',
                }} />

                <div style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem 4rem' }}>
                    <span className="player-badge" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>REGISTRATION</span>
                    <h1
                        className="reveal"
                        style={{
                            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.6rem, 7vw, 5rem)',
                            fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '1rem',
                        }}
                    >
                        <span style={{ color: 'var(--primary)', textShadow: '0 0 50px var(--primary-glow)' }}>REGISTER</span>
                        <br />
                        <span style={{ color: 'var(--text)', fontSize: '0.5em', letterSpacing: 6 }}>FOR ICON '26</span>
                    </h1>
                <style>{`
          @keyframes ringPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
          }
        `}</style>
            </section>

            {/* QUICK GUIDELINES */}
            <section className="section">
                <div className="container" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                    <span className="player-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>HOW TO PARTICIPATE</span>
                    <h2 className="section-title reveal">QUICK <span className="highlight-teal">GUIDELINES</span></h2>

                    <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                        {guidelines.map((g, i) => (
                            <div key={i} className="reveal" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                <span style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', color: ['var(--primary)', 'var(--secondary)', 'var(--accent)'][i % 3], minWidth: 20 }}>{g.charAt(0)}</span>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{g.slice(2)}</p>
                            </div>
                        ))}
                    </div>

                    <Card3D className="reveal" style={{ padding: '1.5rem', marginTop: '2rem', textAlign: 'left' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                            Note: The ICON '26 registration form on UnStop will contain the official payment and event details.
                            Make sure to verify all information on the UnStop event page before making the payment.
                        </p>
                    </Card3D>

                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                        <a
                            href="https://unstop.com"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary reveal"
                            style={{ fontSize: '1rem', padding: '18px 40px' }}
                        >
                            ○ Proceed to Registration on UnStop
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
