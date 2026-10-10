<div align="center">

# 🔎 Lost & Found

**A smart campus platform to report, match and recover lost items, with admin-verified handovers.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9DCE?style=for-the-badge&logo=gmail&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

🌐 [Live Demo](#) • ⭐ [GitHub Repository](https://github.com/tripathipalak/Lost-And-Found)

</div>

---

## 🚀 Find. Match. Return.

Lost & Found is a full-stack web application for **campuses, hostels and neighbourhoods**. Users report lost or found items, the system **automatically matches** them with a score, and every found item is **verified by an admin** before the owner is notified.

The platform has two experiences:

- 🧑‍🎓 **Users**: report lost/found items, track their reports, get match emails
- 🛡️ **Admins**: verify submitted items, review matches, manage all items

---

## ✨ Features

- 🔐 JWT authentication with user and admin roles
- 📝 Report lost and found items with category, description, location and image upload
- 🤖 Automatic lost/found matching with a match score
- ✅ Admin verification: finders hand the item over at the admin room
- 📧 Email notifications (Nodemailer) to finders and owners
- 📊 User dashboard and profile
- 🛠️ Admin dashboard to verify items, review matches and view all items

---

## ⚙️ How It Works

1. A user reports a **lost** or **found** item.
2. For found items, the finder gets an email to submit the item at the admin room.
3. The admin verifies the item, and it becomes active for matching.
4. The matcher scores lost and found items, and the owner is emailed about a possible match.
5. The admin confirms the claim.

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES modules) |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcrypt |
| Other | Multer (uploads), Nodemailer (emails) |

---

## 📁 Project Structure

```
Lost-And-Found/
├── backend/
│   ├── src/
│   │   ├── config/        # DB connection
│   │   ├── controllers/   # Auth and item logic
│   │   ├── middlewares/   # Auth and error handling
│   │   ├── models/        # User, Items
│   │   ├── routes/        # API routes
│   │   ├── utils/         # matcher, notify, upload
│   │   └── server.js
│   └── uploads/           # Uploaded images (git-ignored)
└── frontend/
    ├── css/
    ├── js/
    └── *.html
```

---

## 🛠️ Getting Started

**Prerequisites:** Node.js 18+, MongoDB (local or Atlas)

```bash
git clone https://github.com/tripathipalak/Lost-And-Found.git
cd Lost-And-Found/backend
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

Serve the frontend in a second terminal:

```bash
cd frontend
npx http-server -p 8000
```

Open `http://localhost:8000`.

---

## 🔌 API Overview

| Area | Endpoints |
|------|-----------|
| Auth | `POST /api/auth/register`, `POST /api/auth/login` |
| Items | `GET/POST /api/items`, `GET /api/items/:id/matches` |

---

## 🔒 Security

- Passwords hashed with bcrypt
- JWT-protected routes with admin role checks
- Secrets in `.env`, never committed

---

## 🔮 Future Improvements

- Image-based matching
- In-app chat between finder and owner
- Hosted live demo

---

## 👩‍💻 Author

**Palak Mani Tripathi**
[GitHub](https://github.com/tripathipalak) • [LinkedIn](https://www.linkedin.com/in/palak-mani-tripathi/)
