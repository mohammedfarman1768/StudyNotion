# Study Notion: The Ed Tech Platform

## Project Description  
StudyNotion is a fully functional ed-tech platform built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). It allows users to create, consume, and rate educational content, providing a seamless and interactive learning experience for students and a platform for instructors to showcase their expertise.

---

## Features

### 🎓 Student Experience:
- Homepage with course list and user details  
- Course list with descriptions and ratings  
- Wishlist and cart checkout  
- Course content access with videos and materials  
- User account management  

### 🧑‍🏫 Instructor Tools:
- Dashboard with course overview and feedback  
- Insights on course performance metrics  
- Course creation, updating, and deletion  
- Profile management  

### 🛠️ Admin Panel (Future Scope):
- Platform insights and user management  
- Instructor management  

---

## 💻 Front-end  
- **Technologies:** ReactJS, CSS, Tailwind, Redux  
- **Design:** Clean and minimal UI using Figma  
- **Pages:** Homepage, Course List, Wishlist, Cart, Course Content, User Details, Dashboard, Insights, Course Management  

---

## 🧠 Back-end  
- **Architecture:** Monolithic using Node.js and Express.js  
- **Database:** MongoDB for flexible data storage  
- **Features:** User authentication, course management, payment integration (Razorpay), media management (Cloudinary), Markdown formatting  
- **Libraries:** JWT for authentication, Bcrypt for password hashing, Mongoose for MongoDB interaction  

---

## 🚀 Deployment  
- **Front-end:** Vercel  
- **Back-end:** Render or Railway  
- **Media:** Cloudinary  
- **Database:** MongoDB Atlas  

---

## 🌐 API Design  
- RESTful API for communication between front-end and back-end  
- Endpoints for user authentication, course management, and content delivery  

---

## ✅ Testing  
- Comprehensive testing process covering unit, integration, and end-to-end tests  
- Use of popular test frameworks and tools  

---

## 🔮 Future Enhancements  
- Improved analytics for instructors and admin  
- Enhanced user engagement features  
- Expanded admin functionalities  

> **StudyNotion aims to provide an immersive learning experience and a platform for global knowledge sharing, making education accessible and engaging for everyone.**

---

## 🚦 Getting Started  

### 🧱 Prerequisites  
- Node.js and npm installed  
- MongoDB Atlas account  
- Vercel account (for front-end deployment)  
- Render or Railway account (for back-end deployment)  
- Cloudinary account (for media management)  

---

## ⚙️ Installation Instructions  

### 📦 Clone the Repository  
> Note: These steps may require minor adjustments based on your system setup.
```bash
git clone https://github.com/mohammedfarman1768/StudyNotion.git
cd StudyNotion
🔧 Setting Up the Backend
1. Install Dependencies
bash
Copy code
cd backend
npm install
2. Configure Environment Variables
Create a .env file in the backend directory with the following:

env
Copy code
PORT=5000
MONGO_URI=<your-mongodb-cluster-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
3. Start the Backend Server
bash
Copy code
npm start
The backend will run on http://localhost:5000

💻 Setting Up the Frontend
1. Install Dependencies
bash
Copy code
cd frontend
npm install
2. Configure Environment Variables
Create a .env file in the frontend directory with:

env
Copy code
REACT_APP_API_URL=http://localhost:5000
REACT_APP_CLOUDINARY_URL=<your-cloudinary-url>
3. Start the Frontend Server
bash
Copy code
npm start
🗃️ Database Setup
Create a MongoDB Cluster on MongoDB Atlas

Add a database user with read and write permissions

Whitelist your IP address

Use the connection string in your .env file as MONGO_URI

🚢 Deployment
Front-end Deployment (Vercel)
Sign in to Vercel

Create a new project from your GitHub repo

Set environment variables in Vercel dashboard

Deploy 🚀

Back-end Deployment (Render or Railway)
Sign in to Render or Railway

Create a new web service

Connect your GitHub repo

Set environment variables

Deploy 🚀

🤝 Contributing
Contributions are welcome!
Fork the repo, make changes, and submit a pull request.

📬 Contact
For any questions or suggestions, please reach out at:
mohammedfarman1768@gmail.com

Enjoy building and learning with StudyNotion! 🚀