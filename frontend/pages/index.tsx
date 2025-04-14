// InvisibleWitness: An anonymous blockchain-based evidence verification platform

import { useState } from "react";
import { ethers } from "ethers";
import { hashInput } from "@/utils/crypto";

export default function Home() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(null);

  // Simulate hashing and storage (mock logic for MVP)
  
  const handleSubmit = async () => {
    if (!input) return;

    const hash = hashInput(input);
    setStatus(`Hash generated: ${hash}`);

    // Future steps: upload encrypted data to IPFS and store hash on chain
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">InvisibleWitness</h1>
      <p className="mb-6 text-gray-700">
        An anonymous platform for survivors to timestamp and verify incidents using blockchain.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter incident details here (this stays local, we only hash)"
        className="w-full p-4 border rounded mb-4 min-h-[120px]"
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded hover:opacity-90"
      >
        Generate Hash
      </button>

      {status && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <p className="text-sm text-gray-600">{status}</p>
        </div>
      )}
    </main>
  );
}
