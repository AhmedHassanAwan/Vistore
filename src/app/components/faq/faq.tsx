
"use client";

import React, { useState } from "react";

export default function CRMSalesFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white px-4 py-20 md:px-20 md:mx-30 rounded-4xl md:mt-25">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-sm text-black font-bold">• Our FAQs</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">CRM Sales FAQs</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and
          answering frequently asked questions to help our clients.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center pt-6">
          <button className="px-6 py-2 rounded-full bg-black text-white font-medium shadow-md hover:bg-gray-800 transition-all cursor-pointer">
            More Questions →
          </button>
          <button className="text-black underline hover:text-gray-700 font-bold">Contact Us</button>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        {/* FAQ Item 1 */}
        <div className="rounded-2xl bg-gray-100 p-6">
          <button
            onClick={() => toggle(0)}
            aria-expanded={openIndex === 0}
            className="w-full text-left flex justify-between items-center"
          >
            <span className="text-lg font-semibold text-gray-800">
              How do I integrate CRM Sales with other tools?
            </span>
            <span className="text-xl">{openIndex === 0 ? "–" : "+"}</span>
          </button>
          {openIndex === 0 && (
            <p className="mt-4 text-gray-600 text-sm">
              We offer comprehensive guides, expert insights, and hands-on technical support to help you seamlessly
              integrate CRM Sales with your existing tools. Our goal is to simplify the process, enhance compatibility,
              and ensure you get the most out of your CRM system for improved productivity and business growth.
            </p>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="rounded-2xl bg-gray-100 p-6">
          <button
            onClick={() => toggle(1)}
            aria-expanded={openIndex === 1}
            className="w-full text-left flex justify-between items-center"
          >
            <span className="text-lg font-semibold text-gray-800">Is there a free trial available?</span>
            <span className="text-xl">{openIndex === 1 ? "–" : "+"}</span>
          </button>
          {openIndex === 1 && (
            <p className="mt-4 text-gray-600 text-sm">
              Yes, we offer a 14-day free trial with full access to all premium features. This allows you to explore CRM Sales without any commitment and determine if it fits your business needs before upgrading to a paid plan.
            </p>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="rounded-2xl bg-gray-100 p-6">
          <button
            onClick={() => toggle(2)}
            aria-expanded={openIndex === 2}
            className="w-full text-left flex justify-between items-center"
          >
            <span className="text-lg font-semibold text-gray-800">Is CRM Sales suitable for small businesses?</span>
            <span className="text-xl">{openIndex === 2 ? "–" : "+"}</span>
          </button>
          {openIndex === 2 && (
            <p className="mt-4 text-gray-600 text-sm">
              Absolutely! CRM Sales is designed to scale with businesses of all sizes. Small businesses benefit from user-friendly tools, affordable pricing, and efficient customer relationship management that can boost growth and streamline operations.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
