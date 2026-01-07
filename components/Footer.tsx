import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="relative py-16"
      id="footer"
      style={{ 
        background: 'linear-gradient(rgb(47, 69, 92) 0%, rgb(23, 38, 54) 100%)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Logo and CTA Column */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                {/* Logo */}
                <Link href="/" className="inline-block mb-4">
                  <svg width="230" height="45" viewBox="0 0 230 45" className="w-[155px] h-auto">
                    <use href="https://www.foreignadmits.com/#svg-1442010744_12575" />
                  </svg>
                </Link>
                <p 
                  className="text-[rgb(225,225,225)] font-medium tracking-[-0.04em] leading-[1.4em]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  One-Stop-Shop for your study abroad needs
                </p>
              </div>

              {/* Partner Button */}
              <Link
                href="/partner-with-us"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-lg border border-[rgb(64,163,230)] hover:shadow-lg transition-all"
                style={{
                  boxShadow: 'rgb(0, 141, 234) 0px 0px 0px 1px, rgba(0, 141, 234, 0.48) 0px 1px 2px 0px, rgba(0, 141, 234, 0.15) 0px 0px 0px 5px'
                }}
              >
                <span 
                  className="text-[14px] font-semibold tracking-[-0.04em] leading-[120%] text-white"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Partner With Us
                </span>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" className="text-white">
                  <use href="https://www.foreignadmits.com/#svg-284603687_298" />
                </svg>
              </Link>

              {/* Member Badges */}
              <div className="mt-8">
                <p 
                  className="text-[rgb(225,225,225)] font-semibold tracking-[-0.04em] mb-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Member of
                </p>
                <div className="flex gap-4">
                  <div 
                    className="relative w-[132px] h-[76px] rounded-[5.48px] border-[0.62px] border-black"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.08) -4.19px 8.39px 12.512px 0px' }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/Nq434ek7t3bpT2wFu0clZsdwmo.png"
                      alt=""
                      width={656}
                      height={380}
                      className="absolute inset-0 w-full h-full object-fill rounded-[5.48px]"
                    />
                    <Image
                      src="https://framerusercontent.com/images/qzEfnVla789wgYZIf9kvnMye3I.png"
                      alt=""
                      width={270}
                      height={123}
                      className="absolute inset-0 w-full h-full object-cover rounded-[5.48px]"
                    />
                  </div>
                  <div 
                    className="relative w-[132px] h-[76px] rounded-[5.58px] border-[0.62px] border-black"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.08) -4.27px 8.54px 12.7434px 0px' }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/lLGAd40aEJwfiLrQcKyBclnELmQ.png"
                      alt=""
                      width={856}
                      height={396}
                      className="absolute inset-0 w-full h-full object-fill rounded-[5.48px]"
                    />
                    <Image
                      src="https://framerusercontent.com/images/9mDEUUQuuXWYW2bHP2gpwZAo0s.png"
                      alt=""
                      width={680}
                      height={234}
                      className="absolute inset-0 w-full h-full object-cover rounded-[5.48px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* By Destination Column */}
            <div className="lg:col-span-2">
              <h3 
                className="text-white font-semibold tracking-[-0.04em] mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                By Destination
              </h3>
              <ul className="space-y-3">
                {['USA', 'UK', 'Australia', 'Newzealand', 'Germany', 'Canada', 'Ireland', 'France'].map((dest) => (
                  <li key={dest}>
                    <span 
                      className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {dest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Column */}
            <div className="lg:col-span-2">
              <h3 
                className="text-white font-semibold tracking-[-0.04em] mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://loan.foreignadmits.com/" 
                    target="_blank" 
                    rel="noopener"
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Education Loan Tool
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.mydreamuniversity.in/MFL4D0WF" 
                    target="_blank" 
                    rel="noopener"
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Course Finder
                  </a>
                </li>
                <li>
                  <a 
                    href="https://prod-loanmonk.foreignadmits.app/auth" 
                    target="_blank" 
                    rel="noopener"
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    LoanMonk
                  </a>
                </li>
                <li>
                  <a 
                    href="https://app.foreignadmits.com/auth/login" 
                    target="_blank" 
                    rel="noopener"
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Study Abroad CRM
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3">
              <h3 
                className="text-white font-semibold tracking-[-0.04em] mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Admissions', href: '/university-admissions' },
                  { name: 'Test Prep', href: '/test-prep' },
                  { name: 'Education Loans', href: '/education-loans' },
                  { name: 'Accommodation', href: '/accommodations' },
                  { name: 'Visa Prep (AI Mock Interview)', href: '/mock-visa' },
                  { name: 'Bank Accounts Setup', href: '/bank-accounts' },
                  { name: 'GIC Account', href: '/gic' },
                  { name: 'Blocked Account', href: '/blocked-account' },
                  { name: 'Forex & Transfers', href: '/forex' },
                  { name: 'Insurance', href: '/insurance' },
                  { name: 'Credit Cards for Students', href: '/credit-card' },
                  { name: 'Flight Tickets', href: '/flight-tickets' },
                  { name: 'SIM Cards', href: '/sim-card' },
                ].map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80 hover:opacity-100 transition-opacity"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h3 
                className="text-white font-semibold tracking-[-0.04em] mb-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about-us"
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <span 
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Careers
                  </span>
                </li>
                <li>
                  <span 
                    className="text-[14px] font-medium tracking-[-0.04em] text-white opacity-80"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Blogs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright and Links */}
          <div className="flex flex-wrap items-center gap-3 text-white opacity-80">
            <span 
              className="font-medium tracking-[-0.04em]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              © 2025 Edument Consultancy Pvt. Ltd.
            </span>
            <span>•</span>
            <Link 
              href="/legal/terms-and-condition"
              className="font-medium tracking-[-0.04em] hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Terms & Condition
            </Link>
            <span>•</span>
            <Link 
              href="/legal/privacy-policy"
              className="font-medium tracking-[-0.04em] hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <span 
              className="font-medium tracking-[-0.04em]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Refund Policy
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/company/foreignadmits/" 
              target="_blank" 
              rel="noopener"
              className="w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M 18.52 0 L 1.477 0 C 0.66 0 0 0.645 0 1.441 L 0 18.555 C 0 19.352 0.66 20 1.477 20 L 18.52 20 C 19.336 20 20 19.352 20 18.559 L 20 1.441 C 20 0.645 19.336 0 18.52 0 Z M 5.934 17.043 L 2.965 17.043 L 2.965 7.496 L 5.934 7.496 Z M 4.449 6.195 C 3.496 6.195 2.727 5.426 2.727 4.477 C 2.727 3.527 3.496 2.758 4.449 2.758 C 5.398 2.758 6.168 3.527 6.168 4.477 C 6.168 5.422 5.398 6.195 4.449 6.195 Z M 17.043 17.043 L 14.078 17.043 L 14.078 12.402 C 14.078 11.297 14.059 9.871 12.535 9.871 C 10.992 9.871 10.758 11.078 10.758 12.324 L 10.758 17.043 L 7.797 17.043 L 7.797 7.496 L 10.641 7.496 L 10.641 8.801 L 10.68 8.801 C 11.074 8.051 12.043 7.258 13.484 7.258 C 16.488 7.258 17.043 9.234 17.043 11.805 L 17.043 17.043 Z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/foreignadmits?igsh=ZWx5ZGZhNmlqcHJo" 
              target="_blank" 
              rel="noopener"
              className="w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M 10 1.801 C 12.672 1.801 12.988 1.813 14.039 1.859 C 15.016 1.902 15.543 2.066 15.895 2.203 C 16.359 2.383 16.695 2.602 17.043 2.949 C 17.395 3.301 17.609 3.633 17.789 4.098 C 17.926 4.449 18.09 4.98 18.133 5.953 C 18.18 7.008 18.191 7.324 18.191 9.992 C 18.191 12.664 18.18 12.981 18.133 14.031 C 18.09 15.008 17.926 15.535 17.789 15.887 C 17.609 16.352 17.391 16.688 17.043 17.035 C 16.691 17.387 16.359 17.602 15.895 17.781 C 15.543 17.918 15.012 18.082 14.039 18.125 C 12.984 18.172 12.668 18.184 10 18.184 C 7.328 18.184 7.012 18.172 5.961 18.125 C 4.984 18.082 4.457 17.918 4.105 17.781 C 3.641 17.602 3.305 17.383 2.957 17.035 C 2.605 16.684 2.391 16.352 2.211 15.887 C 2.074 15.535 1.91 15.004 1.867 14.031 C 1.82 12.977 1.809 12.66 1.809 9.992 C 1.809 7.32 1.82 7.004 1.867 5.953 C 1.91 4.977 2.074 4.449 2.211 4.098 C 2.391 3.633 2.609 3.297 2.957 2.949 C 3.309 2.598 3.641 2.383 4.105 2.203 C 4.457 2.066 4.988 1.902 5.961 1.859 C 7.012 1.813 7.328 1.801 10 1.801 Z M 10 0 C 7.285 0 6.945 0.012 5.879 0.059 C 4.816 0.105 4.086 0.277 3.453 0.523 C 2.793 0.781 2.234 1.121 1.68 1.68 C 1.121 2.234 0.781 2.793 0.523 3.449 C 0.277 4.086 0.105 4.813 0.059 5.875 C 0.012 6.945 0 7.285 0 10 C 0 12.715 0.012 13.055 0.059 14.121 C 0.105 15.184 0.277 15.914 0.523 16.547 C 0.781 17.207 1.121 17.766 1.68 18.32 C 2.234 18.875 2.793 19.219 3.449 19.473 C 4.086 19.719 4.813 19.891 5.875 19.938 C 6.941 19.984 7.281 19.996 9.996 19.996 C 12.711 19.996 13.051 19.984 14.117 19.938 C 15.18 19.891 15.91 19.719 16.543 19.473 C 17.199 19.219 17.758 18.875 18.313 18.32 C 18.867 17.766 19.211 17.207 19.465 16.551 C 19.711 15.914 19.883 15.188 19.93 14.125 C 19.977 13.059 19.988 12.719 19.988 10.004 C 19.988 7.289 19.977 6.949 19.93 5.883 C 19.883 4.82 19.711 4.09 19.465 3.457 C 19.219 2.793 18.879 2.234 18.32 1.68 C 17.766 1.125 17.207 0.781 16.551 0.527 C 15.914 0.281 15.188 0.109 14.125 0.063 C 13.055 0.012 12.715 0 10 0 Z" />
                <path d="M 10 4.863 C 7.164 4.863 4.863 7.164 4.863 10 C 4.863 12.836 7.164 15.137 10 15.137 C 12.836 15.137 15.137 12.836 15.137 10 C 15.137 7.164 12.836 4.863 10 4.863 Z M 10 13.332 C 8.16 13.332 6.668 11.84 6.668 10 C 6.668 8.16 8.16 6.668 10 6.668 C 11.84 6.668 13.332 8.16 13.332 10 C 13.332 11.84 11.84 13.332 10 13.332 Z" />
                <path d="M 16.539 4.66 C 16.539 5.324 16 5.859 15.34 5.859 C 14.676 5.859 14.141 5.32 14.141 4.66 C 14.141 3.996 14.68 3.461 15.34 3.461 C 16 3.461 16.539 4 16.539 4.66 Z" />
              </svg>
            </a>
            <a 
              href="https://youtube.com/@foreignadmits?si=2-rwmFU7g4IyL0ru" 
              target="_blank" 
              rel="noopener"
              className="w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M 19.801 6 C 19.801 6 19.605 4.621 19.004 4.016 C 18.242 3.219 17.391 3.215 17 3.168 C 14.203 2.965 10.004 2.965 10.004 2.965 L 9.996 2.965 C 9.996 2.965 5.797 2.965 3 3.168 C 2.609 3.215 1.758 3.219 0.996 4.016 C 0.395 4.621 0.203 6 0.203 6 C 0.203 6 0 7.621 0 9.238 L 0 10.754 C 0 12.371 0.199 13.992 0.199 13.992 C 0.199 13.992 0.395 15.371 0.992 15.977 C 1.754 16.773 2.754 16.746 3.199 16.832 C 4.801 16.984 10 17.031 10 17.031 C 10 17.031 14.203 17.023 17 16.824 C 17.391 16.777 18.242 16.773 19.004 15.977 C 19.605 15.371 19.801 13.992 19.801 13.992 C 19.801 13.992 20 12.375 20 10.754 L 20 9.238 C 20 7.621 19.801 6 19.801 6 Z M 7.934 12.594 L 7.934 6.973 L 13.336 9.793 Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
