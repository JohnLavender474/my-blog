import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">John Lavender's Website</h1>
        </Link>
        <p className="text-slate-300">Welcome to my professional website!</p>      
        <div className="grid grid-cols-3 gap-3">
          <div style={{margin: "auto", width: "50px" }}>
            <a href="https://linkedin.com/in/john-lavender" target="_blank" rel="noreferrer">
              <Image
                src="/images/linkedin.png"
                width={40}
                height={40}
                className="mx-auto"
                alt={"linkedin"}          
              />
            </a>
          </div>
          <div style={{margin: "auto", width: "50px" }}>
            <a href="https://github.com/JohnLavender474" target="_blank" rel="noreferrer">
              <Image
                src="/images/github-mark-white.png"
                width={40}
                height={40}
                className="mx-auto"
                alt={"github"}          
              />
            </a> 
          </div>  
          <div style={{margin: "auto", width: "50px" }}>
            <a href="https://drive.google.com/file/d/1AlRyugfpBGoCz9u7V0TgsRT7zi7zZhfZ/view?usp=sharing"
                target="_blank" rel="noreferrer">
              <Image
                src="/images/resume.png"
                width={40}
                height={40}
                className="mx-auto"
                alt={"resume"}          
              />
            </a> 
          </div>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by John Lavender</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
