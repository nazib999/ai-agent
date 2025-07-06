🚀 Features

Server-side rendering (SSR) of AI agent list from mock-agents.json

Client-side search and filtering by:

Clear all filters/reset functionality

Fully responsive UI using Shadcn UI

Smooth card animation with Framer Motion

SEO-ready with dynamic <title> and <meta> tags

Optional: Google OAuth 2.0 Sign-in with NextAuth.js

🧑‍💻 Local Setup

1. Clone the Repository

git clone https://github.com/nazib999/ai-agent

2. Install Dependencies

npm install

3. Add Environment Variables

Create a .env.local file at the root:

# Required for NextAuth
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

# Optional: For Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


4. Run the Development Server

npm run dev

Visit http://localhost:3000

🧠 Key Design Decisions

Used React Server Components (App Router) for initial SSR data loading.

Stored mock-agents.json in public/data/ and fetched it directly in server components for SSR.

Implemented Redux to manage global search and filter state cleanly.

Used forwardRef + useImperativeHandle to allow parent to control reset logic in <SearchBar />.

Used Framer Motion for subtle hover and load animations on cards.

🔐 Google OAuth 2.0 (Optional Challenge)

I implemented Google OAuth using NextAuth.js:

Used the next-auth library with the App Router setup (/api/auth/[...nextauth]/route.ts)

Set up mock Google credentials from Google Cloud Console

Authenticated users can see their name and profile image in the header

SessionProvider wraps the app to allow useSession globally

Challenges Faced:

Required proper .env setup and redirect URI matching

Ensuring the <SessionProvider> was wrapped correctly in layout.tsx



📆 Tech Stack

Next.js 14 (App Router)

TypeScript

Redux Toolkit

Shadcn UI (Radix + Tailwind)

Framer Motion

NextAuth.js



This project is for ArkLab's Frontend Developer Internship Take-Home Challenge. All code is written me for evaluation purposes
