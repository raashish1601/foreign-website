'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const studentTestimonials = [
  {
    type: 'text' as const,
    quote: "ForeignAdmits made my dream of studying abroad come true! Their AI shortlisting tool matched me with the perfect university, and VisaMonk helped me ace my visa interview.",
    name: "Arjun Patel",
    university: "University of California, Los Angeles"
  },
  {
    type: 'video' as const,
    videoUrl: "https://framerusercontent.com/assets/Dm6881Yqsr6kZgewn9c2f3EOko.mp4",
    name: "Isha Khatri"
  },
  {
    type: 'text' as const,
    quote: "I was overwhelmed with the study abroad process, but ForeignAdmits' guidance was a game-changer. The one-click loan application got me funding in days!",
    name: "Sneha Kapoor",
    university: "University of Toronto"
  },
  {
    type: 'video' as const,
    videoUrl: "https://framerusercontent.com/assets/Kj9Z4nFcxfgdBkmGqfocqBpKY.mp4",
    name: "Kavya Devani"
  },
  {
    type: 'text' as const,
    quote: "ForeignAdmits gave me the right guidance at every step—from SOPs to interviews. Their mentorship truly made a difference in my admit journey.",
    name: "Viraj Wagh",
    university: "University of Michigan"
  },
  {
    type: 'video' as const,
    videoUrl: "https://framerusercontent.com/assets/kU0zTd4CRLzsqfpHO1OLxCpaJHQ.mp4",
    name: "Shubham Choudhari"
  },
  {
    type: 'text' as const,
    quote: "The AI-powered shortlisting tool saved me hours of research. I got into my dream school, and ForeignAdmits helped with my visa and accommodation too.",
    name: "Priya Menon",
    university: "University of Melbourne"
  },
  {
    type: 'video' as const,
    videoUrl: "https://framerusercontent.com/assets/oPXOOFL9w8bycPpyElOZIoJcnc.mp4",
    name: "Astha Thakkar"
  },
];

const partnerTestimonials = [
  {
    quote: "ForeignAdmits' CRM transformed our operations. We now manage students more efficiently and have doubled our enrollments!",
    name: "Neha Joshi",
    company: "Global Pathways Consultancy"
  },
  {
    quote: "Thanks to ForeignAdmits, we've increased our student conversions by 50%. Their lead generation and CRM tools are top-notch!",
    name: "Rajesh Kumar",
    company: "Future Abroad Solutions"
  },
  {
    quote: "ForeignAdmits' platform streamlined our entire process. Their CRM and loan access features have made us a go-to consultancy for students.",
    name: "Priyanka Malhotra",
    company: "Horizon Education Services"
  },
  {
    quote: "The one-click loan platform has been a huge win for our students. ForeignAdmits has made our consultancy more efficient and trusted.",
    name: "Sonia Mehra",
    company: "Dream Destinations Abroad"
  },
  {
    quote: "We've seen incredible growth since partnering with ForeignAdmits. Their AI tools help us find the right students, and the CRM keeps us organized.",
    name: "Anjali Gupta",
    company: "Pathway to Success"
  },
  {
    quote: "ForeignAdmits' platform has boosted our efficiency. The loan access feature helps our students secure funding quickly, making us stand out.",
    name: "Sameer Patel",
    company: "Aspire Abroad"
  },
];

function TestimonialCard({ quote, name, location }: { quote: string; name: string; location: string }) {
  return (
    <div 
      className="w-[373px] h-[325px] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden flex-shrink-0"
      style={{
        background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(242, 249, 255) 100%)',
        border: '1px dashed rgba(0, 141, 234, 0.5)',
        boxShadow: 'rgba(29, 32, 38, 0.08) 0px 0px 4px 0px'
      }}
    >
      {/* Decorative SVG Line */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 487 292" preserveAspectRatio="none" style={{ opacity: 1 }}>
        <use href="https://www.foreignadmits.com/#svg-1129574065_5227" />
      </svg>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <p className="text-[18px] leading-[140%] tracking-[-0.04em]" style={{ color: 'rgb(45, 45, 45)', fontFamily: 'var(--font-inter)' }}>
          {quote}
        </p>
        <div className="mt-auto">
          <p className="text-[18px] font-semibold leading-[120%] tracking-[-0.04em] mb-1" style={{ fontFamily: 'var(--font-inter)', color: 'rgb(29, 32, 38)' }}>
            {name}
          </p>
          <p className="text-[16px] leading-[120%] tracking-[-0.04em]" style={{ color: 'rgb(45, 45, 45)', fontFamily: 'var(--font-inter)' }}>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

function VideoTestimonialCard({ videoUrl, name }: { videoUrl: string; name: string }) {
  return (
    <div className="relative w-[210px] h-[373px] rounded-2xl overflow-hidden flex-shrink-0">
      <video
        src={videoUrl}
        loop
        autoPlay
        muted
        playsInline
        controls
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
        <p className="text-sm font-semibold leading-[120%] tracking-[-0.04em]" style={{ fontFamily: 'var(--font-inter)' }}>
          {name}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mb-8 md:mb-12 gap-4">
          <div className="text-center lg:text-left flex-1">
            <p className="text-[12px] md:text-sm font-semibold uppercase tracking-[0.02em] text-primary mb-3 md:mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              TESTIMONIALS
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-tight tracking-[-0.04em]" style={{ fontFamily: 'var(--font-inter)' }}>
              <span className="text-text-primary">What Our </span>
              <span className="text-primary">Students &amp; Partners</span>
              <span className="text-text-primary"> Say</span>
            </h2>
          </div>
          
          {/* Google Reviews Button */}
          <Link
            href="https://www.google.com/search?sca_esv=7f913f0ee5b6aad4&sxsrf=AE3TifMgH-HAECgmmURHQaFZhQ8yPXyyUQ:1750081149606&kgmid=/g/11g_tpkzzb&q=ForeignAdmits&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=4d4c775578dd0d2d#mpd=~3817447718833781832/customers/reviews"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-xl border border-border-light hover:border-primary transition-colors bg-white"
            style={{ boxShadow: 'rgba(29, 32, 38, 0.08) 0px 0px 4px 0px' }}
          >
            <img
              src="https://framerusercontent.com/images/bsHlevp48s3wStPjGGQDCLk3e0M.png"
              alt="Google"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-[12px] md:text-sm font-semibold leading-[120%] tracking-[-0.04em]" style={{ fontFamily: 'var(--font-inter)' }}>
              View all Reviews
            </span>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="hidden sm:block">
              <use href="https://www.foreignadmits.com/#svg-196766070_279" />
            </svg>
          </Link>
        </div>

        {/* Student Testimonials Carousel */}
        <div 
          className="relative mb-4 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1 * (studentTestimonials.reduce((acc, t) => acc + (t.type === 'text' ? 373 : 210) + 16, 0))]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {/* Triple the testimonials for seamless loop */}
            {[...studentTestimonials, ...studentTestimonials, ...studentTestimonials].map((testimonial, index) => (
              testimonial.type === 'text' ? (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  location={testimonial.university}
                />
              ) : (
                <VideoTestimonialCard
                  key={index}
                  videoUrl={testimonial.videoUrl}
                  name={testimonial.name}
                />
              )
            ))}
          </motion.div>
        </div>

        {/* Partner Testimonials Carousel */}
        <div 
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1 * (partnerTestimonials.length * (373 + 16))]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear"
              }
            }}
          >
            {/* Triple the testimonials for seamless loop */}
            {[...partnerTestimonials, ...partnerTestimonials, ...partnerTestimonials].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.company}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
