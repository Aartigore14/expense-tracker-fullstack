# 💰 Expense Tracker — Full Stack Web Application

> A full-stack personal finance management application built with **React + Vite** frontend and **Spring Boot** backend — featuring JWT authentication, expense categorization, analytics dashboard, and interactive charts.

<br/>

![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Backend](https://img.shields.io/badge/Backend-Spring%20Boot%203.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Database](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Security](https://img.shields.io/badge/Auth-JWT%20%2B%20Spring%20Security-6DB33F?style=for-the-badge&logo=spring&logoColor=white)

<br/>

---

## 📌 About This Project

**Expense Tracker** is a full-stack web application designed to help users manage their personal finances effectively. Users can log expenses by category, track income vs. expenditure, view analytics dashboards with charts, and manage everything through a secure, authenticated interface.

This project is built as part of my Java Full Stack learning journey — applying Spring Boot, Spring Security, JWT, React, and MySQL in a real-world application context.

---

## ✨ Planned Features

- 🔐 **User Authentication** — Secure registration and login with JWT + Spring Security 6
- ➕ **Expense Management** — Add, edit, delete, and view all expense records
- 🗂️ **Category-wise Tracking** — Organize expenses by categories (Food, Travel, Bills, etc.)
- 📊 **Analytics Dashboard** — Visual breakdown of spending by category and time period
- 📈 **Income vs Expense Tracking** — Monthly summary with net balance calculation
- 🔄 **Data Visualization** — Interactive charts using Chart.js / Recharts
- 📱 **Responsive UI** — Mobile-friendly design that works across all screen sizes
- 🛡️ **Role-based Access** — Secure endpoints protected by Spring Security filter chain

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT SIDE                         │
│         React + Vite  │  Axios  │  React Router         │
│         Chart.js / Recharts  │  Tailwind CSS            │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTP REST API
                           │ JWT in Authorization header
┌──────────────────────────▼──────────────────────────────┐
│                     SERVER SIDE                         │
│              Spring Boot 3.x (Port 8080)                │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │  Controller │→ │   Service   │→ │   Repository    │ │
│  │  @RestCtrl  │  │  @Service   │  │  JpaRepository  │ │
│  └─────────────┘  └─────────────┘  └────────┬────────┘ │
│                                              │          │
│  ┌─────────────────────────────────────────┐│          │
│  │   Spring Security 6 + JWT Filter Chain  ││          │
│  └─────────────────────────────────────────┘│          │
└─────────────────────────────────────────────┼──────────┘
                                              │
┌─────────────────────────────────────────────▼──────────┐
│                      DATABASE                           │
│                    MySQL 8.0                            │
│         users │ expenses │ categories │ income          │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI component framework |
| Vite | Fast build tool and dev server |
| React Router v6 | Client-side routing |
| Axios | HTTP client with JWT interceptors |
| Chart.js / Recharts | Data visualization and charts |
| Tailwind CSS | Responsive UI styling |

### Backend
| Technology | Purpose |
|------------|---------|
| Spring Boot 3.x | Backend REST API framework |
| Spring Security 6 | Authentication and authorization |
| Spring Data JPA | ORM and database abstraction |
| JWT (JSON Web Token) | Stateless authentication |
| Hibernate | ORM implementation |
| Lombok | Boilerplate code reduction |
| Maven | Build and dependency management |

### Database
| Technology | Purpose |
|------------|---------|
| MySQL 8.0 | Primary relational database |
| Flyway | Database schema migration |

---

## 📁 Project Structure

```
expense-tracker/
│
├── backend/                          ← Spring Boot Application
│   └── src/main/java/
│       └── com/example/expensetracker/
│           ├── config/
│           │   ├── SecurityConfig.java
│           │   └── JwtConfig.java
│           ├── controller/
│           │   ├── AuthController.java
│           │   ├── ExpenseController.java
│           │   └── CategoryController.java
│           ├── service/
│           │   ├── AuthService.java
│           │   ├── ExpenseService.java
│           │   └── JwtService.java
│           ├── repository/
│           │   ├── UserRepository.java
│           │   └── ExpenseRepository.java
│           ├── model/
│           │   ├── User.java
│           │   ├── Expense.java
│           │   └── Category.java
│           ├── dto/
│           │   ├── LoginRequest.java
│           │   ├── RegisterRequest.java
│           │   └── ExpenseDTO.java
│           └── security/
│               ├── JwtAuthFilter.java
│               └── UserDetailsServiceImpl.java
│
├── frontend/                         ← React + Vite Application
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── ExpenseForm.jsx
│       │   ├── ExpenseList.jsx
│       │   └── Charts/
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Dashboard.jsx
│       │   └── Expenses.jsx
│       ├── services/
│       │   └── api.js
│       └── context/
│           └── AuthContext.jsx
│
└── README.md
```

---

## 🔐 Authentication Flow

```
User Registers / Logs In
        ↓
POST /api/auth/register or /api/auth/login
        ↓
Spring Security validates credentials
        ↓
JWT Token generated and returned
        ↓
React stores token in memory
        ↓
Axios sends token in every request header:
Authorization: Bearer <token>
        ↓
JwtAuthFilter validates token on every protected request
        ↓
Access granted / denied based on token validity
```

---

## 📡 API Endpoints

### Auth Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login and get JWT token | ❌ |

### Expense Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/expenses` | Get all expenses for user | ✅ |
| GET | `/api/expenses/{id}` | Get expense by ID | ✅ |
| POST | `/api/expenses` | Add new expense | ✅ |
| PUT | `/api/expenses/{id}` | Update expense | ✅ |
| DELETE | `/api/expenses/{id}` | Delete expense | ✅ |
| GET | `/api/expenses/category/{name}` | Filter by category | ✅ |
| GET | `/api/expenses/summary` | Monthly summary | ✅ |

### Category Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/categories` | Get all categories | ✅ |
| POST | `/api/categories` | Add custom category | ✅ |

---

## 🗄️ Database Schema

```sql
-- Users table
CREATE TABLE users (
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(100) UNIQUE NOT NULL,
    password   VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id   BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Expenses table
CREATE TABLE expenses (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id     BIGINT NOT NULL,
    category_id BIGINT NOT NULL,
    title       VARCHAR(150) NOT NULL,
    amount      DECIMAL(10,2) NOT NULL,
    expense_date DATE NOT NULL,
    notes       VARCHAR(255),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

---

## ⚙️ Getting Started

### Prerequisites
- Java 21 LTS
- Node.js 22 LTS + npm
- MySQL 8.0
- Maven 3.9+
- IntelliJ IDEA (backend) + VS Code (frontend)

### Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/Aartigore14/expense-tracker.git

# 2. Navigate to backend folder
cd expense-tracker/backend

# 3. Configure MySQL in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/expensedb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# 4. Create the database in MySQL
mysql -u root -p
CREATE DATABASE expensedb;

# 5. Run the Spring Boot application
mvn spring-boot:run

# Backend runs on http://localhost:8080
```

### Frontend Setup

```bash
# 1. Navigate to frontend folder
cd expense-tracker/frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# Frontend runs on http://localhost:5173
```

---

## 🚧 Development Progress

| Feature | Status |
|---------|--------|
| Spring Boot project setup | ✅ Complete |
| MySQL database connection | ✅ Complete |
| User Registration and Login API | ✅ Complete |
| JWT token generation and validation | ✅ Complete |
| Spring Security 6 filter chain | ✅ Complete |
| Expense CRUD REST API | 🔄 In Progress |
| Category management | 🔄 In Progress |
| React + Vite project setup | ✅ Complete |
| Login and Register UI | 🔄 In Progress |
| Dashboard with charts | 🔜 Upcoming |
| Income vs Expense tracking | 🔜 Upcoming |
| Responsive UI (mobile-friendly) | 🔜 Upcoming |
| Deployment (Railway + Vercel) | 🔜 Upcoming |

---

## 🔗 Related Repositories

| Repo | Description |
|------|-------------|
| [java-mini-projects](https://github.com/Aartigore14/java-mini-projects) | Core Java projects — OOP, Collections, JDBC |
| [spring-boot-practice](https://github.com/Aartigore14/spring-boot-practice) | Spring Boot learning — REST APIs, JPA, Security |
| [smart-parking-system](https://github.com/Aartigore14/smart-parking-system) | Frontend project — HTML, CSS, JavaScript |

---

## 👩‍💻 Author

**Aarti Gore**
- 🎓 B.E. E&TC Student — SPPU, Pune (Batch 2027)
- 💼 [LinkedIn](https://linkedin.com/in/aarti-gore-07b2202aa)
- 🐙 [GitHub](https://github.com/Aartigore14)
- 💻 [LeetCode](https://leetcode.com/aartigore)
- 📧 aartigore2005@gmail.com

---

<p align="center">
  <i>Built with ☕ Java and ⚛️ React — one feature at a time.</i><br/>
  ⭐ Star this repo if you find it useful!
</p>
