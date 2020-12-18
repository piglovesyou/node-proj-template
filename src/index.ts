import { info } from "./log";

main()
  .then(() => process.exit(0))
  .catch((err) => (console.error(err), process.exit(1)));

async function main() {
  info("Done.");
}
