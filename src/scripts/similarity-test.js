import { testGroups } from "../data/test-sentences.js";
import { embedBatch, EMBEDDING_MODEL } from "../lib/embeddings.js";
import { pairwiseSimilarities } from "../lib/similarity.js";

async function main() {
  console.log(`Embedding model: ${EMBEDDING_MODEL}`);

  for (const group of testGroups) {
    console.log(`\n${group.name}`);
    console.log("測試句子：");
    group.sentences.forEach((sentence, index) => {
      console.log(`${index + 1}. ${sentence}`);
    });

    const vectors = await embedBatch(group.sentences);
    const pairs = pairwiseSimilarities(group.sentences, vectors);

    console.log("兩兩相似度：");
    for (const pair of pairs) {
      console.log(`- 「${pair.a}」 vs 「${pair.b}」：${pair.score.toFixed(4)}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
