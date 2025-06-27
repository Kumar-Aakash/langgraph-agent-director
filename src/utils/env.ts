import { z } from "zod";
import "dotenv/config"; // Loads .env into process.env

const envSchema = z.object({
  OPENAI_API_KEY: z.string(),
  PINECONE_API_KEY: z.string(),
  PINECONE_INDEX: z.string(),
  PINECONE_ENVIRONMENT: z.string(),
});

const env = envSchema.parse(process.env); // Throws if any are missing

export { env };
