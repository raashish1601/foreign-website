"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="relative bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-[14px] font-semibold font-inter tracking-[0.02em] text-center text-primary uppercase">
              WHO ARE WE
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 max-w-[900px]"
          >
            <div className="text-center">
              <h2 className="text-[48px] font-semibold font-inter tracking-[-0.04em] text-[rgb(29,32,38)] leading-[1.2]">
                We call ourself the
              </h2>
              <h2 className="text-[48px] font-semibold font-inter tracking-[-0.04em] text-primary leading-[1.2]">
                Shopify for Study Abroad
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 max-w-[800px]"
          >
            <p className="text-[20px] font-normal tracking-[-0.04em] leading-[140%] text-center text-[rgb(29,32,38)]">
              ForeignAdmits bridges students, study abroad consultants, and global service providers. We simplify everything — from admissions to getting a flight ticket — through one powerful, digital ecosystem.
            </p>
          </motion.div>

          {/* MacBook Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-[958px] rounded-lg overflow-hidden"
          >
            <div className="relative w-full aspect-[7664/6144]">
              <Image
                src="https://framerusercontent.com/images/s0D1GGuOP2Vk4LCXFDa07dJZuA.webp"
                alt="ForeignAdmits Platform Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 958px"
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
