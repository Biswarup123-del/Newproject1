import React from "react";

export default function FilingModes() {
  return (
    <section className="bg-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-gray-800">
        {/* Heading + Subtext */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
          Mode of Filing a Trademark Opposition Application
        </h2>
        <p className="text-sm text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A Trademark Opposition (Form TM-O) must be filed within four months of the trademark’s publication in the Trademarks Journal. Filing can be done either online (e-filing) or offline, with online being preferred for convenience and potential cost savings.
        </p>

        {/* Dual Filing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* E-Filing */}
          <div>
            <h3 className="text-lg font-semibold mb-3">1. E-filing (Online Filing):</h3>
            <div className="border border-gray-300 p-4 rounded-md text-sm bg-gray-50">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  E-filing involves submitting the Notice of Opposition and required documents through the Indian Trademark Registry’s online portal.
                </li>
                <li>
                  This method often includes a fee discount compared to physical filing.
                </li>
                <li>
                  E-filing is considered faster and more efficient.
                </li>
                <li>
                  To e-file, one needs to register on the IP India portal and use a Class 3 Digital Signature Certificate (DSC).
                </li>
              </ol>
            </div>
          </div>

          {/* Offline Filing */}
          <div>
            <h3 className="text-lg font-semibold mb-3">2. Offline Filing (Physical Filing):</h3>
            <div className="border border-gray-300 p-4 rounded-md text-sm bg-gray-50">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  Physical filing involves submitting the TM-O form and documents in person at the Trademarks Registry Office.
                </li>
                <li>
                  The fee for offline filing is generally higher than for online filing.
                </li>
                <li>
                  After manual filing, it may take some time to receive an acknowledgment receipt.
                </li>
                <li>
                  Offline filing can be useful if online access or technical issues arise.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
