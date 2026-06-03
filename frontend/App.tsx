import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

function App() {
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState('');

  const handleSwap = async () => {
    if (!publicKey) return alert('Connect wallet first');
    // Placeholder for actual swap logic using Anchor
    console.log('Swapping', amount);
    alert(`Swap initiated for ${amount} (demo)`);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Solana Stablecoin DEX (Demo)</h1>
      <input
        type="text"
        placeholder="Amount to swap"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: '10px', width: '200px' }}
      />
      <button onClick={handleSwap} style={{ marginLeft: '10px', padding: '10px 20px' }}>
        Swap
      </button>
      <p style={{ marginTop: '20px', color: '#666' }}>
        Connect your Solana wallet and click Swap (demo only)
      </p>
    </div>
  );
}

export default App;