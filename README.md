# 作業 5：向量相似度實驗

本作業參考 `AI AGENT LOCAL/ai-agent-js-v2-3.1-rag-text-to-vector` 的 Embeddings 寫法，使用 OpenAI Embeddings API 將文字轉成向量，並計算每組句子的兩兩餘弦相似度。

## 實作內容

- `src/lib/openai.js`：OpenAI client，沿用課程範例的設定方式
- `src/lib/embeddings.js`：呼叫 `text-embedding-3-small` 取得文字向量
- `src/lib/similarity.js`：計算 cosine similarity
- `src/data/test-sentences.js`：3 組測試文字，每組 3 句
- `src/scripts/similarity-test.js`：相似度測試程式

## 執行方式

```bash
npm install
npm start
```

`.env` 需設定：

```bash
OPENAI_API_KEY=你的 OpenAI API Key
```

## 測試文字

第 1 組：意思相近

- 我喜歡貓
- 貓咪很可愛
- 我養了一隻貓

第 2 組：意思不同

- 今天天氣很好
- 我要去買菜
- 電腦壞了

第 3 組：自訂測試案例，主題為咖啡

- 我想喝一杯熱拿鐵
- 這杯咖啡有濃郁奶香
- 明天要搭高鐵去台中

## 實際相似度結果

目前尚未填入實際 API 執行結果。設定 `.env` 後執行：

```bash
npm start
```

將終端機輸出的兩兩相似度貼到下方。

### 第 1 組：意思相近

待執行後填入。

### 第 2 組：意思不同

待執行後填入。

### 第 3 組：自訂測試案例

待執行後填入。

## 結果分析

預期第 1 組三句都與「貓」有關，兩兩相似度應該較高。第 2 組三句主題分散，天氣、買菜、電腦故障彼此語意差距較大，兩兩相似度應該低於第 1 組。
