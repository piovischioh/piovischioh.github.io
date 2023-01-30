import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import navLinks from '@/configs/navLinks';
import metadata from '@/configs/metadata.mjs';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

const Layout = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10 tracking-wider">
          <div>
            <Link href="/">
              <div className="flex items-center justify-between">
                <div className="mr-3 text-gray-200">
                  <Image
                    src={
                      mounted && resolvedTheme === 'dark'
                        ? '/images/logo-dark.svg'
                        : '/images/logo.svg'
                    }
                    alt="logo"
                    width={100}
                    height={100}
                    className="h-[100px]"
                  />
                </div>
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {metadata.title}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 text-gray-900 dark:text-gray-100 sm:p-4"
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
            <Link href="https://piovischioh.github.io">{metadata.title}</Link>
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
};

export default Layout;
