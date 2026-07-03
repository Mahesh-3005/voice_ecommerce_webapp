# 🎤 Voice-Controlled E-Commerce Web App

A modern web application that allows users to perform e-commerce actions using voice commands. This project demonstrates real-time voice recognition, command parsing, and dynamic UI updates.

---

## 🚀 Features

* 🎤 Voice command integration (Speech Recognition API)
* 🛒 Add products to cart using voice
* ❌ Remove items from cart via command
* 🔍 Search products using voice
* 🧾 View and manage cart
* 💾 Cart persistence using localStorage
* 🧠 Backend command parsing with Node.js
* ⚛️ Dynamic UI updates using React

---

## 🎯 Supported Voice Commands

Try speaking:

* "Show products"
* "Add iPhone to cart"
* "Add 2 laptops"
* "Remove shoes from cart"
* "Search laptop"
* "Show cart"
* "Clear cart"

---

## 🏗️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6)
* CSS (Custom styling)
* Web Speech API

### Backend

* Node.js
* Express.js

---

## Demo


https://github.com/user-attachments/assets/e35e0dba-b0c7-40cf-b751-5790b24d386b


## 📁 Project Structure

```
voice-ecommerce-app/
│
├── client/        # React Frontend
│   ├── src/
│   └── public/
│
├── server/        # Node.js Backend
│   └── server.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/Mahesh-3005/voice-ecommerce-app.git
cd voice-ecommerce-app
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm start
```

App runs at:

```
http://localhost:3000
```

---

## 🔗 How It Works

1. User gives a voice command
2. React captures speech using Web Speech API
3. Command is sent to Node.js backend
4. Backend parses intent (action + product + quantity)
5. Frontend updates UI based on action
6. Voice feedback is generated using Speech Synthesis

---

## 💡 Key Highlights

* Real-time voice-controlled UI interaction
* Clean separation of frontend and backend
* Scalable architecture for future enhancements
* Demonstrates practical use of browser APIs

---

## ⚠️ Limitations

* Works best in Chrome browser
* Basic command parsing (not full NLP)
* No database (uses localStorage)

---

## 🚀 Future Improvements

* 🤖 AI/NLP-based command understanding
* 🔐 User authentication
* 🧾 Checkout & payment integration
* 📦 Backend database (MongoDB / PostgreSQL)
* 📱 Mobile app (Flutter version)

---

## 👨‍💻 Author

Developed as a learning and portfolio project to demonstrate full-stack development and voice-based interaction.

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
