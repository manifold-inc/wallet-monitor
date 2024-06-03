# wallet monitor

Monitor transfers of high value wallets

| Env                        | Value                      | type                    | example                                                                                           |
| -------------------------- | -------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
| DISCORD_URL                | Discord webhook URL        | url                     | https://discord.com/api/webhooks/2222222222/aaaaaaaaaaaaaa                                        |
| BITTENSOR_NODE_URL         | Bittensor node             | url                     | wss://entrypoint-finney.opentensor.ai:443                                                         |
| COLDKEYS                   | List of coldkeys to watch  | string                  | 5DJgMDvzC27QTBfmgGQaNWBQd8CKP9z5A12yjbG6TZ5bxNE1,5DJgMDvzC27QTBfmgGQaNWBQd8CKP9z5A12yjbG6TZ5bxNE2 |
| WARNING_TRANSFER_THRESHOLD | Warning transfer threshold | number (rao) (optional) | 1000000000                                                                                        |
| WARNING_BALANCE_THRESHOLD  | Warning balance threshold  | number (rao) (optional) | 50000000000                                                                                       |
| WARNING_ONLY               | Only log warnings          | string (optional)       | \[true/false\]                                                                                    |
