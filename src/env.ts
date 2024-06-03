import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DISCORD_URL: z.string(),
    BITTENSOR_NODE_URL: z.string(),
    COLDKEYS: z.string(),
    WARNING_TRANSFER_THRESHOLD: z.string().optional(),
    WARNING_BALANCE_THRESHOLD: z.string().optional(),
    WARNING_ONLY: z.string().optional()
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
