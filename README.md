# 🏠 Rentify – Backend System

A **scalable backend system** for a rental property platform, built with **Node.js, Express, and MySQL**, supporting secure authentication, property management, and dynamic search functionality.

---

## 🚀 Key Highlights

* 🔐 Implemented **secure session-based authentication** using cookies and bcrypt hashing
* 🧠 Designed **ownership-based authorization** to protect user resources
* 🔄 Developed **RESTful APIs** with full CRUD functionality
* 🖼️ Integrated **Multer-based file upload system** for property images
* 🗄️ Built optimized **MySQL relational database schema** for efficient queries
* 🔍 Implemented **dynamic search & filtering** by location and price

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Authentication:** Sessions, Cookies
* **Validation:** express-validator
* **File Handling:** Multer
* **Security:** bcrypt

---

## 📡 API Endpoints (Sample)

| Method | Route           | Description        |
| ------ | --------------- | ------------------ |
| GET    | /properties     | Get all listings   |
| POST   | /properties     | Create new listing |
| GET    | /properties/:id | Get single listing |
| PUT    | /properties/:id | Update listing     |
| DELETE | /properties/:id | Delete listing     |
| POST   | /auth/signup    | Register user      |
| POST   | /auth/login     | Login user         |

---

## 🖼️ Features Breakdown

### 🔐 Authentication & Security

* Session-based login system
* Password hashing using bcrypt
* Input validation using express-validator

### 🧠 Authorization

* Only property owners can edit/delete listings

### 🖼️ Image Upload

* Upload, update, delete property images
* Stored locally using Multer

### 🔍 Search & Filtering

* Filter listings based on:

  * Location
  * Price range

---

## 📁 Project Structure

project/
├── controllers/
├── models/
├── routes/
├── middleware/
├── views/
├── uploads/
├── app.js

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/rentify-backend.git
cd rentify-backend
npm install
```

Create `.env` file:

```
DB_HOST=your_host  
DB_USER=your_user  
DB_PASSWORD=your_password  
DB_NAME=your_database  
SESSION_SECRET=your_secret  
```

Run server:

```bash
npm start
```

---

## 🧪 API Testing

Tested using **Postman / Thunder Client**

---

## 🚀 Future Improvements

* Cloud storage (Cloudinary / AWS S3)
* JWT authentication
* Pagination & advanced filters
* Booking system

---

## 👨‍💻 Author

**Garv Puri**

---

