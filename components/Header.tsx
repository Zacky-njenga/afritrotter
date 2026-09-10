'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-purple-600 backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/90">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                {/* Logo & Brand Name */}
                <Link href="/public" className="flex items-center gap-3 transition-opacity hover:opacity-90">
                    <Image
                        src="/logo.png" // Place your logo image in the public/ folder as logo.png
                        alt="Afritrotter Logo"
                        width={44}
                        height={44}
                        className="h-11 w-auto object-contain"
                        priority
                    />
                    <span className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-100">
            Afritrotter
          </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/explore"
                        className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-600 dark:text-stone-300 dark:hover:text-emerald-400"
                    >
                        Explore Wildlife
                    </Link>
                    <Link
                        href="/regions"
                        className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-600 dark:text-stone-300 dark:hover:text-emerald-400"
                    >
                        Regions
                    </Link>
                    <Link
                        href="/map"
                        className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-600 dark:text-stone-300 dark:hover:text-emerald-400"
                    >
                        Interactive Map
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-600 dark:text-stone-300 dark:hover:text-emerald-400"
                    >
                        About
                    </Link>
                </nav>

                {/* Action Button (Desktop) */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link
                        href="/explore"
                        className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                    >
                        Start Exploring
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-200 focus:outline-none dark:text-stone-200 dark:hover:bg-stone-800 md:hidden"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="border-b border-stone-200 bg-amber-50/95 px-4 pb-6 pt-2 dark:border-stone-800 dark:bg-stone-900/95 md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/explore"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium text-stone-700 hover:text-emerald-600 dark:text-stone-200"
                        >
                            Explore Wildlife
                        </Link>
                        <Link
                            href="/regions"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium text-stone-700 hover:text-emerald-600 dark:text-stone-200"
                        >
                            Regions
                        </Link>
                        <Link
                            href="/map"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium text-stone-700 hover:text-emerald-600 dark:text-stone-200"
                        >
                            Interactive Map
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium text-stone-700 hover:text-emerald-600 dark:text-stone-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/explore"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 inline-block rounded-full bg-emerald-700 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-800"
                        >
                            Start Exploring
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}