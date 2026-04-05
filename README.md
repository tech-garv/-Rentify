# 🏠 Rentify – Backend System

A scalable and secure backend system for a property rental platform, built using **Node.js, Express, and MySQL**. Rentify enables users to list, manage, and explore rental properties with authentication, authorization, and advanced features.

---

## 🚀 Features

* 🔐 **Authentication & Security**

  * Session-based authentication using cookies
  * Secure login & signup with bcrypt password hashing
  * Server-side validation using express-validator

* 🧠 **Authorization**

  * Ownership-based access control
  * Only listing owners can edit/delete their properties

* 🔄 **CRUD Operations**

  * Create, Read, Update, Delete property listings
  * RESTful API design

* 🖼️ **Image Upload System**

  * File upload using Multer
  * Image storage on server
  * Update & delete images dynamically

* 🗄️ **Database Integration**

  * MySQL relational database
  * Optimized queries for performance
  * Structured data handling

* 🔍 **Search & Filtering**

  * Filter properties by location and price
  * Dynamic data retrieval

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Authentication:** Sessions, Cookies
* **Validation:** express-validator
* **File Upload:** Multer
* **Security:** bcrypt

---

## 📁 Project Structure

```
project/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── views/
├── uploads/
├── app.js
├── package.json
├── .env
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/rentify-backend.git
cd rentify-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
SESSION_SECRET=your_secret
```

---

### 4️⃣ Run the server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 🔐 Important Notes

* Do not upload:

  * `node_modules/`
  * `.env`
  * `uploads/`

* Use `.gitignore` to keep repo clean and secure

---

## 🚀 Future Improvements

* Cloud image storage (Cloudinary)
* JWT authentication
* Pagination & advanced filters
* Booking system integration
* Deployment (Render / Railway)

---

## 👨‍💻 Author

**Garv Puri**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
