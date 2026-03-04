'use client';
import { useEffect } from 'react';
import Card3D from '../components/Card3D';

const contacts = [
    {
        sym: '○',
        color: 'var(--primary)',
        label: 'General Secretary',
        value: 'Mohammed Hizbullah',
        href: 'tel:8681050407',
        note: '+91 86810 50407',
    },
    {
        sym: '△',
        color: 'var(--secondary)',
        label: 'Joint Secretary',
        value: 'Harini G',
        href: 'tel:9841010130',
        note: '+91 98410 10130',
    },
    {
        sym: '△',
        color: 'var(--secondary)',
        label: 'Joint Secretary',
        value: 'Avanthika A',
        href: 'tel:7904789580',
        note: '+91 79047 89580',
    },
    {
        sym: '□',
        color: 'var(--accent)',
        label: 'Treasurer',
        value: 'Izhaan Waseem M',
        href: 'tel:824863259',
        note: '+91 82486 3259',
    },
];

export default function ContactPage() {
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
                minHeight: '52vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
            }}>
                <div style={{
                    position: 'absolute', fontSize: 'clamp(180px,30vw,380px)',
                    color: 'rgba(0,255,194,0.04)', lineHeight: 1,
                    top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    fontFamily: 'var(--font-title)', userSelect: 'none', pointerEvents: 'none',
                }}>○</div>

                <div style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem 4rem' }}>
                    <span className="player-badge" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>REACH US</span>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                        fontWeight: 900, letterSpacing: '-1px', lineHeight: 1, marginBottom: '1rem',
                    }}>
                        <span style={{ color: 'var(--text)' }}>MAKE </span>
                        <span style={{ color: 'var(--secondary)', textShadow: '0 0 40px var(--secondary-glow)' }}>CONTACT</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
                        Have questions about ICON '26? Reach out to us directly.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
                        {contacts.map((c, i) => (
                            <a key={i} href={c.href} target={c.sym === '□' ? '_blank' : '_self'} rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <Card3D className="reveal" style={{ padding: '2.5rem', textAlign: 'center', cursor: 'pointer' }}>
                                    <div style={{
                                        fontSize: '3.5rem', lineHeight: 1, marginBottom: '1.2rem',
                                        fontFamily: 'var(--font-title)', color: c.color,
                                        textShadow: `0 0 25px ${c.color}`,
                                    }}>{c.sym}</div>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: 2, display: 'block', marginBottom: 10 }}>{c.label.toUpperCase()}</span>
                                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', fontWeight: 800, color: c.color, marginBottom: 8, wordBreak: 'break-word' }}>
                                        {c.value}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 1 }}>{c.note}</p>
                                </Card3D>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <div className="glow-line glow-line-teal" style={{ margin: '0 2rem' }} />

            {/* LOCATION */}
            <section className="section" style={{ paddingTop: 60 }}>
                <div className="container" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                    <span className="player-badge" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>LOCATION</span>
                    <h2 className="section-title reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
                        FIND <span className="highlight">US</span>
                    </h2>
                    <Card3D className="reveal" style={{ padding: '2.5rem', marginTop: '2rem', textAlign: 'left', cursor: 'default' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flexWrap: 'wrap' }}>
                            {[
                                { label: 'Institution', val: 'B.S. Abdur Rahman Crescent Institute of Science and Technology' },
                                { label: 'Department', val: 'Information Technology' },
                                { label: 'Location', val: 'Seethakathi Estate, Vandalur, Chennai - 600 048, Tamil Nadu, India' },
                                { label: 'Event Date', val: 'April 10, 2026' },
                            ].map(r => (
                                <div key={r.label}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: 2, display: 'block', marginBottom: 6, textTransform: 'uppercase' }}>{r.label}</span>
                                    <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.6 }}>{r.val}</p>
                                </div>
                            ))}
                        </div>
                    </Card3D>
                </div>
            </section>
        </main>
    );
}
