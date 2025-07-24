import React from "react";

export default function Tabs() {
  return (
    <div className="bg-[#0b2a4a] px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap justify-between text-sm font-medium text-white">
          <li>
            <span className="inline-block p-4 text-[#f8c22e] font-bold border-b-2 border-[#f8c22e]">
              Overview
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-[#b5c9d5] hover:text-white">
              Documents
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-[#b5c9d5] hover:text-white">
              Mode Of Filing
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-[#b5c9d5] hover:text-white">
              Process
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-[#b5c9d5] hover:text-white">
              Costs
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-[#b5c9d5] hover:text-white">
              FAQs
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
