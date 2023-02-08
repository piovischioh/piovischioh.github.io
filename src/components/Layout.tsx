import type { ReactNode } from 'react';

import navLinks from '@/configs/navLinks';
import metadata from '@/configs/metadata.mjs';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import Logo from '../../public/images/logo.svg';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-between py-6 tracking-wider sm:py-10">
        <div>
          <Link href="/">
            <div className="flex items-center justify-between">
              <Logo
                className="fill-current text-black transition hover:text-gray-700 dark:text-white hover:dark:text-gray-300"
                width="100px"
                height="100px"
                viewBox="0 0 470 707"
              />
              <div className="h-6 text-2xl font-semibold">{metadata.title}</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {navLinks.map(link => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-semibold text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />

          <MobileNav />
        </div>
      </header>

      <main className="mb-auto">{children}</main>

      <footer className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{metadata.author}</div>
          <div>{' • '}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <Link href="/">{metadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/piovischioh/nextjs-blog-starter">
            Next.js Blog Starter
          </Link>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
