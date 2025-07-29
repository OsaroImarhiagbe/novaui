
<div align="center">

# NovaAI

<em>Build Clean User Friendly UI</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/OsaroImarhiagbe/Monevo?style=flat&logo=git&logoColor=white&color=2E8B57" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/OsaroImarhiagbe/Monevo?style=flat&color=2E8B57" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/OsaroImarhiagbe/Monevo?style=flat&color=2E8B57" alt="repo-language-count">

<em>Built with modern tools and technologies:</em>

<img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=next.js&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Supabase-3ECF8E.svg?style=flat&logo=supabase&logoColor=white" alt="Supabase">
<img src="https://img.shields.io/badge/Visa_Design_System-1A1F71?style=flat&logo=visa&logoColor=white" alt="Visa Design System">
<img src="https://img.shields.io/badge/Framer_Motion-EF0184.svg?style=flat&logo=framer&logoColor=white" alt="Framer Motion">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">

</div>
<br>

## 🚀 Getting Started

## ✅ Prerequisites

- Node.js (v18 or higher)
- npm or yarn

---
## 🚀 Features

- **Upload Images**: Upload image files using a styled input and send them to an API.
- **Search**: Live search through uploaded images by name.
- **View All**: Display a list/grid of all uploaded images.
- **Delete**: Delete any individual image from the list.
- **SPA**: All interactions handled on a single page using React.

## 📦 Install Dependencies

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

1. Describe a UI - for example, 'Responsive login form with remember me'.
2. NovaAI generate a code snippet with a component suggestion

## 📁 Project Structure

src/
├── app/            # App entry point
├── components/     # Reusable UI components (e.g., Button)
├── screens/        # Screen views (NovaAI,Onboarding)
├── utils/          # Hardcoded AI logic and types
└── ...


## 🧠 API
POST /auth-service/login → Request sent to trigger user authentication and authorization with supabase auth

POST /auth-service/signup → Request sent to allow user to be authenticated and have authorization with supabase auth.

POST /auth-service/logout  → Request sent to allow user to be logged out of the web app using supabase auth, user session goes null once this is complete

## 🤖 How AI was utilize
AI was utilized to help with styling the generated code logic, previous logic was not meeting the expectations that needed to be meet.
AI was also utilized to deliever best AI response, since no AI backend was used, AI was asked to generate common response based off user input.

## 💭 My Approach and technical choices

Decided to deliver a familary feel by making NovaAI feel similar to Claude or Chatgpt, where user's can describe what UI they want in the free from input box
For the Code generation logic decided to hard code the logic and based on the user input it would be mapped to provide the approipate component need and code.


## 💡 What I’d add or improve with more time:
Set up a CDN (such as Firebase or Supabase Storage) for more efficient image delivery.

Use MongoDB, AWS DynamoDB  for NoSql database to store chat history.

Use WebSockets for bidirectional communication with NovaAI

Write automated tests for image upload and search functionality.



## 🛠 Tech Stack

Next.js - React framework
Supabase - Authentication Service
TypeScript - Type safety
Framer-Motion - small animation
Tailwind CSS 4 - Utility-first styling
Visa Product Design System - Components
Vercel - Deployment



## 🧠 Assumptions & Notes

Onboarding flow was taken from an app I am currently building right now called Aspensify ( reused code to speed up development)

Chat interface was taken from an app I previously built called Foundry ( reused code to speed up development)

The "in-memory" database is simulated using localStorage since no backend is involved.



## 🧑‍💻 Author
Emmanuel Imarhiagbe
📧 osaroimarhiagbe@gmail.com
🌐 emmanuelimarhiagbe.com
💼 https://www.linkedin.com/in/emmanuel-imarhiagbe/




This project was submitted as part of a front-end coding assignment. Please do not reuse or redistribute without permission.

Thanks for reviewing my submission!
