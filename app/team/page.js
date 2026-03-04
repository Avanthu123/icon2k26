'use client';
import { useEffect } from 'react';
import Card3D from '../components/Card3D';

const faculty = [
    {
        number: '001',
        name: 'Dr. N. Prakash',
        role: 'Professor & Head',
        dept: 'Department of Information Technology',
        sym: '○',
        color: 'var(--primary)',
        expertise: ["Faculty, ICON '26"],
    },
    {
        number: '002',
        name: 'Dr. Mohammed Wajid Khan',
        role: 'Assistant Professor',
        dept: 'Department of Information Technology',
        sym: '△',
        color: 'var(--secondary)',
        expertise: ["Faculty, ICON '26"],
    },
    {
        number: '003',
        name: 'Dr. P. Latchoumy',
        role: 'Associate Professor',
        dept: 'Department of Information Technology',
        sym: '□',
        color: 'var(--accent)',
        expertise: ["Faculty, ICON '26"],
    },
];

const students = [
    { name: 'Mohammed Hizbullah', role: 'General Secretary', year: 'B. Tech IT / IV Year', sym: '○', color: 'var(--primary)' },
    { name: 'Harini G', role: 'Joint Secretary', year: 'B. Tech IT / IV Year', sym: '△', color: '#22c55e' },
    { name: 'Avanthika A', role: 'Joint Secretary', year: 'B. Tech IT / IV Year', sym: '△', color: '#22c55e' },
    { name: 'Izhaan Waseem. M', role: 'Treasurer', year: 'B. Tech IT / IV Year', sym: '○', color: 'var(--accent)' },
    { name: 'Rishika Rai', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Swetha K', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Siddique S A', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Jerlin Sibiyal', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Niyajudeen N', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Shrinivas J R', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Noorul Afreen M.T', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Md Saifuddeen S', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Md Fazhululla S', role: 'Executive Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Abirama Varshini', role: 'Executive Committee Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Abirami M', role: 'Executive Committee Member', year: 'B. Tech IT / IV Year', sym: '○', color: '#a855f7' },
    { name: 'Afraa N', role: 'Executive Committee Member', year: 'M. Tech IT / II Year', sym: '○', color: '#a855f7' },
];

export default function TeamPage() {
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
                    position: 'absolute',
                    fontSize: 'clamp(180px, 30vw, 380px)',
                    color: 'rgba(255,215,0,0.04)', lineHeight: 1,
                    top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                    fontFamily: 'var(--font-title)', userSelect: 'none', pointerEvents: 'none',
                }}>□</div>

                <div style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem 4rem' }}>
                    <span className="player-badge" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>THE TEAM</span>
                    <h1 style={{
                        fontFamily: 'var(--font-title)', fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                        fontWeight: 900, letterSpacing: '-1px', lineHeight: 1, marginBottom: '1rem',
                    }}>
                        THE <span style={{ color: 'var(--accent)', textShadow: '0 0 40px var(--accent-glow)' }}>TEAM</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
                        Meet the team behind ICON '26 — the faculty and student organizers powering this national-level symposium.
                    </p>
                </div>
            </section>

            {/* FACULTY */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title reveal">FACULTY</h2>
                    <div className="title-divider reveal"><span className="divider-symbol">○</span></div>
                    <p className="section-subtitle reveal">&nbsp;</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
                        {faculty.map((f, i) => (
                            <Card3D key={i} className="reveal" style={{ padding: '2rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
                                {/* BG number */}
                                <div style={{
                                    position: 'absolute', bottom: -15, right: -10,
                                    fontFamily: 'var(--font-title)', fontSize: '6rem', fontWeight: 900,
                                    color: `${f.color === 'var(--primary)' ? '#ff0060' : f.color === 'var(--secondary)' ? '#00ffc2' : f.color === 'var(--accent)' ? '#ffd700' : '#a855f7'}10`,
                                    lineHeight: 1, userSelect: 'none',
                                }}>{f.number}</div>

                                <div style={{ marginBottom: '1.2rem' }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: 2 }}>PLAYER {f.number}</span>
                                </div>

                                <div style={{
                                    width: 70, height: 70, borderRadius: '50%',
                                    border: `2px solid ${f.color}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.2rem',
                                    background: `${f.color === 'var(--primary)' ? 'rgba(255,0,96,0.1)' : f.color === 'var(--secondary)' ? 'rgba(0,255,194,0.1)' : f.color === 'var(--accent)' ? 'rgba(255,215,0,0.1)' : 'rgba(168,85,247,0.1)'}`,
                                    fontSize: '1.8rem', fontFamily: 'var(--font-title)', color: f.color,
                                    boxShadow: `0 0 20px ${f.color === 'var(--primary)' ? 'rgba(255,0,96,0.3)' : 'rgba(0,0,0,0.3)'}`,
                                }}>
                                    {f.sym}
                                </div>

                                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 800, marginBottom: 4, color: 'var(--text)', letterSpacing: 1 }}>
                                    {f.name}
                                </h3>
                                <p style={{ color: f.color, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                                    {f.role}
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.2rem' }}>{f.dept}</p>
                            </Card3D>
                        ))}
                    </div>
                </div>
            </section>

            <div className="glow-line" style={{ margin: '0 2rem' }} />

            {/* STUDENT TEAM */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title reveal">STUDENT <span className="highlight-teal">ORGANIZERS</span></h2>
                    <div className="title-divider reveal"><span className="divider-symbol">△</span></div>
                    <p className="section-subtitle reveal">The student team driving ICON '26 — from registrations and scheduling to design, dev, and operations.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
                        {students.map((s, i) => (
                            <div key={i} className="reveal card-3d" style={{
                                padding: '1.5rem',
                                display: 'flex', gap: '1rem', alignItems: 'center',
                                cursor: 'default',
                            }}>
                                <div style={{
                                    width: 50, height: 50, borderRadius: '50%', flexShrink: 0,
                                    border: `1px solid ${s.color}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem', fontFamily: 'var(--font-title)', color: s.color,
                                    background: 'rgba(255,255,255,0.03)',
                                }}>
                                    {s.sym}
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text)', margin: '2px 0', letterSpacing: 0.5 }}>{s.name}</h4>
                                    <p style={{ color: s.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 1 }}>{s.role}</p>
                                    <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: 1 }}>{s.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
