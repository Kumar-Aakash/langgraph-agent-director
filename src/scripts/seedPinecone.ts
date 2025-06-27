import { OpenAIEmbeddings } from '@langchain/openai';
import { env } from '../utils/env';
import { pineconeIndex } from '../utils/pinecone';

// Assessment-specific documents (machine-focused)
const ASSESSMENT_DOCS = [
  {
    id: "machine-a-doc1",
    text: "Machine A requires monthly calibration. Optimal temperature range: 20-25°C",
    metadata: { machine: "Machine A", type: "maintenance" }
  },
  {
    id: "machine-b-doc1",
    text: "Machine B has maximum throughput of 200 units/hour. Requires coolant change every 50 operating hours",
    metadata: { machine: "Machine B", type: "specs" }
  },
  {
    id: "machine-c-doc1",
    text: "Machine C safety protocol: Always wear thermal gloves when handling output",
    metadata: { machine: "Machine C", type: "safety" }
  },
  {
    id: "ambiguous-doc1",
    text: "Coolant specification applies to Machine A and Machine B. Use only Type X coolant",
    metadata: { machine: "Machine A, Machine B", type: "warning" }
  }
];

async function seedPinecone() {
  const embeddings = new OpenAIEmbeddings({
    apiKey: env.OPENAI_API_KEY,
    model: "text-embedding-3-small",
    dimensions: 1024
  });

  // Generate embeddings in batch
  const vectors = await Promise.all(
    ASSESSMENT_DOCS.map(async (doc) => ({
      id: doc.id,
      metadata: doc.metadata,
      values: await embeddings.embedQuery(doc.text)
    }))
  );

  // Upsert to Pinecone
  await pineconeIndex.upsert(vectors);
  console.log(`✅ Inserted ${ASSESSMENT_DOCS.length} assessment documents`);
}

seedPinecone().catch(console.error);
