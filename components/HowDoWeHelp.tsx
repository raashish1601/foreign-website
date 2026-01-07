"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    badge: {
      text: "FOR CONSULTANTS / COUNSELLORS",
      color: "rgb(115, 87, 255)",
      svgId: "svg1257073917_3337",
    },
    title: "Scale Your Consultancy with ForeignAdmits",
    description:
      "Unlock powerful tools and support to grow your business and streamline student success.",
    features: [
      {
        title: "AI-Driven Lead Generation",
        description: "Access high-quality student leads with our advanced algorithms.",
        svgId: "svg-244489295_915",
      },
      {
        title: "Custom CRM & Support",
        description:
          "Customize our platform to manage and guide students from applications to visas efficiently.",
        svgId: "svg-244489295_915",
      },
      {
        title: "Easy Loan Access for Students",
        description:
          "Help students secure financing through our platform, connecting them to 15+ banks with one click.",
        svgId: "svg-244489295_915",
      },
    ],
    cta: {
      text: "Become a Partner",
      href: "./partner-with-us",
    },
    image: "https://framerusercontent.com/images/FRjeMQ8ckm2FnoguloExN8WNFY.png",
  },
  {
    badge: {
      text: "FOR STUDENTS",
      color: "rgb(0, 141, 234)",
      svgId: "svg970923549_3333",
    },
    title: "Your Study Abroad Journey Starts Here",
    description:
      "Get personalized guidance and seamless support to achieve your dream education abroad.",
    features: [
      {
        title: "University Matching",
        description: "Find the perfect university with AI-powered recommendations.",
        svgId: "svg-1997737337_915",
      },
      {
        title: "Hassle-Free Applications",
        description: "Simplify your applications with expert support and tools.",
        svgId: "svg-1997737337_915",
      },
      {
        title: "Complete Support",
        description: "Secure loans, visas, accommodation, and more with ease.",
        svgId: "svg-1997737337_915",
      },
    ],
    cta: {
      text: "Start Your Journey",
      href: "https://app.foreignadmits.com/lp/student",
      external: true,
    },
    image: "https://framerusercontent.com/images/867y3uuHFlceRmiFiSyhSRSBV8.png",
  },
  {
    badge: {
      text: "FOR SERVICE PROVIDERS",
      color: "rgb(15, 75, 135)",
      svgId: "svg-1338702216_3337",
    },
    title: "Expand Your Impact with ForeignAdmits",
    description:
      "Connect with students and consultancies through our trusted platform to streamline admissions and deliver essential services.",
    features: [
      {
        title: "Reach 100,000+ Students",
        description:
          "Attract top talent or offer services like loans, forex, and insurance to a vast student network.",
        svgId: "svg1454701868_915",
      },
      {
        title: "Seamless Integration",
        description: "Leverage our AI-driven platform to simplify admissions or service delivery.",
        svgId: "svg1454701868_915",
      },
      {
        title: "Trusted Network",
        description:
          "Join 700+ partners, including 500+ top universities and leading vendors",
        svgId: "svg1454701868_915",
      },
    ],
    cta: {
      text: "Connect With Us",
      href: "./partner-with-us",
    },
    image: "https://framerusercontent.com/images/w90kW09ONTyDm0rnvFI4Q00YHOg.png",
  },
];

export default function HowDoWeHelp() {
  return (
    <section id="how-do-we-help" className="relative bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-[14px] font-semibold font-inter tracking-[0.02em] text-center text-primary uppercase">
              How do we help
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[900px]"
          >
            <h2 className="text-[48px] font-semibold font-inter tracking-[-0.04em] text-center text-[rgb(29,32,38)] leading-[1.2]">
              A <span className="text-primary">Unified Platform</span> for Students, Consultants &
              Global Institutions
            </h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-8 items-center border border-gray-200 rounded-2xl p-8 lg:p-12"
            >
              {/* Content */}
              <div className="flex flex-col gap-6">
                {/* Badge */}
                <div className="flex items-center gap-2">
                  <div className="w-[13px] h-[17px]">
                    <svg
                      style={{ width: "100%", height: "100%" }}
                      viewBox="0 0 13 17"
                      preserveAspectRatio="none"
                    >
                      <use href={`https://www.foreignadmits.com/#${section.badge.svgId}`} />
                    </svg>
                  </div>
                  <p
                    className="text-[12px] font-medium font-inter tracking-[-0.04em] text-center"
                    style={{ color: section.badge.color }}
                  >
                    {section.badge.text}
                  </p>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[32px] font-semibold font-inter tracking-[-0.04em] text-[rgb(29,32,38)] leading-[1.2]">
                    {section.title}
                  </h3>
                  <p className="text-base font-normal tracking-[-0.04em] leading-[140%] text-[rgb(91,94,99)]">
                    {section.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  {section.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex gap-3">
                      <div className="w-[18px] h-[22px] flex-shrink-0">
                        <svg
                          style={{ width: "100%", height: "100%" }}
                          viewBox="0 0 18 22"
                          preserveAspectRatio="none"
                        >
                          <use href={`https://www.foreignadmits.com/#${feature.svgId}`} />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold font-inter tracking-[-0.04em] leading-[140%] text-[rgb(29,32,38)]">
                          {feature.title}
                        </h4>
                        <p className="text-base font-normal tracking-[-0.04em] leading-[140%] text-[rgb(91,91,91)]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <Link
                    href={section.cta.href}
                    {...(section.cta.external && { target: "_blank", rel: "noopener" })}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary border border-primary-light rounded-lg shadow-button hover:bg-primary/90 transition-all"
                  >
                    <span className="text-white text-[14px] font-semibold font-inter tracking-[-0.04em] leading-[120%]">
                      {section.cta.text}
                    </span>
                    <div className="w-[15px] h-[11px]">
                      <svg
                        style={{ width: "100%", height: "100%" }}
                        viewBox="0 0 15 11"
                        preserveAspectRatio="none"
                      >
                        <use href="https://www.foreignadmits.com/#svg-1702884979_275" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[1620/1638] rounded-lg overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
