
import React from "react";

export default function HomepageSections() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-24 mb-4">

      {/* Governance Section */}
      <section id="governance" className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src=""
          alt="DAO Governance Flow"
          className="rounded-xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold text-white">Community Governance</h2>
          <p className="mt-4 text-lg text-gray-300">
            Propose, vote, and fund the truth. The DAO empowers $ANTY holders to choose what gets investigated, built, or exposed.
          </p>
          <a
            href="/specs/TruthFirst_Foundation_DAO_Structure.pdf"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow hover:bg-yellow-600"
          >
            View Governance Spec
          </a>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Support the Mission</h2>
        <p className="text-lg text-gray-300 mb-6">
          Crypto or fiat, every donation powers journalism and memetic resistance.
        </p>
        <img
          src="/icons/donation_wallet_icons_set.png"
          className="mx-auto w-64"
          alt="Donation Methods"
        />
        <a
          href="/specs/TruthFirstMedia_Donations_Module_Spec.pdf"
          target="_blank"
          className="mt-4 inline-block px-5 py-3 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700"
        >
          View Donation Spec
        </a>
      </section>
    </main>
  );
}
