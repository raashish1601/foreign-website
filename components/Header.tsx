"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, LoginIcon, ArrowRightIcon } from "./Icons";
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-header sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo and Nav */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="block">
              <div className="relative w-[155px] h-[31px]">
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
          <div className="flex items-center gap-3">
            {/* Login Button */}
            <Link
              href="https://app.foreignadmits.com/auth/login"
              target="_blank"
              rel="noopener"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-lg hover:bg-gray-50 transition-all"
            >
              <span className="text-text-secondary text-[14px] font-medium tracking-[-0.02em] font-geist">
                Login
              </span>
              <div className="w-3.5 h-3.5 text-text-secondary">
                <LoginIcon />
              </div>
            </Link>

            {/* Become a Partner Button */}
            <Link
              href="/partner-with-us"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary border border-primary-light rounded-lg shadow-button hover:bg-primary/90 transition-all"
            >
              <span className="text-white text-[14px] font-semibold tracking-[-0.04em] leading-[120%] font-inter">
                Become a Partner
              </span>
              <div className="w-[15px] h-[11px] text-white">
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
