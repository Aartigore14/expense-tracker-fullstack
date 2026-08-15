<div align="center">

# 💰 Expense Tracker

### Track • Manage • Analyze Your Expenses

A secure, full-stack expense management application built with **Spring Boot** and **React**, featuring JWT-based authentication, a protected dashboard, and real-time expense tracking — deployed live for production use.

[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aartigore14/expense-tracker-fullstack)

[🌐 Live Demo](https://expense.aartigore.in) · [📂 Repository](https://github.com/Aartigore14/expense-tracker-fullstack)

</div>

<br>

---

## 💰 About The Project

**Expense Tracker** is a full-stack web application that enables users to securely register, authenticate, and manage their personal expenses through a clean, responsive dashboard. Built with a **Spring Boot REST API** backend and a **React** frontend, the application implements industry-standard practices for authentication (JWT), authorization (Spring Security), and data persistence (Spring Data JPA + MySQL).

The application is deployed to production and accessible via a custom domain, demonstrating an end-to-end development lifecycle — from backend architecture and secure API design to frontend integration and deployment.

<br>

---

## ✨ Features

<div align="center">

| Category | Features |
|---|---|
| 🔐 **Authentication** | User Registration • User Login • JWT Authentication • Logout |
| 🏠 **Dashboard** | Protected Dashboard Access |
| 💸 **Expense Management** | Add Expense • Edit Expense • Delete Expense • View Recent Expenses |
| 📊 **Insights** | Total Expense Calculation • Expense Analytics • Expense Categories |
| 📱 **Experience** | Responsive UI |
| 🌐 **Production** | Live Deployment • Custom Domain |

</div>

<br>

---

## 🛠️ Tech Stack

<div align="center">

### 💻 Languages
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

### ⚛️ Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

### ⚙️ Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=flat-square&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-005571?style=flat-square&logo=fastapi&logoColor=white)

### 🗄️ Database
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=flat-square&logo=mysql&logoColor=white)

### 🔧 Tools
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000?style=flat-square&logo=intellijidea&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=flat-square&logo=apachemaven&logoColor=white)

</div>

<br>

---

## 🏗️ Architecture

```mermaid
flowchart TD
    A[👤 User] --> B[⚛️ React Frontend]
    B --> C[🔗 Axios / REST API Calls]
    C --> D[🍃 Spring Boot Backend]
    D --> E[🛡️ Spring Security + JWT]
    E --> F[📦 JPA / Hibernate]
    F --> G[(🗄️ MySQL Database)]
```

<br>

---

## 🔄 Application Flow

```mermaid
flowchart TD
    A[Register / Login] --> B[🔑 Authentication]
    B --> C[🏠 Dashboard]
    C --> D[➕ Add / ✏️ Edit / 🗑️ Delete Expense]
    D --> E[🍃 Spring Boot REST API]
    E --> F[(🗄️ MySQL)]
```

<br>

---

## 🌐 Live Demo

<div align="center">

### The application is live and accessible in production

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-success?style=for-the-badge)](https://expense.aartigore.in)

**🔗 https://expense.aartigore.in**

</div>

<br>

---
## 📸 Screenshots

<div align="center">

| Login | Dashboard |
|---|---|
| <img src="./frontend/src/assets/login.jpeg" width="400"/> | <img src="./frontend/src/assets/dashboard.jpeg" width="400"/> |

| Add Expense | Analytics |
|---|---|
| <img src="./frontend/src/assets/add-expense.jpeg" width="400"/> | <img src="./frontend/src/assets/analytics.jpeg" width="400"/> |

</div>

## ☁️ Deployment

The application is fully deployed for production access:

- 🚂 **Backend** — deployed using **Railway**
- 🌍 **Custom Domain** — configured through **Hostinger**
- 🔗 **Production URL** — accessible via [expense.aartigore.in](https://expense.aartigore.in)

```mermaid
flowchart LR
    A[💻 Codebase] --> B[🚂 Railway Deployment]
    B --> C[🌍 Hostinger Domain Config]
    C --> D[🔗 expense.aartigore.in]
```

<br>

---

## ⚙️ Installation & Setup

### Prerequisites
- Java 17+
- Node.js & npm
- MySQL Server
- Maven

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aartigore14/expense-tracker-fullstack.git
cd expense-tracker-fullstack
```

### 2️⃣ Backend Configuration
Navigate to the backend directory and configure `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password

jwt.secret=your_jwt_secret_key
jwt.expiration=your_token_expiration_time
```

### 3️⃣ MySQL Setup
```sql
CREATE DATABASE expense_tracker_db;
```

### 4️⃣ Run the Spring Boot Backend
```bash
cd backend
mvn spring-boot:run
```

### 5️⃣ Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 6️⃣ Configure Frontend Environment Variables
Create a `.env` file in the frontend root:
```env
VITE_API_BASE_URL=http://localhost:8080
```

### 7️⃣ Start the React Frontend
```bash
npm run dev
```

> ⚠️ Never commit real credentials or secrets. Use environment variables and `.gitignore` for sensitive configuration files.

<br>

---

## 🔐 Security

- 🔑 **JWT Authentication** — stateless, token-based user authentication
- 🛡️ **Protected Routes** — both frontend and backend routes are secured
- 👤 **User-Specific Data** — each user can only access their own expense records
- 🔒 **Secure Password Handling** — passwords are securely encoded, never stored in plain text
- 🌐 **CORS Configuration** — configured to allow secure cross-origin communication between frontend and backend

<br>

---

## 🧪 Testing

The application has been functionally tested across the following areas:

- ✅ User Registration
- ✅ User Login
- ✅ Invalid Login Handling
- ✅ Add Expense
- ✅ Edit Expense
- ✅ Delete Expense
- ✅ Logout
- ✅ Protected Route Access
- ✅ API Communication (Frontend ↔ Backend)
- ✅ Production Deployment Verification

<br>

---

## 🎓 Learning Outcomes

<div align="center">

`Java` `Spring Boot` `Spring Security` `JWT` `REST APIs` `React` `MySQL` `JPA/Hibernate` `Git/GitHub` `Postman` `CORS` `Deployment` `Custom Domain/DNS`

</div>

This project demonstrates the ability to design and ship a complete, production-ready full-stack application — from secure backend architecture and RESTful API design to frontend integration, deployment, and domain configuration.

<br>

---

## 👩‍💻 Developer

<div align="center">

### Aarti Gore
**Full Stack Java Developer**

`Java` · `Spring Boot` · `React` · `MySQL`

</div>

<br>

---

## ⭐ Support

If you found this project interesting or useful, consider giving it a **star** ⭐ — it helps and motivates further development!

<div align="center">

**Made with dedication by Aarti Gore**

</div>
