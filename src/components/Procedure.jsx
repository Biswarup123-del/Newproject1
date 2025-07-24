import React from 'react';
import Procture1 from '../assets/Procture1.png'; // Use your downloaded image

const Procedure = () => {
  const steps = [
    {
      title: "Notice of Trademark Opposition",
      icon: "👥",
    },
    {
      title: "Counterstatement for Notice of Trademark Opposition",
      icon: "🤝",
    },
    {
      title: "Evidence For and Against Trademark Opposition",
      icon: "📂",
    },
    {
      title: "Hearing and Decision Concerning Trademark Opposition",
      icon: "🏛️",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-28 flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
          Trademark Opposition Procedure in India
        </h2>
        <ul className="space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="text-3xl">{step.icon}</span>
              <p className="text-lg font-semibold text-gray-800">{idx + 1}. {step.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={Procture1} alt="Procedure illustration" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Procedure;
