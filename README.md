# MediLedger Frontend

React-based client for the MediLedger medical access platform.  
Supports OAuth2 login (Google), role-aware dashboards for doctors and patients, and communicates via Apollo GraphQL to the backend.

## 🚀 Project Overview

Patients can view their own records and approve access. Doctors can request access and view approved patients. Login is handled via Google OAuth2.

## 🧰 Tech Stack

- React
- Apollo Client (GraphQL)
- OAuth2 login via backend (Google)
- Tailwind CSS (for styling)
- React Router (optional for routing)

## 🔐 Environment Variables

Create a `.env` at project root:

```env
REACT_APP_API_URL=http://localhost:4000/graphql
REACT_APP_LOGIN_REDIRECT=http://localhost:4000/auth/google

⚙️ Setup
git clone https://github.com/Kamalpannu/Health-access-frontend
cd mediledger-frontend
npm install

🚀 Running Locally
npm run dev
