'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? 'text-blue-400 font-semibold'
      : 'hover:text-blue-400';

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-6 bg-gray-800/80 backdrop-blur shadow-md">
      <h1 className="text-2xl font-bold">Tyler Baker</h1>
      <ul className="flex space-x-6 items-center">
        <li><Link href="/" className={linkClass('/')}>Home</Link></li>
        <li><Link href="/about" className={linkClass('/about')}>About</Link></li>
        <li><Link href="/projects" className={linkClass('/projects')}>Projects</Link></li>
        <li><Link href="/contact" className={linkClass('/contact')}>Contact</Link></li>
        <li>
          <a
            href="/tyler-baker-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
