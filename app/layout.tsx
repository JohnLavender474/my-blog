import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  const header = (
    <header>
      <div className="site-header">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          style={{ height: 'auto' }}
          alt="logo"
        />
        <Link href="/">
          <h1 className="site-title">John Lavender's Website</h1>
        </Link>
        <p className="site-subtitle">Welcome to my professional website!</p>
        <div className="header-links">
          <div className="header-link-item">
            <a href="https://linkedin.com/in/john-lavender" target="_blank" rel="noreferrer">
              <Image src="/images/linkedin.png" width={40} height={40} className="mx-auto" style={{ height: 'auto' }} alt="linkedin" />
            </a>
          </div>
          <div className="header-link-item">
            <a href="https://github.com/JohnLavender474" target="_blank" rel="noreferrer">
              <Image src="/images/github-mark-white.png" width={40} height={40} className="mx-auto" style={{ height: 'auto' }} alt="github" />
            </a>
          </div>
          <div className="header-link-item">
            <a href="https://drive.google.com/file/d/119rc7UIrcMbQ-8-ZnX4QPwFY8X6jpD6a/view?usp=sharing" target="_blank" rel="noreferrer">
              <Image src="/images/resume.png" width={40} height={40} className="mx-auto" style={{ height: 'auto' }} alt="resume" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="site-footer">
        <h3>Designed by John Lavender</h3>
      </div>
    </footer>
  );

  return (
    <html suppressHydrationWarning>
      <head>
        <title>John Lavender's Website</title>
      </head>
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
          <Analytics />
        </div>
        <DarkModeToggle />
      </body>
    </html>
  );
}
