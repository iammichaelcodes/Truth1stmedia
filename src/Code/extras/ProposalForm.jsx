
import React, { useState } from "react";

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fundingAmount: "",
    wallet: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend or smart contract submit function
    console.log("Submitting Proposal:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-neutral-900 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Submit a DAO Proposal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Proposal Title"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe your proposal in detail..."
          rows={5}
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          onChange={handleChange}
          required
        />
        <input
          name="fundingAmount"
          placeholder="Requested Amount ($ANTY)"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          onChange={handleChange}
          required
        />
        <input
          name="wallet"
          placeholder="Your Wallet Address"
          className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full mt-4 py-3 bg-yellow-500 hover:bg-yellow-600 font-bold rounded text-black"
        >
          Submit Proposal
        </button>
      </form>
    </div>
  );
};

export default ProposalForm;
