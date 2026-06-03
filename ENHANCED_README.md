# solana-stablecoin-dex

High-performance stablecoin AMM/DEX on Solana built with Anchor.

## Overview
Starter for building efficient stablecoin DEXes on Solana with low fees and high throughput.

## Tech Stack
- Solana + Anchor (Rust)
- Token-2022
- Jupiter aggregator integration
- React + @solana/wallet-adapter

## Getting Started
```bash
git clone https://github.com/Proxtox/solana-stablecoin-dex.git
cd solana-stablecoin-dex
anchor build
```

## Key Files
- `programs/stablecoin-dex/src/lib.rs` - Core pool initialization and swap logic

## Next Steps
- Add constant product AMM math
- Integrate with Jupiter for best routing
- Add liquidity provision
- Build frontend with real-time prices

## License
MIT