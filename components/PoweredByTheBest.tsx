'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Universities logos
const universities = [
  { src: 'https://framerusercontent.com/images/DFYzLl6uzwWu8t4mysL4nrPqIE.png', width: 1320, height: 991, size: 60 },
  { src: 'https://framerusercontent.com/images/RDomuUBGZWYufywNLzaoW4ujCo.png', width: 1555, height: 523, size: 107 },
  { src: 'https://framerusercontent.com/images/zr2axRNwXN7EN0Bz2Wg1f3AaFI.png', width: 200, height: 50, size: 144 },
  { src: 'https://framerusercontent.com/images/TMeDjQl7Lq1CSqWhbYBbWpLtdo.png', width: 855, height: 371, size: 142 },
  { src: 'https://framerusercontent.com/images/FC4L5ZrNcTKwlHbZY7C9wP6RYUM.png', width: 400, height: 102, size: 141 },
  { src: 'https://framerusercontent.com/images/XWiqybF5F73LhC3uUDIWpNDXF0.png', width: 600, height: 150, size: 144 },
  { src: 'https://framerusercontent.com/images/jCuWd5ySjEDwLzQcOd0tFNuVVc.png', width: 2500, height: 579, size: 155 },
];

// Loan Lenders logos
const loanLenders = [
  { src: 'https://framerusercontent.com/images/0T0ATnCQPrRTreZR8TTGoRdmM.png', width: 1760, height: 587, size: 159 },
  { src: 'https://framerusercontent.com/images/EhNNbW4Q9FKt7Wq1SN1IjecJ0FE.png', width: 1802, height: 474, size: 198 },
  { src: 'https://framerusercontent.com/images/5dGhvgKlBzs8Bbv27wReW5Ia5g.png', width: 1760, height: 604, size: 154 },
  { src: 'https://framerusercontent.com/images/mYl1t3L360sKwLsbdFEcQDsMgo.png', width: 1760, height: 317, size: 250 },
  { src: 'https://framerusercontent.com/images/Ofbu3mYHkrBJrrAWrZ0RMmc.png', width: 1760, height: 412, size: 222 },
  { src: 'https://framerusercontent.com/images/Fi1KXOlVDqDjTUxC66EnxiuGzM0.png', width: 1760, height: 498, size: 184 },
  { src: 'https://framerusercontent.com/images/L6UvRsFiA4qW0bcjeUMwCMPFyD4.png', width: 1760, height: 550, size: 166 },
  { src: 'https://framerusercontent.com/images/wYoZ0qHVVLLevfO83krZIjX13GY.png', width: 1761, height: 682, size: 137 },
  { src: 'https://framerusercontent.com/images/MHNk8Y3PgsX0x4XWfvI3iQoWec.png', width: 1760, height: 656, size: 142 },
  { src: 'https://framerusercontent.com/images/RTVLRF599EongQsjebpupkEhg.png', width: 1760, height: 353, size: 264 },
  { src: 'https://framerusercontent.com/images/WSN5sliMB9lb8GujhRV3oukBM8.png', width: 1760, height: 458, size: 200 },
  { src: 'https://framerusercontent.com/images/U1ylGxVkVRmPOGF86t3As6UJiNQ.png', width: 1760, height: 616, size: 169 },
  { src: 'https://framerusercontent.com/images/UFy4lKgeJzVQhHrwxUXWsjDn6Og.png', width: 1760, height: 558, size: 164 },
  { src: 'https://framerusercontent.com/images/0QU7SAuc9LMnlm1JIxHgmFpzFo.png', width: 1760, height: 488, size: 188 },
  { src: 'https://framerusercontent.com/images/2PDoVNSKnLItu8E55QFldkvS8.png', width: 1537, height: 263, size: 263 },
];

