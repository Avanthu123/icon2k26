import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="logo-text">ICON '26</span>
                    <p>Department of Information Technology<br />B.S. Abdur Rahman Crescent Institute of Science and Technology</p>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: 12 }}>
                        <span className="tag-pill tag-pill-red">○ CRESCENT</span>
                        <span className="tag-pill tag-pill-teal">△ 2026</span>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                        <ul>
                        <li><Link href="/">○ Home</Link></li>
                        <li><Link href="/events">□ Events</Link></li>
                        <li><Link href="/legion">○ Team</Link></li>
                        <li><Link href="/contact">△ Contact</Link></li>
                        </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 ICON '26 — Dept. of IT, B.S. Abdur Rahman Crescent Institute of Science and Technology</p>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span className="sym sym-circle" style={{ color: 'var(--primary)' }} />
                    <span className="sym sym-triangle" style={{ color: 'var(--secondary)' }} />
                    <span className="sym sym-square" style={{ color: 'var(--accent)' }} />
                </div>
            </div>
        </footer>
    );
}
