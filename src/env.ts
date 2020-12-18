import { info } from "./log";

const errors = [];

export const isDev = process.env.NODE_ENV !== "production";
export const isTesting = process.env.NODE_ENV === "test";

export const redisHost = isDev ? "localhost" : "localhost";
if (!process.env.REDIS_PASSWORD)
  errors.push(`No $REDIS_PASSWORD was provided for ${redisHost}.`);
export const redisPassword: string = process.env.REDIS_PASSWORD!;

if (errors.length) throw new Error(errors.join("\n"));

if (!isTesting) {
  info("Start with the following parameters:");
  info(
    JSON.stringify(
      {
        isDev,
        redisHost,
      },
      null,
      2
    )
  );
}
