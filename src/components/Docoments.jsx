import React from "react";
import { FaFileAlt } from "react-icons/fa";

const documentItems = [
  {
    title: "1. Notice of Opposition (Form TM–O)",
    desc: "This is the primary document for initiating the opposition process.",
  },
  {
    title: "2. Application Details",
    desc: "The notice must include the application number of the trademark being opposed.",
  },
  {
    title: "3. Grounds for Opposition",
    desc: "Clearly state the reasons for opposing the trademark registration, such as similarity to an existing mark or lack of distinctiveness.",
  },
  {
    title: "4. Applicant and Opponent Information",
    desc: "Provide details about both the applicant (the one seeking registration) and the opponent (the one opposing the application).",
  },
  {
    title: "5. Evidence",
    desc: (
      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
        <li>
          <strong>Affidavits:</strong> Statements made under oath to support the opposition.
        </li>
        <li>
          <strong>Prior Use Evidence:</strong> Proof such as invoices, product images, or ads.
        </li>
        <li>
          <strong>Government Registrations:</strong> If based on a prior registration, include a certificate copy.
        </li>
      </ul>
    ),
  },
  {
    title: "6. Power of Attorney",
    desc: "If an attorney is representing the opponent, a Power of Attorney authorizes them to act on the opponent's behalf.",
  },
  {
    title: "7. Fees",
    desc: "Pay the prescribed fee for filing the Notice of Opposition.",
  },
  {
    title: "8. Counter Statement",
    desc: "The applicant will have an opportunity to file a counter-statement to the opposition.",
  },
  {
    title: "9. Hearing Statements",
    desc: "If the opposition is contested, both parties may be required to submit hearing statements.",
  },
  {
    title: "10. Adjournment Requests",
    desc: "If needed, parties can request adjournments of the hearing.",
  },
];

const Documents = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Documents Required for Trademark Oppositions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {documentItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaFileAlt className="text-green-600 mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-base md:text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
