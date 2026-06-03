use anchor_lang::prelude::*;

 declare_id!("StablecoinDexProgram111111111111111111111111111");

#[program]
pub mod stablecoin_dex {
    use super::*;

    pub fn initialize_pool(ctx: Context<InitializePool>) -> Result<()> {
        msg!("Stablecoin DEX pool initialized");
        Ok(())
    }

    pub fn swap(ctx: Context<Swap>, amount_in: u64) -> Result<()> {
        msg!("Swapped {} tokens", amount_in);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializePool<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub pool: Account<'info, Pool>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Swap<'info> {
    #[account(mut)]
    pub pool: Account<'info, Pool>,
    pub user: Signer<'info>,
}

#[account]
pub struct Pool {
    pub total_volume: u64,
}