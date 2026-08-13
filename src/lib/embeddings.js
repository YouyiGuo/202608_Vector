import { client } from "./openai.js";

export const EMBEDDING_MODEL = "text-embedding-3-small";

export async function embedBatch(texts) {
  const res = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: texts,
  });

  return res.data.map((d) => d.embedding);
}
