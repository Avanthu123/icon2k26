'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card3D from './components/Card3D';

// Event date: April 10, 2026, 09:00 AM
const EVENT_DATE = new Date('2026-04-10T09:00:00');

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    function tick() {
      const now = new Date();
      const diff = Math.max(0, EVENT_DATE - now);
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = n => String(n).padStart(2, '0');

  return (
    <div className="countdown">
      {[['DAYS', time.d], ['HRS', time.h], ['MIN', time.m], ['SEC', time.s]].map(([label, val]) => (
        <div key={label} className="countdown-item">
          <span className="countdown-num">{pad(val)}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

const domains = [
  {
    sym: '○',
    color: 'var(--primary)',
    label: 'Technical Events',
    desc: 'Code. Compete. Conquer. Technical challenges where logic wins the game.',
    href: '/events#technical',
  },
  {
    sym: '△',
    color: 'var(--secondary)',
    label: 'Non-Technical Events',
    desc: "ICON's Non-Tech Arena – where fun meets strategy.",
    href: '/events#nontechnical',
  },
];

const stats = [
  { num: '8', label: 'Exciting Events' },
  { num: '300+', label: 'Expected Participants' },
  { num: '₹1L', label: 'Total Prize Pool' },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const [heroAngle, setHeroAngle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setHeroAngle({ x: y * 8, y: -x * 8 });
    };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', () => setHeroAngle({ x: 0, y: 0 }));
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 150,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Big bg symbol */}
        <div style={{
          position: 'absolute',
          fontSize: 'clamp(280px, 40vw, 500px)',
          color: 'rgba(255,0,96,0.04)',
          userSelect: 'none',
          lineHeight: 1,
          top: '50%', left: '50%',
          transform: `translate(-50%, -50%) perspective(600px) rotateX(${heroAngle.x}deg) rotateY(${heroAngle.y}deg)`,
          transition: 'transform 0.3s ease',
          fontFamily: 'var(--font-title)',
          zIndex: 0,
          pointerEvents: 'none',
        }}>
          □
        </div>

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 900, padding: '1.5rem 2rem 0' }}>
          <div
            style={{
              marginBottom: '2.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/logos/icon logo final.png"
              alt="ICON '26 – A National Level Technical Symposium"
              width={420}
              height={140}
              style={{
                maxWidth: '100%',
                height: 'auto',
                transform: `perspective(600px) rotateX(${heroAngle.x * 0.5}deg) rotateY(${heroAngle.y * 0.5}deg)`,
                transition: 'transform 0.3s ease',
              }}
              priority
            />
          </div>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: 600,
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
              fontFamily: 'var(--font-body)',
            }}
          >
            A national-level technical symposium by the Department of Information Technology, Crescent
            — celebrating technology, creativity, and the spirit of problem-solving.
          </p>

          <div style={{ marginBottom: '3rem' }}>
            <Countdown />
          </div>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <span>□</span> Click to Compete
            </a>
            <Link href="/icon" className="btn-secondary">
              <span>△</span> About ICON
            </Link>
          </div>

          {/* Scroll indicator */}
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: 3 }}>SCROLL</span>
            <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, var(--primary), transparent)', animation: 'scrollPulse 1.5s ease-in-out infinite' }} />
          </div>
        </div>

        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 1; transform: scaleY(1); }
            50% { opacity: 0.3; transform: scaleY(0.5); }
          }
        `}</style>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal">
              <div style={{ marginBottom: '1rem' }}>
                <span className="player-badge">PLAYER 001</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.2, letterSpacing: 2 }}>
                THE DEPARTMENT OF <span style={{ color: 'var(--primary)', textShadow: '0 0 15px var(--primary-glow)' }}>INFORMATION<br />TECHNOLOGY</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1.05rem' }}>
                Established in 1999, the Department of Information Technology offers accredited B.Tech, M.Tech, and Ph.D. programs, emphasizing an outcome-based teaching-learning process.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                Our curriculum, designed with industry participation, ensures our students are well-prepared for the workforce — with state-of-the-art laboratories, ICT-enabled classrooms, and a robust Learning Management System.
              </p>
              <div style={{ marginTop: '1.8rem', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span className="tag-pill tag-pill-red">Since 1999</span>
                <span className="tag-pill tag-pill-teal">B.Tech · M.Tech · Ph.D</span>
                <span className="tag-pill tag-pill-gold">NAAC Accredited</span>
              </div>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* Image block outside map */}
              <div className="reveal" style={{ gridColumn: '1 / -1' }}>
                  <Image
                    src="/photos/WhatsApp_Image_2025-01-10_at_11.png"
                    alt="ICON '26 overview"
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line glow-line-teal" style={{ margin: '0 2rem' }} />

      {/* DOMAINS PREVIEW */}
      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">
            Explore
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {domains.map((d, i) => (
              <Link key={i} href={d.href} style={{ textDecoration: 'none' }}>
                <Card3D
                  className="reveal"
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    padding: '2rem 1.5rem',
                    borderColor: `${d.color}44`,
                    animationDelay: `${i * 0.1}s`,
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      fontSize: '3rem',
                      lineHeight: 1,
                      marginBottom: '1rem',
                      color: d.color,
                      textShadow: `0 0 20px ${d.color}`,
                      fontFamily: 'var(--font-title)',
                    }}
                  >
                    {d.sym}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      letterSpacing: 2,
                      marginBottom: '0.8rem',
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {d.label}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {d.desc}
                  </p>
                  <div
                    style={{
                      marginTop: '1.2rem',
                      color: d.color,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: 1,
                    }}
                  >
                    EXPLORE →
                  </div>
                </Card3D>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/events" className="btn-primary reveal">
              <span>△</span> View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,0,96,0.08) 0%, transparent 50%, rgba(0,255,194,0.05) 100%)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 className="section-title reveal">
            READY TO <span className="highlight">COMPETE</span>?
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              marginBottom: '2.5rem',
              maxWidth: 500,
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
            }}
            className="reveal"
          >
            Registration fee is <span style={{ color: 'var(--accent)', fontWeight: 700 }}>₹200</span> per student.
          </p>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary reveal"
            style={{ fontSize: '1rem', padding: '18px 50px' }}
          >
            <span>□</span> Register Now
          </a>
        </div>
      </section>
    </main>
  );
}