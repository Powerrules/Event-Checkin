# 🎟️ Event Check-In System

A QR-based event attendance and management platform

The **Event Check-In System** is a full-stack web application designed to simplify event registration and attendance tracking. Organizers can create events, generate unique QR codes, and allow participants to check in instantly using their mobile devices. The system logs all check-ins securely, provides real-time updates, and includes an admin dashboard for attendance insights.

---

## 🚀 Features

### ✅ **Event Management**

* Create, update, and delete events
* Auto-generate unique QR codes for each event
* Secure admin-only access

### 📱 **QR Code-Based Check-In**

* Participants scan the event QR code
* Instant authentication & check-in
* Real-time database updates

### 📊 **Admin Analytics Dashboard**

* Total check-ins
* Live attendee count
* Time-based check-in trends
* Search & filter attendees

### 🔐 **Authentication & Security**

* JWT-based authentication (if implemented)
* Secure API routes
* Validations for event and participant data

---

## 🏗️ Tech Stack

### **Frontend**

* React
* TypeScript / JavaScript
* TailwindCSS (optional)
* QR Code Scanner library

### **Backend**

* Node.js
* Express.js
* REST APIs
* QR Code Generator library

### **Database**

* PostgreSQL / MongoDB
* Prisma / Mongoose ORM (optional)

### **Deployment**

* Vercel (Frontend)
* Railway / Render (Backend)

---

## 📂 Folder Structure (Example)

```
event-checkin/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── App.js
│   ├── public/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/event-checkin.git
cd event-checkin
```

---

## 🖥️ Backend Setup

```bash
cd backend
npm install
```

### Create a `.env` file:

```
DATABASE_URL=your_db_url
JWT_SECRET=your_secret_key
PORT=5000
```

### Start the backend:

```bash
npm run dev
```

---

## 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📡 API Endpoints (Example)

### **Event Routes**

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | `/api/events`     | Create a new event |
| GET    | `/api/events`     | Get all events     |
| GET    | `/api/events/:id` | Get one event      |
| DELETE | `/api/events/:id` | Delete event       |

### **Check-In Routes**

| Method | Endpoint                | Description                 |
| ------ | ----------------------- | --------------------------- |
| POST   | `/api/checkin`          | Register attendee check-in  |
| GET    | `/api/checkin/:eventId` | List check-ins for an event |

---

## 🧪 Testing the System

* Open the frontend on your browser
* Create an event
* Scan the generated QR code using a phone
* Check the analytics dashboard for instant updates

---

## 🎯 Project Goals

This project is built to demonstrate:
✔️ Backend API design
✔️ Full-stack integration
✔️ QR-code based real-world solution
✔️ Database-driven event management
✔️ Deployment on cloud platforms

---

## 📌 Future Enhancements

* Email-based event registration
* Export attendance reports (CSV / PDF)
* Multi-admin support
* NFC-based check-in
* Push notifications for event reminders

---

## 🙌 Author

ANAND TISHY THOMAS
Computer Science Student
Illinois Institute of Technology
