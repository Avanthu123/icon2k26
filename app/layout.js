import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export const metadata = {
  title: "Icon '26 - A National Level Technical Symposium",
  description:
    'ICON, a National-level symposium, is meticulously organized by the professional society "Society of Information Technologists (SIT)," as a platform to elevate the technical skills of students. This symposium, hosted by the department, serves as a dynamic arena for knowledge exchange and skill enhancement, fostering a vibrant community of Information Technology enthusiasts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="squid-bg" />
        <ParticleBackground />
        <Navbar />
        <div className="page-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
