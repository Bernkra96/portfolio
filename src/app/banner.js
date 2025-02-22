'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export function cookieConsentGiven() {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent');
}

export function Banner() {
  const [consentGiven, setConsentGiven] = useState('');

  const router = useRouter();

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven('undecided');
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
    router.push('https://www.google.com/');
  };

  return (
    <div>
      {consentGiven === 'undecided' && (
        <div className="sticky top-0 z-4 flex gap-4 items-center flex-col sm:flex-row rid-rows-[20px_1fr_20px] justify-items-center  p-8   bg-green-300/75  dark:bg-green-700/75 backdrop-blur-lg ">
          <p>We have the Next.Js Default cookie</p>
          <button
            className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-green-300 dark:hover:bg-green-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            type="button"
            onClick={handleAcceptCookies}
          >
            Accept cookies
          </button>
          <span> </span>
          <button
            className="rounded-full border bg-slate-300 dark:bg-gray-900 border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-blue-300 dark:hover:bg-blue-950 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            type="button"
            onClick={handleDeclineCookies}
          >
            Decline cookies
          </button>
        </div>
      )}
    </div>
  );
}
