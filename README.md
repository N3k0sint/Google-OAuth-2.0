# Google Auth 2.0

A simple Node.js + Express demo that uses **Passport.js** and **Google OAuth 2.0** to authenticate users and render protected pages with **EJS**.

> This project is intended as a minimal Google login demo (no database) — user information is stored in the session.

---

## ✅ Features

- Google OAuth 2.0 login via Passport (`passport-google-oauth20`)
- Session management with `express-session`
- Server-rendered views using `ejs`
- Protected route (`/landing`) that requires authentication

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- A **Google Cloud project** with OAuth 2.0 credentials (Client ID + Client Secret)

### 1) Clone the repo

```bash
git clone https://github.com/N3k0sint/Google-OAuth-2.0
cd "Google Auth 2.0"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create a `.env` file

Create a `.env` file in the project root with the following values:

```env
CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret
CALLBACK_URL=http://localhost:3000/auth/google/callback
SESSION_SECRET=some-random-secret
PORT=3000
```

> 💡 Make sure the `CALLBACK_URL` matches what you configured in the Google Cloud Console.

### 4) Run the app

```bash
node app.js
```

Then visit: http://localhost:3000

---

## 🧠 How it works

- `app.js` initializes Express, Passport, and session middleware
- `config/passport.js` configures the Google OAuth strategy
- When users sign in, they are redirected to `/landing`
- `/landing` is protected and requires authentication

---

## 📁 Project Structure

- `app.js` - main Express server
- `config/passport.js` - Passport strategy configuration
- `views/` - EJS templates (`login.ejs`, `landing.ejs`)

---

## 🛠️ Notes

- This project **does not** store user data in a database — it keeps the Google profile in the session.
- For production use, set `cookie.secure` to `true` and use HTTPS.

---

## 📜 License

MIT
