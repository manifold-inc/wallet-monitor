import { env } from "./env";

const ANSI = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",

  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
};

const BOT_USERNAME = "Wallet Monitor";
const TITLE_PREFIX = "Wallet Transfer";

function logInfo(msg: string, sendToDisc = false) {
  if (sendToDisc) {
    const body = {
      username: BOT_USERNAME,
      embeds: [{ description: msg, title: `${TITLE_PREFIX} Info` }],
    };
    void fetch(env.DISCORD_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  }
  return console.info(Time(), `${ANSI.FgGreen}[INFO]${ANSI.Reset}`, msg);
}

function logWarning(msg: string, sendToDisc = true) {
  if (sendToDisc) {
    const body = {
      username: BOT_USERNAME,
      embeds: [{ description: msg, title: `${TITLE_PREFIX} Warning` }],
    };
    void fetch(env.DISCORD_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  }
  return console.warn(Time(), `${ANSI.FgYellow}[WARN]${ANSI.Reset}`, msg);
}

function logError(msg: string, sendToDisc = true) {
  if (sendToDisc) {
    const body = {
      username: BOT_USERNAME,
      embeds: [{ description: msg, title: `${TITLE_PREFIX} Error` }],
    };
    void fetch(env.DISCORD_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  }
  return console.error(Time(), `${ANSI.FgRed}[ERROR]${ANSI.Reset}`, msg);
}

export const log = {
  info: logInfo,
  warn: logWarning,
  error: logError,
};

function Time() {
  return `${new Date().toLocaleString()}:\t`;
}
