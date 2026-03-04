'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home', sym: '○' },
        { href: '/techfusion', label: 'About Icon', sym: '△' },
        { href: '/events', label: 'Events', sym: '□' },
        { href: '/legion', label: 'Team', sym: '○' },
        { href: '/contact', label: 'Contact', sym: '△' },
    ];

    return (
        <>
            <nav className="nav">
                {/* Desktop logos row */}
                <div className="nav-logo-row desktop-only">
                    <div className="nav-logo-item">
                        <div className="nav-logo-box nav-logo-box-large">
                            <Image
                                src="/logos/crescent-logo-white.png"
                                alt="Crescent logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div className="nav-logo-item">
                        <div className="nav-logo-box">
                            <Image
                                src="/logos/SIT logo.png"
                                alt="SIT logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile logo + hamburger */}
                <div className="nav-mobile-header mobile-only">
                    <div className="nav-logo-box nav-logo-box-mobile">
                        <Image
                            src="/logos/crescent-logo-white.png"
                            alt="Crescent logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <button
                        className="hamburger"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                        <span style={{ opacity: mobileOpen ? 0 : 1 }} />
                        <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                    </button>
                </div>

                {/* Desktop nav links */}
                <ul className="nav-links desktop-only">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className={pathname === l.href ? 'active' : ''}
                                onClick={() => setMobileOpen(false)}
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                            <a
                                href="https://unstop.com"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-register-btn"
                                onClick={() => setMobileOpen(false)}
                            >
                                Register Now
                            </a>
                        </li>
                </ul>
            </nav>

            {/* Mobile drawer */}
            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <div className="nav-logo-box nav-logo-box-drawer">
                        <Image
                            src="/logos/icon logo final.png"
                            alt="ICON '26 logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
                {links.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                        <span style={{ color: 'var(--primary)', marginRight: 12, fontSize: '1rem' }}>{l.sym}</span>
                        {l.label}
                    </Link>
                ))}
                <a
                    href="https://unstop.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileOpen(false)}
                    style={{
                        background: 'var(--primary)',
                        padding: '14px 40px',
                        borderRadius: 6,
                        color: '#fff',
                        fontFamily: 'var(--font-title)',
                        fontSize: '1rem',
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        marginTop: 16,
                    }}
                >
                    Register Now
                </a>
                <div className="mobile-nav-footer">
                    <div className="nav-logo-box nav-logo-box-drawer">
                        <Image
                            src="/logos/SIT logo.png"
                            alt="SIT logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
