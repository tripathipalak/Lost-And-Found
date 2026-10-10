# Lost & Found

A web platform for reporting and recovering lost items on campuses, hostels and neighbourhoods. Items are matched automatically, and every found item is verified by an admin before the owner is notified.

## Features

- JWT-based authentication with user and admin roles
- Report lost and found items with category, description, location and image upload
- Automatic matching of lost and found items with a match score
- Admin verification: finders hand the item over at the admin room, and the admin confirms it
- Email notifications (Nodemailer) to finders and owners
- User dashboard to manage own reports and profile
- Admin dashboard to verify items, review matches and view all items

## How it works

1. A user reports a lost item or a found item.
2. For found items, the finder gets an email asking to submit the item at the admin room.
3. The admin verifies the item, and it becomes active for matching.
4. The matcher scores lost and found items, and the owner is emailed about a possible match.
5. The admin confirms the claim.

## Tech Stack

**Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, Multer, Nodemailer
**Frontend:** HTML5, CSS3, Vanilla JavaScript (ES modules)

## Project Structure

```
Lost-And-Found/
├── backend/
│   ├── src/
│   │   ├── config/        # DB connection
│   │   ├── controllers/   # Auth and item logic
│   │   ├── middlewares/   # Auth and error handling
│   │   ├── models/        # User, Items
│   │   ├── routes/
│   │   ├── utils/         # matcher, notify (email), upload
│   │   └── server.js
│   └── uploads/           # Uploaded images (git-ignored)
└── frontend/
    ├── css/
    ├── js/
    └── *.html
```

## Getting Started

**Prerequisites:** Node.js 18+, MongoDB (local or Atlas)

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/lost-and-found
JWT_SECRET=use_a_long_random_string
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
FROM_EMAIL=your_email
```

```bash
npm start
```

Serve the frontend in another terminal:

```bash
cd frontend
npx http-server -p 8000
```

Open `http://localhost:8000`.

## API (overview)

| Area | Examples |
|------|----------|
| Auth | `POST /api/auth/register`, `POST /api/auth/login` |
| Items | `GET/POST /api/items`, `GET /api/items/:id/matches` |

## Security

- Passwords hashed with bcrypt
- JWT-protected routes and role checks for admin actions
- Secrets kept in `.env` (never committed)

## Future Improvements

- Image-based matching
- In-app chat between finder and owner
- Deployed live demo

## Author

**Palak Mani Tripathi**: [GitHub](https://github.com/tripathipalak) · [LinkedIn](https://www.linkedin.com/in/palak-mani-tripathi/)