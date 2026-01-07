"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    number: "100,000+",
    label: "Students Served",
    leftSvg: "svg-2031969519_7293",
    rightSvg: "svg-1614009930_7303",
  },
  {
    number: "₹1500 Cr+",
    label: "Loans Facilitated",
    leftSvg: "svg711472492_7301",
    rightSvg: "svg-1405087650_7322",
  },
  {
    number: "700+",
    label: "Trusted Partners",
    leftSvg: "svg56505306_7297",
    rightSvg: "svg-83776945_7331",
  },
  {
    number: "200+",
    label: "University Partners",
    leftSvg: "svg56505306_7297",
    rightSvg: "svg-83776945_7331",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-12 md:py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg
          style={{ width: "100%", height: "100%" }}
          viewBox="0 0 1280 906"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <use href="https://www.foreignadmits.com/#svg558987488_1121" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 md:mb-6"
          >
            {/* Title Container */}
            <div className="flex flex-col items-center gap-0">
              {/* Line 1: "One Platform," */}
              <div className="inline-block">
                <h1
                  className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-semibold font-inter tracking-[-0.04em] text-center leading-[1.1]"
                  style={{
                    background: "linear-gradient(0deg, rgb(0, 141, 234) 0%, rgb(48, 172, 255) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  One Platform, Endless Possibilities
                </h1>
              </div>

              {/* Line 2: "for Students" */}
              <div className="inline-block">
                <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-semibold font-inter tracking-[-0.04em] text-[rgb(29,32,38)] text-center leading-[1.1]">
                  for Students Abroad.
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8 md:mb-12 max-w-[800px] px-4"
          >
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal tracking-[-0.04em] leading-[140%] text-[rgb(29,32,38)] text-center">
              Empower your business and students with AI-driven tools, seamless applications, and trusted global partnerships.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 md:gap-4"
              >
                {/* Left SVG */}
                <div className="w-[30px] h-[45px] sm:w-[40px] sm:h-[60px] md:w-[53px] md:h-[81px] flex-shrink-0">
                  <svg
                    style={{ width: "100%", height: "100%" }}
                    viewBox="0 0 53 81"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                  >
                    <use href={`https://www.foreignadmits.com/#${stat.leftSvg}`} />
                  </svg>
                </div>

                {/* Stat Content */}
                <div className="flex flex-col">
                  <div className="text-[18px] sm:text-[20px] md:text-[24px] font-bold font-inter tracking-[-0.06em] leading-[120%] text-primary">
                    {stat.number}
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-[14px] font-medium font-inter tracking-[-0.04em] leading-[120%] text-[rgb(57,57,57)]">
                    {stat.label}
                  </div>
                </div>

                {/* Right SVG */}
                <div className="w-[30px] h-[45px] sm:w-[40px] sm:h-[60px] md:w-[53px] md:h-[81px] flex-shrink-0">
                  <svg
                    style={{ width: "100%", height: "100%" }}
                    viewBox="0 0 53 81"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                  >
                    <use href={`https://www.foreignadmits.com/#${stat.rightSvg}`} />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="./partner-with-us"
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-3 md:py-4 bg-primary border border-primary-light rounded-lg shadow-button hover:bg-primary/90 transition-all"
            >
              <span className="text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold font-inter tracking-[-0.04em] leading-[120%]">
                Become a Partner
              </span>
              <div className="w-[15px] h-[11px] sm:w-[17px] sm:h-[12px]">
                <svg
                  viewBox="0 0 16.76 12.29"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2.048 6.145 L 14.711 6.145 M 14.711 6.145 L 9.963 1.397 M 14.711 6.145 L 9.963 10.894"
                    fill="transparent"
                    strokeWidth="1.19"
                    stroke="rgb(255,255,255)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
