import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Banner } from './banner';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Bernhard Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner />
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center sm:p-10 ">
          <a
            className="rounded-full border bg-gray-300  dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a
            className="rounded-full border bg-gray-300  dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jobs
          </a>
          <a
            className="rounded-full border bg-gray-300  dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#education"
            target="_blank"
            rel="noopener noreferrer"
          >
            Education
          </a>
          <a
            className="rounded-full border bg-gray-300  dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#store"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
