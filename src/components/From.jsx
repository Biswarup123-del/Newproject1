import React from 'react';

const Form = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-28">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Text */}
        <div>
          <h2 className="text-black text-xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Trademark opposition is a legal process that allows any third party to challenge the registration...
          </p>

          <h3 className="text-black font-semibold mb-2">Who Can Oppose a Trademark?</h3>
          <ul className="text-gray-700 list-disc list-inside mb-4">
            <li>Owners of similar registered trademarks.</li>
            <li>Businesses using a similar trademark for a long time (even if not registered).</li>
            <li>Anyone who believes the trademark is misleading or violates laws.</li>
          </ul>

          <h3 className="text-black font-semibold mb-2">Why is Trademark Opposition Important?</h3>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Protecting existing rights.</li>
            <li>Preventing consumer confusion.</li>
            <li>Maintaining competition.</li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Consultation Form</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Enter full name" className="w-full p-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Select Location" className="p-3 border border-gray-300 rounded" />
              <input type="text" placeholder="Mobile Number" className="p-3 border border-gray-300 rounded" />
            </div>
            <textarea placeholder="Write any message" rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-semibold flex items-center justify-center gap-2">
              CONNECT WITH EXPERT <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
