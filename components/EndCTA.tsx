import Image from 'next/image';
import Link from 'next/link';

export default function EndCTA() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden" id="end-cta">
      {/* Background Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* MacBook Air Background - Radial Gradient */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          style={{
            opacity: 0.8,
            zIndex: 0,
            background: 'radial-gradient(100% 100% at 49.7738% 3.53902e-7%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
            width: '102%',
            height: '100%',
            position: 'absolute',
            top: '-0.360578%',
            left: '-1.12847%'
          }}
        />

        {/* Decorative Illustration */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[697px] lg:h-[697px] pointer-events-none"
          style={{ transform: 'translateX(-50%) translateY(-50%) rotate(-3deg)' }}
        >
          <Image
            src="https://framerusercontent.com/images/TABS4DSQSygfQ4VoPKLpZoyr5o0.png"
            alt=""
            width={1080}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 md:mb-8">
            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight tracking-[-0.04em] text-white mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Ready to Transform Your Study Abroad Journey?
            </h2>
            <p 
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[140%] tracking-[-0.04em] text-white"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Join 500+ consultants using ForeignAdmits to empower thousands of students across the globe. One platform, all services, zero hassle.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/partner-with-us"
            target="_blank"
            className="inline-flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
          >
            <span 
              className="text-[13px] md:text-[14px] font-semibold tracking-[-0.04em] leading-[120%] text-primary"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Become a Partner
            </span>
            <div className="flex items-center justify-center">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="text-primary w-[13px] md:w-[15px]">
                <use href="https://www.foreignadmits.com/#svg-205002145_279" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
