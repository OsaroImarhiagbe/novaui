 📚 NovaAI (Take-Home Assignment)

NovaAI is an AI agent that generates UI components based off user input.



> This project was completed as part of a coding assignment. It uses Next.js, Tailwind CSS 4, Visa Product Design System, and Local Storage (in-memory database).

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher)
- npm or yarn

---

### 📦 Install Dependencies

```bash
npm install
#or
pnpm install
# or
yarn install

# 📦  Run Development Server
pnpm run dev
# or
yarn dev

## 🧭 How to Use

1. Describe a UI 'Responsive login form with remember me'.
2. NovaAI generate a code snippet with a component suggestion


📁 Project Structure

src/
├── app/            # App entry point
├── components/     # Reusable UI components (e.g., Button)
├── screens/        # Screen views (NovaAI,Onboarding)
├── utils/          # Hardcoded AI logic and types
└── ...

✨ Features
🔍 Describe UI and NovaAI generates suggested components and code snippets


💾 Persistence

Conversation history is persisted via localStorage on every change.

🤖 How AI was utilize
AI was utilized to help with styling the generated code logic, previous logic was not meeting the expectations that needed to be meet.
AI was also utilized to deliever best AI response, since no AI backend was used, AI was asked to generate common response based off user input.

💭 My Approach and technical choices

Decided to deliver a familary feel by making NovaAI feel similar to Claude or Chatgpt, where user's can describe what UI they want in the free from input box
For the Code generation logic decided to hard code the logic and based on the user input it would be mapped to provide the approipate component need and code.



💡 What I’d add or improve with more time:
Set up a CDN (such as Firebase or Supabase Storage) for more efficient image delivery.

Use MongoDB, AWS DynamoDB  for NoSql database to store chat history.

Use WebSockets for bidirectional communication with NovaAI

Write automated tests for image upload and search functionality.

🎨 Tech Stack

Next.js - React framework
Supabase - Authentication Service
TypeScript - Type safety
Tailwind CSS 4 - Utility-first styling
Visa Product Design System - Components
Vercel - Deployment

🧠 Assumptions & Notes

Onboarding flow was taken from an app I am currently building right now called Aspensify ( reused code to speed up development)

Chat interface was taken from an app I previously built called Foundry ( reused code to speed up development)

The "in-memory" database is simulated using localStorage since no backend is involved.


🧑‍💻 Author
Emmanuel Imarhiagbe
📧 osaroimarhiagbe@gmail.com
🌐 emmanuelimarhiagbe.com
💼 https://www.linkedin.com/in/emmanuel-imarhiagbe/


---

This project was submitted as part of a front-end coding assignment. Please do not reuse or redistribute without permission.

Thanks for reviewing my submission!