// VAS Vendors logos
const vasVendors = [
  { src: 'https://framerusercontent.com/images/ocqPYgAyhEyXIRo8BX6oaKdQb3o.png', width: 96, height: 35, size: 99 },
  { src: 'https://framerusercontent.com/images/gUWDQfaVTOnxhT0yhN3ODe9sxhw.png', width: 556, height: 188, size: 138 },
  { src: 'https://framerusercontent.com/images/hAJVmiPhg6fj5c0qZyG0l82PPQs.png', width: 1975, height: 600, size: 148 },
  { src: 'https://framerusercontent.com/images/4QzWy7Qs3QJ4FvslnyvfM2lYQWo.png', width: 507, height: 99, size: 184 },
  { src: 'https://framerusercontent.com/images/joYTmoFmAhctC8BjCEvGHm0R1PY.png', width: 2560, height: 463, size: 199 },
  { src: 'https://framerusercontent.com/images/eeCdfjlKf8MbaUxjz8y6TCiQ1M.png', width: 2560, height: 815, size: 113 },
  { src: 'https://framerusercontent.com/images/6uDh64KAUScqPfA6FHG9zYCdI.png', width: 654, height: 246, size: 96 },
  { src: 'https://framerusercontent.com/images/T9t2h4n7Nz8ylltOFRWfz8g4Us.png', width: 512, height: 512, size: 72 },
  { src: 'https://framerusercontent.com/images/cc3SD2W45qCAx6u9feqrbjzC4Q4.png', width: 1419, height: 500, size: 128 },
  { src: 'https://framerusercontent.com/images/eJfRRHXzQ12JoFGUZelkfsizCg.png', width: 4936, height: 1114, size: 164 },
  { src: 'https://framerusercontent.com/images/u4arsY0wm64Aths36nN9q2HU4.png', width: 1536, height: 456, size: 122 },
  { src: 'https://framerusercontent.com/images/Shv1aTtEfEBj0HsNmGOyD6dF37Q.png', width: 400, height: 135, size: 106 },
  { src: 'https://framerusercontent.com/images/1qC4zCnlenm8c6wKY8bGLoAoROY.png', width: 388, height: 66, size: 212 },
  { src: 'https://framerusercontent.com/images/nBBA3EG2KzJ15YWX8kJERLkiTHM.png', width: 4250, height: 1937, size: 79 },
];

