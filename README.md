# seitamiya.com

Astro製の静的サイト。JSゼロ、テキスト主体。英語圏向け（記事は英語）。

## 記事を書く

`src/content/posts/<slug>.md` を追加するだけ。URLは `/posts/<slug>/`。

```md
---
title: タイトル
date: 2026-11-22
draft: false   # true にすると非公開
---

本文
```

## コマンド

- `npm run dev` — ローカル確認 (http://localhost:4321)
- `npm run build` — `dist/` に出力
