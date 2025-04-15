
import React from "react";

const proposals = [
  {
    id: 1,
    title: "Fund Investigation: NGO Laundromat",
    status: "Voting",
    votes: {
      yes: 71,
      no: 29
    },
    endsIn: "2h 34m"
  },
  {
    id: 2,
    title: "Design Bounty for 'Cazado' Badge",
    status: "Completed",
    votes: {
      yes: 89,
      no: 11
    },
    endsIn: "Closed"
  }
];

const GovernanceDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto text-white p-6 space-y-6">
      <h2 className="text-3xl font-bold">Active Proposals</h2>
      {proposals.map((p) => (
        <div key={p.id} className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div>Status: <span className="font-bold text-yellow-400">{p.status}</span></div>
            <div>Ends in: {p.endsIn}</div>
          </div>
          <div className="mt-4 flex space-x-4 text-sm">
            <div className="flex-1 bg-green-600 text-center py-1 rounded">
              Yes: {p.votes.yes}%
            </div>
            <div className="flex-1 bg-red-600 text-center py-1 rounded">
              No: {p.votes.no}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GovernanceDashboard;