function LogoCarousel({ logos }: { logos: typeof universities }) {
  // Triple the logos for seamless infinite scroll
  const tripleLogos = [...logos, ...logos, ...logos];
  
  return (
    <div className="relative w-full h-[80px] overflow-hidden" style={{
      maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
    }}>
      <motion.div
        className="flex items-center gap-12 h-full"
        animate={{
          x: [0, -logos.reduce((acc, logo) => acc + logo.size + 48, 0)]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }}
      >
        {tripleLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative"
            style={{ width: `${logo.size}px`, height: '36px' }}
          >
            <Image
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PoweredByTheBest() {
  const [activeTab, setActiveTab] = useState<'universities' | 'loanLenders' | 'vasVendors'>('universities');
  
  return (
    <section className="relative py-20" id="our-partners">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-semibold leading-tight tracking-[-0.04em] text-text-primary mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            Powered by the <span className="text-primary">Best</span>
          </h2>
          <p className="text-[20px] leading-[140%] tracking-[-0.04em] text-text-primary">
            From global campuses to top banking partners — our partners make magic happen.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          {/* Universities Tab */}
          <button onClick={() => setActiveTab('universities')} className="flex flex-col items-center group cursor-pointer">
            <div className="flex flex-col items-center gap-3 mb-3">
              <div 
                className="w-[60px] h-[60px] rounded-xl flex items-center justify-center transition-all"
                style={activeTab === 'universities' ? {
                  background: 'linear-gradient(rgb(0, 141, 234) 0%, rgb(0, 125, 208) 100%)',
                  border: '1px solid rgb(0, 125, 208)',
                  boxShadow: 'rgba(0, 141, 234, 0.25) 0px 0px 0px 4px, rgba(144, 192, 224, 0.4) 0px 12px 44px 0px'
                } : {
                  background: 'rgb(243, 243, 243)',
                  border: '1px solid rgb(230, 230, 230)',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 8px 0px'
                }}
              >
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" className={activeTab === 'universities' ? 'text-white' : 'text-gray-600'}>
                  <use href="https://www.foreignadmits.com/#svg-653049465_1532" />
                </svg>
              </div>
              <p className="text-lg font-medium tracking-[-0.04em]" style={{ fontFamily: 'var(--font-inter)' }}>
                Universities
              </p>
            </div>
            <div className={`w-full h-1 rounded-t-3xl transition-colors ${activeTab === 'universities' ? 'bg-primary' : 'bg-transparent'}`}></div>
          </button>

          {/* Loan Lenders Tab */}
          <button onClick={() => setActiveTab('loanLenders')} className="flex flex-col items-center group cursor-pointer">
            <div className="flex flex-col items-center gap-3 mb-3">
              <div 
                className="w-[60px] h-[60px] rounded-xl flex items-center justify-center transition-all"
                style={activeTab === 'loanLenders' ? {
                  background: 'linear-gradient(rgb(32, 201, 151) 0%, rgb(29, 180, 135) 100%)',
                  border: '1px solid rgb(29, 180, 135)',
                  boxShadow: 'rgba(32, 201, 151, 0.25) 0px 0px 0px 4px, rgba(144, 224, 192, 0.4) 0px 12px 44px 0px'
                } : {
                  background: 'rgb(243, 243, 243)',
                  border: '1px solid rgb(230, 230, 230)',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 8px 0px'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={activeTab === 'loanLenders' ? 'white' : 'rgb(107, 114, 128)'}>
                  <path d="M 11.948 1.25 L 12.052 1.25 C 12.951 1.25 13.7 1.25 14.294 1.33 C 14.922 1.414 15.489 1.6 15.944 2.055 C 16.4 2.511 16.586 3.078 16.67 3.706 C 16.729 4.145 16.745 4.669 16.749 5.275 C 17.397 5.296 17.975 5.334 18.489 5.403 C 19.661 5.561 20.61 5.893 21.359 6.641 C 22.107 7.39 22.439 8.339 22.597 9.511 C 22.75 10.65 22.75 12.106 22.75 13.944 L 22.75 14.056 C 22.75 15.894 22.75 17.35 22.597 18.489 C 22.439 19.661 22.107 20.61 21.359 21.359 C 20.61 22.107 19.661 22.439 18.489 22.597 C 17.35 22.75 15.894 22.75 14.056 22.75 L 9.944 22.75 C 8.106 22.75 6.65 22.75 5.511 22.597 C 4.339 22.439 3.39 22.107 2.641 21.359 C 1.893 20.61 1.561 19.661 1.403 18.489 C 1.25 17.35 1.25 15.894 1.25 14.056 L 1.25 13.944 C 1.25 12.106 1.25 10.65 1.403 9.511 C 1.561 8.339 1.893 7.39 2.641 6.641 C 3.39 5.893 4.339 5.561 5.511 5.403 C 6.025 5.334 6.603 5.296 7.251 5.275 C 7.255 4.669 7.271 4.145 7.33 3.706 C 7.414 3.078 7.6 2.511 8.055 2.055 C 8.511 1.6 9.078 1.414 9.706 1.33 C 10.3 1.25 11.05 1.25 11.948 1.25 Z M 8.752 5.252 C 9.13 5.25 9.527 5.25 9.944 5.25 L 14.056 5.25 C 14.473 5.25 14.87 5.25 15.248 5.252 C 15.244 4.681 15.23 4.251 15.184 3.905 C 15.121 3.444 15.014 3.246 14.884 3.116 C 14.754 2.986 14.556 2.879 14.095 2.817 C 13.612 2.752 12.964 2.75 12 2.75 C 11.036 2.75 10.388 2.752 9.905 2.817 C 9.444 2.879 9.246 2.986 9.116 3.116 C 8.986 3.246 8.879 3.444 8.817 3.905 C 8.77 4.251 8.756 4.681 8.752 5.252 Z M 5.711 6.89 C 4.705 7.025 4.125 7.279 3.702 7.702 C 3.279 8.125 3.025 8.705 2.89 9.711 C 2.752 10.739 2.75 12.093 2.75 14 C 2.75 15.907 2.752 17.261 2.89 18.289 C 3.025 19.295 3.279 19.875 3.702 20.298 C 4.125 20.721 4.705 20.975 5.711 21.11 C 6.739 21.248 8.093 21.25 10 21.25 L 14 21.25 C 15.907 21.25 17.262 21.248 18.289 21.11 C 19.295 20.975 19.875 20.721 20.298 20.298 C 20.721 19.875 20.975 19.295 21.11 18.289 C 21.248 17.261 21.25 15.907 21.25 14 C 21.25 12.093 21.248 10.739 21.11 9.711 C 20.975 8.705 20.721 8.125 20.298 7.702 C 19.875 7.279 19.295 7.025 18.289 6.89 C 17.262 6.752 15.907 6.75 14 6.75 L 10 6.75 C 8.093 6.75 6.739 6.752 5.711 6.89 Z M 12 9.25 C 12.414 9.25 12.75 9.586 12.75 10 L 12.75 10.01 C 13.839 10.285 14.75 11.143 14.75 12.333 C 14.75 12.747 14.414 13.083 14 13.083 C 13.586 13.083 13.25 12.747 13.25 12.333 C 13.25 11.949 12.824 11.417 12 11.417 C 11.176 11.417 10.75 11.949 10.75 12.333 C 10.75 12.717 11.176 13.25 12 13.25 C 13.385 13.25 14.75 14.21 14.75 15.667 C 14.75 16.857 13.839 17.715 12.75 17.99 L 12.75 18 C 12.75 18.414 12.414 18.75 12 18.75 C 11.586 18.75 11.25 18.414 11.25 18 L 11.25 17.99 C 10.161 17.715 9.25 16.857 9.25 15.667 C 9.25 15.252 9.586 14.917 10 14.917 C 10.414 14.917 10.75 15.252 10.75 15.667 C 10.75 16.051 11.176 16.583 12 16.583 C 12.824 16.583 13.25 16.051 13.25 15.667 C 13.25 15.283 12.824 14.75 12 14.75 C 10.615 14.75 9.25 13.79 9.25 12.333 C 9.25 11.143 10.161 10.285 11.25 10.01 L 11.25 10 C 11.25 9.586 11.586 9.25 12 9.25 Z" />
                </svg>
              </div>
              <p className="text-lg font-medium tracking-[-0.04em]" style={{ fontFamily: 'var(--font-inter)' }}>
                Loan Lenders
              </p>
            </div>
            <div className={`w-full h-1 rounded-t-3xl transition-colors ${activeTab === 'loanLenders' ? 'bg-[rgb(32,201,151)]' : 'bg-transparent'}`}></div>
          </button>

          {/* VAS Vendors Tab */}
          <button onClick={() => setActiveTab('vasVendors')} className="flex flex-col items-center group cursor-pointer">
            <div className="flex flex-col items-center gap-3 mb-3">
              <div 
                className="w-[60px] h-[60px] rounded-xl flex items-center justify-center transition-all"
                style={activeTab === 'vasVendors' ? {
                  background: 'linear-gradient(rgb(253, 126, 20) 0%, rgb(223, 110, 16) 100%)',
                  border: '1px solid rgb(223, 110, 16)',
                  boxShadow: 'rgba(253, 126, 20, 0.25) 0px 0px 0px 4px, rgba(253, 192, 144, 0.4) 0px 12px 44px 0px'
                } : {
                  background: 'rgb(243, 243, 243)',
                  border: '1px solid rgb(230, 230, 230)',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 8px 0px'
                }}
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className={activeTab === 'vasVendors' ? 'text-white' : 'text-gray-600'}>
                  <use href="https://www.foreignadmits.com/#svg-886765749_265" />
                </svg>
              </div>
              <p className="text-lg font-medium tracking-[-0.04em]" style={{ fontFamily: 'var(--font-inter)' }}>
                VAS Vendors
              </p>
            </div>
            <div className={`w-full h-1 rounded-t-3xl transition-colors ${activeTab === 'vasVendors' ? 'bg-[rgb(253,126,20)]' : 'bg-transparent'}`}></div>
          </button>
        </div>

        {/* Logo Carousel Container */}
        <div 
          className="relative border-t pt-12"
          style={{
            borderColor: 'rgb(230, 230, 230)',
            background: 'linear-gradient(rgb(239, 248, 255) 0%, rgb(255, 255, 255) 100%)',
            boxShadow: 'rgba(0, 0, 0, 0.06) 1px 0px 8px 0px inset'
          }}
        >
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ transform: 'translateX(-50%)', left: '50%' }}
          >
            <Image
              src="https://framerusercontent.com/images/caxK2eAr8aq0MhFfMXYap5lmGk.png"
              alt=""
              width={2880}
              height={2048}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo Carousels */}
          <div className="relative space-y-8 pb-8">
            {activeTab === 'universities' && (
              <>
                <LogoCarousel logos={universities} />
                <LogoCarousel logos={universities} />
                <LogoCarousel logos={universities} />
              </>
            )}
            {activeTab === 'loanLenders' && (
              <>
                <LogoCarousel logos={loanLenders} />
                <LogoCarousel logos={loanLenders} />
                <LogoCarousel logos={loanLenders} />
              </>
            )}
            {activeTab === 'vasVendors' && (
              <>
                <LogoCarousel logos={vasVendors} />
                <LogoCarousel logos={vasVendors} />
                <LogoCarousel logos={vasVendors} />
              </>
            )}
          </div>

          {/* Bottom Text */}
          <div className="text-center relative">
            <p 
              className="text-[20px] font-medium tracking-[-1px] text-primary"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              &amp; 200+ University Partnerships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
