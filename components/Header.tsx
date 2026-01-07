"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, LoginIcon, ArrowRightIcon } from "./Icons";
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-header sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo and Nav */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Logo */}
            <Link href="/" className="block">
              <div className="relative w-[120px] h-[24px] sm:w-[140px] sm:h-[28px] md:w-[155px] md:h-[31px]">
                <Image
                  src="https://framerusercontent.com/images/lFfiEZXQ90gOCETZQUlsnugpmJo.png"
                  alt="Foreign Admits"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-2">
              {/* Our Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-text-primary text-[16px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                    Our Services
                  </span>
                  <div className="w-6 h-6 text-text-primary">
                    <ChevronDownIcon />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && <ServicesDropdown />}
              </div>

              {/* For Students */}
              <Link
                href="/"
                className="px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-text-primary text-[16px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                  For Students
                </span>
              </Link>

              {/* About Us */}
              <Link
                href="/about-us"
                className="px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-text-primary text-[16px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                  About Us
                </span>
              </Link>
            </nav>
          </div>

          {/* Right Section - Login & Partner Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Login Button */}
            <Link
              href="https://app.foreignadmits.com/auth/login"
              target="_blank"
              rel="noopener"
              className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-white border border-border rounded-lg hover:bg-gray-50 transition-all"
            >
              <span className="text-text-secondary text-[13px] md:text-[14px] font-medium tracking-[-0.02em] font-geist">
                Login
              </span>
              <div className="w-3 h-3 md:w-3.5 md:h-3.5 text-text-secondary">
                <LoginIcon />
              </div>
            </Link>

            {/* Become a Partner Button */}
            <Link
              href="/partner-with-us"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 md:py-2.5 bg-primary border border-primary-light rounded-lg shadow-button hover:bg-primary/90 transition-all"
            >
              <span className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-semibold tracking-[-0.04em] leading-[120%] font-inter whitespace-nowrap">
                Become a Partner
              </span>
              <div className="w-[13px] h-[10px] sm:w-[15px] sm:h-[11px] text-white flex-shrink-0">
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-2">
              {/* Our Services */}
              <Link
                href="/"
                className="px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-text-primary text-[15px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                  Our Services
                </span>
              </Link>

              {/* For Students */}
              <Link
                href="/"
                className="px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-text-primary text-[15px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                  For Students
                </span>
              </Link>

              {/* About Us */}
              <Link
                href="/about-us"
                className="px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-text-primary text-[15px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                  About Us
                </span>
              </Link>

              {/* Login (mobile only) */}
              <Link
                href="https://app.foreignadmits.com/auth/login"
                target="_blank"
                rel="noopener"
                className="sm:hidden px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-text-primary text-[15px] font-normal tracking-[-0.5px] leading-[24px] font-geist">
                  Login
                </span>
                <div className="w-3.5 h-3.5 text-text-secondary">
                  <LoginIcon />
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
