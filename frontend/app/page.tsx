"use client";

import { useState } from 'react';

export default function DexPage() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleSwap = () => {
    alert(`Swapping ${fromAmount} → ${toAmount} (demo)`);
    // Real implementation: use Anchor + wallet adapter
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Solana Stablecoin DEX</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">From</label>
          <input
            type="text"
            placeholder="0.0"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="w-full p-4 border rounded-xl text-xl"
          />
        </div>

        <div className="text-center text-2xl">↓</div>

        <div>
          <label className="block text-sm mb-1">To</label>
          <input
            type="text"
            placeholder="0.0"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            className="w-full p-4 border rounded-xl text-xl"
          />
        </div>

        <button
          onClick={handleSwap}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl text-lg font-semibold mt-4"
        >
          Swap
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Connect Solana wallet to trade (demo UI)
      </p>
    </div>
  );
}