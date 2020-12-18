// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("../package.json");
export const LOG_PREFIX = `[${packageJson.name}]`;

export function info(message: string) {
  console.info(`${LOG_PREFIX} ${message}`);
}
