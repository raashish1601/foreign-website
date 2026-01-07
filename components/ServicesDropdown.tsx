"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "University Application",
    description: "Shortlist, SOPs, and end-to-end applications.",
    href: "./university-admissions",
    svgId: "svg-893984385_786",
  },
  {
    title: "Test Preparation",
    description: "IELTS, GRE, and interview prep coaching.",
    href: "./test-prep",
    svgId: "svg1651782523_1655",
  },
  {
    title: "Visa Preparation",
    description: "Mock interviews + filing guidance for study visas.",
    href: "./mock-visa",
    svgId: "svg371479463_1410",
  },
  {
    title: "Education Loan",
    description: "Compare lenders and secure up to ₹3 Cr.",
    href: "./education-loans",
    svgId: "svg-1016671060_1228",
  },
  {
    title: "Accommodation",
    description: "Verified student housing near your university.",
    href: "./accommodations",
    svgId: "svg-1403499633_1220",
  },
  {
    title: "Blocked Account",
    description: "Germany Blocked Account setup, fast and compliant.",
    href: "./blocked-account",
    svgId: "svg-325635155_1224",
  },
  {
    title: "GIC",
    description: "Canada GIC account setup with guidance.",
    href: "./gic",
    svgId: "svg-325635155_1224",
  },
  {
    title: "Bank Account",
    description: "Open international student bank accounts smoothly.",
    href: "./bank-accounts",
    svgId: "svg-325635155_1224",
  },
  {
    title: "Forex & Transfers",
    description: "Low-fee currency exchange and tuition transfers.",
    href: "./forex",
    svgId: "svg1474796644_381",
  },
  {
    title: "Insurance",
    description: "Student health & travel insurance guidance.",
    href: "./insurance",
    svgId: "svg1175482338_953",
  },
  {
    title: "Credit Cards",
    description: "Student credit cards for global spends.",
    href: "./credit-card",
    svgId: "svg-2110659051_1257",
  },
  {
    title: "Flight Tickets",
    description: "Student fares with extra baggage allowances.",
    href: "./flight-tickets",
    svgId: "svg1288161785_9524",
  },
  {
    title: "SIM Card",
    description: "International SIMs ready before you fly.",
    href: "./sim-card",
    svgId: "svg1288161785_9524",
  },
];

const tools = [
  {
    title: "Loan Monk",
    description: "One-click loan pre-check and lender matching.",
    href: "./loan-monk",
    svgId: "svg-1016671060_1228",
  },
  {
    title: "AI University Chat Bot",
    description: "Ask programs, deadlines, eligibility—instantly.",
    href: "./university-ai-chatbot",
    svgId: "svg-893984385_786",
  },
  {
    title: "Loan Tool",
    description: "Track loan status, documents, and next steps.",
    href: "./education-loans",
    svgId: "svg-1016671060_1228",
  },
  {
    title: "Visa Map",
    description: "Country-wise visa steps and timelines.",
    href: "./visa-map",
    svgId: "svg371479463_1410",
  },
];

const ServiceItem = ({
  title,
  description,
  href,
  svgId,
}: {
  title: string;
  description: string;
  href: string;
  svgId: string;
}) => {
  return (
    <Link
      href={href}
      className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-[rgb(236,247,255)] rounded flex items-center justify-center">
        <div className="w-8 h-8 text-primary">
          <svg
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 32 32"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <use href={`https://www.foreignadmits.com/#${svgId}`} />
          </svg>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-[rgb(23,23,23)] text-base font-medium font-inter tracking-[-0.5px] leading-[24px]">
            {title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity scale-80">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="miter"
                fill="rgb(23, 23, 23)"
                d="M15.0031 10.0605L8.5478 16.5157L7.4873 15.4553L13.9418 9H8.25305V7.5H16.5031V15.75H15.0031V10.0605Z"
              />
            </svg>
          </div>
        </div>
        <p className="text-[rgb(115,115,115)] text-[14px] font-normal tracking-[-0.5px] leading-[120%] font-inter">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function ServicesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-[rgba(0,0,0,0.15)_0px_0px_4px_0px] overflow-hidden"
      style={{ minWidth: "600px" }}
    >
      <div className="p-6">
        {/* Flagship Services Section */}
        <div className="mb-6">
          <div className="pb-3 border-b border-[rgb(229,229,229)]">
            <p className="text-[rgb(115,115,115)] text-[12px] font-normal tracking-[1px] leading-[16px] uppercase">
              Our flagship services
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 mt-3">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="pb-3 border-b border-[rgb(229,229,229)]">
            <p className="text-[rgb(115,115,115)] text-[12px] font-normal tracking-[1px] leading-[16px] uppercase">
              Tools
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 mt-3">
            {tools.map((tool, index) => (
              <ServiceItem key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
