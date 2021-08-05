import { PublicKey } from '@solana/web3.js';
import { Layout } from '@project-serum/borsh';
export declare const MAX_N_COINS = 4;
export interface AdminSettings {
    swapEnabled: boolean;
    addLiquidityEnabled: boolean;
}
export interface SwapState {
    version: number;
    isInitialized: boolean;
    nonce: number;
    amplificationCoefficient: number;
    feeNumerator: number;
    adminFeeNumerator: number;
    precisionFactor: number;
    precisionMultipliers: number[];
    tokenAccountsLength: number;
    tokenAccounts: PublicKey[];
    poolMint: PublicKey;
    adminTokenMint: PublicKey;
    adminSettings: AdminSettings;
}
export declare const AdminSettings: Layout<AdminSettings>;
export declare const SwapState: Layout<SwapState>;
//# sourceMappingURL=state.d.ts.map