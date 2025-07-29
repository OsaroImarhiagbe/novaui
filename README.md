
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


## 🚀 Current Features

- 💬 **Prompt-to-UI** – Users can describe a UI (e.g., "Responsive login with remember me") and NovaAI returns a generated code snippet and component suggestion.
- 🧠 **Mock Agent Responses** – Responses are hardcoded based on input patterns to simulate an AI experience.
- 🧩 **Combined Component Generation** – Users can describe multiple components in one prompt, and NovaAI will return structured code accordingly.
- 💾 **LocalStorage Chat Persistence** – All conversations are saved locally, so the user doesn’t lose history across page reloads.



## 🔮 Planned / Future Features

- 🕘 **View Chat History UI** – Add a panel or sidebar to revisit and reuse previous prompts.
- 💡 **Prompt Templates / Suggestions** – Offer quick starter ideas like “Navbar with search” or “Form with validation.”
- 🎨 **Live Component Preview** – Visually render the generated components alongside the code.
- 📋 **One-click Copy** – Add a “Copy to clipboard” button with feedback toast.
- ⭐ **Save Favorite Components** – Allow users to bookmark and revisit commonly used UI snippets.
- 🌓 **Theme Toggle** – Add light/dark mode toggling using Tailwind/NovaUI theming.
- 🧠 **Backend-Powered AI Integration** – Replace mock logic with a real AI (e.g., OpenAI API) for smarter and more flexible code generation.


## 🛠 Tech Stack
```bash
Next.js - React framework
Next.js API Routes - Built in API to handle user authentication
Supabase - Authentication Service
TypeScript - Type safety
Framer-Motion - Animation
Tailwind CSS 4 - Utility-first styling
Visa Product Design System - Components and Styling
Vercel - Deployment
```

## 📦 Install Dependencies
```bash
npm install
#or
pnpm install
# or
yarn install
```

# 📦  Run Development Server
```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```
## 🧭 How to Use

1. Describe a UI - for example, 'Responsive login form with remember me'.
2. NovaAI generate a code snippet with a component suggestion

## 📁 Project Structure

```bash
src/
├── components/
│   ├── AuthCard.tsx - Visa Product Design System Component
│   ├── Button.tsx -  Visa Product Design System Component
│   ├── CheckBox.tsx -  Visa Product Design System Component
│   ├── Input.tsx -  Visa Product Design System Component
│   ├── MessageItem-  Chat interface component
├── app/
│    └── api
│        ├── auth-service - Microservice for handling user's login, signup and logout
│            ├── login             
│                   └── route.ts
│            ├── logout
│                   └── route.ts
│            ├── signup
│                   └── route.ts
│    └── auth - Next.js APP router that renders the corresponding screens on the server
│         ├── login             
│               └── page.tsx
│         ├── signup            
│               └── page.tsx
│    └── screens - Folder that holds each screen
│          ├── auth            
│               └── LoginScreen.tsx
                └── SignUpScreen.tsx
│          ├── home            
│               └── HomeScreen.tsx
│          ├── Onboarding            
│               └── CelebrateScreen.tsx
│               └── FeaturesScreen.tsx
│               └── IntroScreen.tsx
│               └── OccupationScreen.tsx
│               └── OnboardingScreen.tsx

```

## 🧠 API
```bash
POST /auth-service/login → Request sent to trigger user authentication and authorization with supabase auth

POST /auth-service/signup → Request sent to allow user to be authenticated and have authorization with supabase auth.

POST /auth-service/logout  → Request sent to allow user to be logged out of the web app using supabase auth, user session goes null once this is complete
```
## 🤖 How AI Was Utilized
AI tools were leveraged during development to support ideation and improve code quality. Specifically:

🎨 Styling Assistance: AI was used to help refine and standardize the styling of generated UI components to ensure visual consistency across different screen types.

💡 Logic Brainstorming: AI assisted in brainstorming approaches for handling code generation logic, including how to structure mocked responses and map user input to appropriate UI components.

🧠 Simulated AI Responses: Since no AI backend (e.g., OpenAI API) was integrated, AI was used during development to generate common response patterns based on sample user prompts.

⚠️ Note: AI was not used to complete the assignment, but rather as a tool for enhancing the development process and exploring possible logic implementations.

## 💭 My Approach and technical choices

To provide a familiar and user friendly experience, NovaAI is designed to function similarly to conversational AI tools like Claude and ChatGPT, allowing users to describe the UI they want in a free-form input box.
For the code generation logic, I opted to hardcode the logic where user input is mapped to pre-defined components and code snippets. This approach allows the system to suggest relevant components based on the input, even though the AI logic is currently simulated (mocked), rather than powered by a real AI backend.
Furthermore AI response logic is hardcoded as well due that, the mock AI has a restrictive feel to user response.


## 💡 What I’d add or Improve with more time:
- Efficient Image Delivery & Storage: Set up a CDN (e.g., Firebase or Supabase Storage) for faster, more efficient image hosting and delivery (allowing users to upload images of components).

- Database Integration: Implement a NoSQL database service (e.g., MongoDB or AWS DynamoDB) to persist chat history and user data for better scalability.

- Full Backend Setup: Integrate a third-party AI API (such as OpenAI) or develop a dedicated AI model for NovaAI to provide smarter, more dynamic responses. Implement WebSockets for real-time, bidirectional communication between the user and NovaAI.

- Automated Testing: Write automated tests (e.g., using Jest or Cypress) to ensure that the code generation logic is robust and consistently produces the correct components.


## 🧠 Assumptions, Notes & Shortcuts
Some of the code for NovaAI was reused from my previous projects to speed up development. You can explore the source code for these projects below:

- **[Aspensify](https://github.com/OsaroImarhiagbe/aspensify/tree/development)**:  Used the onboarding flow to reduce development time.

- **[Foundry](https://github.com/OsaroImarhiagbe/Foundry/tree/development)**:  Reused the chat interface code from this app for the conversational UI in NovaAI.

- Simulated "In-Memory" Behavior: Since there's no backend, the chat history is saved using localStorage, allowing users to retain their conversations even after refreshing the page (Though users are not able to click on the chat history to display it. This feature was not added due to time contraints but can be added in the future).

Feel free to check out the repos to get more insight into the components and logic used in NovaAI.


## 🧑‍💻 Author
```bash
Emmanuel Imarhiagbe
📧 osaroimarhiagbe@gmail.com
🌐 emmanuelimarhiagbe.com
💼 https://www.linkedin.com/in/emmanuel-imarhiagbe/
```



This project was submitted as part of a front-end coding assignment. Please do not reuse or redistribute without permission.

Thanks for reviewing my submission!
