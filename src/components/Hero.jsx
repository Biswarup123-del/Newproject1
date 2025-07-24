import React from 'react';
import HeroImg from '../assets/heroImg.png'; // Replace with your own image

const HeroSection = () => {
  return (
    <section className="bg-[#EFFFFB] py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-600 font-medium mb-2">
            Business Setup &gt; Intellectual Property ( IPR ) &gt; Trademark opposition
          </p>

          {/* Title with line break */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] leading-tight mb-4">
            Trademark <br />
            <span className="text-[#00AFC1]">Opposition</span> in India
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Protect your registered or applied trademark from potential conflicts.
            RegisterKaro ensures swift, strategic opposition filing under Indian trademark law.
            What you get:
          </p>

          <ul className="text-gray-700 text-base space-y-2 list-disc list-inside">
            <li>Fast Trademark Opposition Filing</li>
            <li>End-to-End TM-O to Hearing Support</li>
            <li>Expert Drafting & Legal Compliance</li>
            <li>Protect Against Confusing Trademarks</li>
            <li>Trusted by 500+ Businesses</li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={HeroImg}
            alt="Hero Illustration"
            className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
