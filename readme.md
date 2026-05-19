Chattr
======

Check out the live demo: https://chattr-93st.onrender.com/

Chattr is a real-time chat application with user auth, profile avatars, and live online status powered by Socket.IO.

Features
--------
- Email/password authentication with JWT cookies
- Real-time messaging with live online user presence
- Image attachments in messages (Cloudinary uploads)
- User profiles with avatar upload
- Theme switcher for the chat UI

Tech Stack
---------
Frontend
- React 19 + Vite
- Zustand
- Tailwind CSS v4 + DaisyUI
- React Router
- Socket.IO Client

Backend
- Node.js + Express 5
- MongoDB + Mongoose
- Socket.IO
- JWT auth via cookies
- Cloudinary (image uploads)

Getting Started (Local)
-----------------------
Prerequisites
- Node.js 18+
- MongoDB instance
- Cloudinary account

1) Backend
	- Go to the backend folder and install dependencies.
	- Create a .env file with the variables below.
	- Start the server.

	```bash
	cd backend
	npm install
	npm run dev
	```

2) Frontend
	- Go to the frontend folder and install dependencies.
	- Start the Vite dev server.

	```bash
	cd frontend
	npm install
	npm run dev
	```

By default the backend allows CORS from http://localhost:5173.

Environment Variables (Backend)
-------------------------------
- PORT=3000
- MONGODB_URL=mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- CLOUDINARY_CLOUD_NAME=cloud_name
- CLOUDINARY_API_KEY=cloudinary_api_key
- CLOUDINARY_API_SECRET=cloudinary_api_secret
- NODE_ENV=development

API Routes
----------
Base URL: /api/auth

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | /signup | No | Create a new user account. |
| POST | /login | No | Log in and set auth cookie. |
| POST | /logout | User | Log out and clear auth cookie. |
| PUT | /update-profile | User | Update profile avatar. |
| GET | /check | User | Validate token and return user info. |

Base URL: /api/messages

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| GET | /users | User | List users for the sidebar. |
| GET | /:id | User | Get messages with a user. |
| POST | /send/:id | User | Send a message to a user. |

Auth Notes
----------
- Auth uses a JWT stored in the cookie named jwt.
- Protected routes require a valid token.
