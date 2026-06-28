# TradeLog SaaS — Phase 0: Project Foundation

এই ফোল্ডারটা তোমার Next.js + Prisma project-এর শুরুর কাঠামো (skeleton)।
নিচের ধাপগুলো নিজের কম্পিউটারে অনুসরণ করো।

## ধাপ ১ — Node.js আছে কিনা চেক করো

টার্মিনাল/কমান্ড প্রম্পট খুলে লেখো:

```
node -v
npm -v
```

যদি ভার্সন নাম্বার দেখায় (Node v18 বা তার উপরে), তাহলে তুমি রেডি — ধাপ ২-এ যাও।
যদি "command not found" দেখায়, তাহলে https://nodejs.org থেকে LTS ভার্সন ইনস্টল করো (Next, Cancel চাপতে চাপতে ইনস্টল হয়ে যাবে), তারপর আবার চেক করো।

## ধাপ ২ — Dependencies install করো

এই ফোল্ডারের ভেতরে গিয়ে:

```
npm install
```

এটা package.json-এ লেখা সব লাইব্রেরি (Next.js, React, Tailwind, Prisma) ডাউনলোড করবে। কয়েক মিনিট লাগতে পারে।

## ধাপ ৩ — Database connect করার আগে dev server চালিয়ে দেখো

```
npm run dev
```

ব্রাউজারে যাও: http://localhost:3000 — "TradeLog SaaS — Coming Soon" দেখা উচিত।
(এখনো database লাগবে না, এটা শুধু homepage test করার জন্য।)

## ধাপ ৪ — .env ফাইল বানাও

`.env.example` ফাইলটা কপি করে `.env` নামে save করো:

```
cp .env.example .env
```

DATABASE_URL এখনো খালি/placeholder — পরের ধাপে (Postgres provider বানানোর পর) এটা পূরণ করব একসাথে।

## ধাপ ৫ — Git repository

```
git init
git add .
git commit -m "Phase 0: project foundation"
```

এরপর GitHub-এ একটা নতুন (private) repository বানিয়ে push করো — Vercel এখান থেকেই deploy করবে।

---

পরের ধাপগুলো (Postgres database বানানো ও Vercel-এ deploy করা) আমরা চ্যাটেই একসাথে করব —
উপরের ৫টা ধাপ শেষ করে আমাকে জানিও।
