"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapState = exports.AdminSettings = exports.MAX_N_COINS = void 0;
const borsh_1 = require("@project-serum/borsh");
const buffer_layout_1 = require("buffer-layout");
exports.MAX_N_COINS = 4;
exports.AdminSettings = buffer_layout_1.struct([borsh_1.bool('swapEnabled'), borsh_1.bool('addLiquidityEnabled')]);
// SwapState is always the latest
exports.SwapState = buffer_layout_1.struct([
    buffer_layout_1.u8('version'),
    borsh_1.bool('isInitialized'),
    buffer_layout_1.u8('nonce'),
    borsh_1.u64('amplificationCoefficient'),
    borsh_1.u64('feeNumerator'),
    borsh_1.u64('adminFeeNumerator'),
    buffer_layout_1.u32('tokenAccountsLength'),
    borsh_1.u64('precisionFactor'),
    borsh_1.array(borsh_1.u64(), exports.MAX_N_COINS, 'precisionMultipliers'),
    borsh_1.array(borsh_1.publicKey(), exports.MAX_N_COINS, 'tokenAccounts'),
    borsh_1.publicKey('poolMint'),
    borsh_1.publicKey('adminTokenMint'),
    exports.AdminSettings.replicate('adminSettings')
]);
//# sourceMappingURL=state.js.map