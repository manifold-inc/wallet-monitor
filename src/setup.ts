import { ApiPromise, WsProvider } from "@polkadot/api";

import { env } from "./env.js";

const provider = new WsProvider(env.BITTENSOR_NODE_URL);

const api = new ApiPromise({ provider: provider });
await api.isReady;

export const bt = {
  api,
  provider
};
