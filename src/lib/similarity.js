export function cosineSimilarity(a, b) {
  if (a.length !== b.length) {
    throw new Error("兩個向量的維度不同，無法計算相似度。");
  }

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function pairwiseSimilarities(sentences, vectors) {
  const pairs = [];

  for (let i = 0; i < sentences.length; i += 1) {
    for (let j = i + 1; j < sentences.length; j += 1) {
      pairs.push({
        a: sentences[i],
        b: sentences[j],
        score: cosineSimilarity(vectors[i], vectors[j]),
      });
    }
  }

  return pairs;
}
