# 💰 Expense Tracker — Full Stack Java Application

A full-stack personal expense management application built with **Spring Boot** (backend) and **React** (frontend). Users can securely register, log in, and manage their own expenses with real-time analytics — built as part of a Java Full Stack learning journey.

---

## 📖 About the Project

Expense Tracker is a personal finance web app where each user can create an account, log in, and track their day-to-day expenses. Every expense is scoped to the authenticated user via JWT-based security, so users only ever see and manage their own data. The app includes a dashboard for quick expense management and an analytics page with category-wise breakdowns and charts.

This project was built to demonstrate practical, hands-on usage of **Spring Boot, Spring Security, JWT authentication, REST APIs, React, and MySQL** in a real, working full-stack application — not a tutorial clone.

---

## ✨ Key Features

### 🔐 Authentication
- User registration and login
- Password hashing with BCrypt
- Stateless JWT-based authentication
- Spring Security filter chain protecting all non-auth endpoints
- Logout (client-side token removal)

### 💵 Expense Management
- Add, view, edit, and delete expenses
- Each expense includes: **title, amount, category, date, description**
- All expense data is scoped per authenticated user (users can only access their own expenses)

### 📊 Dashboard
- Total expense summary
- Recent expenses list
- Quick actions to add an expense or jump to analytics
- Inline edit/delete on each expense

### 📈 Analytics
- Total expenses and total category count
- Category-wise expense distribution (donut/pie chart)
- Category comparison (bar chart)
- Percentage breakdown per category, shown directly on the pie chart
- Category-wise list view with totals

### 🎨 UI/UX
- Responsive, card-based layout
- Dedicated styling for login/register, dashboard, add/edit forms, and analytics
- Consistent design system (buttons, spacing, colors, typography)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, React Router 7, Axios, Recharts, CSS |
| **Backend** | Java 17, Spring Boot 3.5, Spring Security, JWT (jjwt), REST APIs, Maven |
| **Database** | MySQL |
| **Build Tools** | Vite (frontend), Maven (backend) |

---

## 🔄 Application Workflow

```
Register → Login → JWT Issued → Dashboard
                                    ├── Add Expense
                                    ├── View / Edit / Delete Expenses
                                    ├── Analytics (category charts & totals)
                                    └── Logout
```

---

## 🏗️ Architecture Overview

```
┌─────────────────┐        REST API (JWT Bearer)        ┌──────────────────┐
│  React Frontend │  ───────────────────────────────▶   │  Spring Boot API │
│  (Vite, :5173)  │  ◀───────────────────────────────    │     (:8080)      │
└─────────────────┘                                       └────────┬─────────┘
                                                                     │
                                                              Spring Data JPA
                                                                     │
                                                              ┌──────▼──────┐
                                                              │    MySQL    │
                                                              └─────────────┘
```

The backend follows a layered architecture: **Controller → Service → Repository → Entity**, with a JWT authentication filter intercepting requests before they reach protected endpoints.

---

## 🖥️ Frontend Structure

```
frontend/src/
├── pages/
│   ├── Login.jsx              # Login form
│   ├── Register.jsx           # Registration form
│   ├── Dashboard.jsx          # Expense list, totals, quick actions
│   ├── AddExpense.jsx         # Add expense form
│   ├── EditExpense.jsx        # Edit expense form
│   └── ExpenseAnalytics.jsx   # Charts and category breakdown
├── context/
│   └── AuthContext.jsx        # Auth state (JWT token) via React Context
├── services/
│   ├── api.js                 # Axios instance, attaches JWT to requests
│   ├── authService.js         # register/login API calls
│   └── expenseService.js      # Expense CRUD + summary API calls
├── ProtectedRoute.jsx          # Route guard for authenticated pages
└── App.jsx                     # Route definitions
```

**Routing:**

| Path | Page | Protected |
|---|---|---|
| `/login` | Login | No |
| `/register` | Register | No |
| `/dashboard` | Dashboard | Yes |
| `/add-expense` | Add Expense | Yes |
| `/edit-expense/:id` | Edit Expense | Yes |
| `/analytics` | Expense Analytics | Yes |

---

## ⚙️ Backend Structure

```
backend/expense-tracker/src/main/java/com/aarti/expensetracker/
├── controller/
│   ├── AuthController.java      # /api/auth — register, login
│   ├── ExpenseController.java   # /api/expenses — CRUD + summaries
│   └── HomeController.java      # / — health check
├── service/
│   ├── AuthService.java
│   ├── ExpenseService.java
│   └── CustomUserDetailsService.java
├── repository/
│   ├── UserRepository.java
│   └── ExpenseRepository.java
├── entity/
│   ├── User.java
│   └── Expense.java
├── dto/
│   ├── LoginRequest.java / RegisterRequest.java
│   └── CategorySummaryDTO.java / MonthlySummaryDTO.java / ExpenseSummaryDTO.java
├── config/
│   ├── SecurityConfig.java
│   └── JwtAuthenticationFilter.java
└── util/
    └── JwtUtil.java
```

---

## 🔒 Authentication & Security

- **Registration** (`POST /api/auth/register`) hashes the password with `BCryptPasswordEncoder` and stores a new `User`.
- **Login** (`POST /api/auth/login`) authenticates credentials via Spring Security's `AuthenticationManager` and returns a signed JWT.
- The JWT is signed using HMAC (`jjwt` library) and includes the user's email as the subject, with a 24-hour expiration.
- A custom `JwtAuthenticationFilter` runs on every request (except `/api/auth/**`), extracts the token from the `Authorization: Bearer <token>` header, validates it, and sets the authenticated user in the Spring Security context.
- All `/api/expenses/**` endpoints require a valid JWT — there is no role-based access control; every authenticated user has the same permissions over their own data.
- Expenses are always scoped to the logged-in user's email at the service/repository layer, so one user cannot view or modify another user's expenses.
- CORS is configured to allow requests from `http://localhost:5173` (the Vite dev server).

---

## 📊 Analytics

The analytics page (`/analytics`) is powered by category-level aggregation from the backend:

- **Pie/Donut chart** — expense distribution by category, with percentage labels
- **Bar chart** — total spend per category, for side-by-side comparison
- **Summary cards** — total expenses and number of distinct categories
- **Category list** — each category with its running total

> Note: the backend also exposes a monthly summary endpoint (`/api/expenses/summary/monthly`), but the current frontend analytics page does not yet render it — it's available for future use.

---

## 🗄️ Database

**MySQL**, managed via Spring Data JPA (`ddl-auto=update`).

**`users` table**
| Column | Type | Notes |
|---|---|---|
| id | BIGINT | Primary key, auto-generated |
| name | VARCHAR | Not blank |
| email | VARCHAR | Unique, not null |
| password | VARCHAR | BCrypt-hashed, never returned in API responses |

**`expenses` table**
| Column | Type | Notes |
|---|---|---|
| id | BIGINT | Primary key, auto-generated |
| title | VARCHAR | Required |
| amount | DOUBLE | Required, must be positive |
| category | VARCHAR | Required |
| date | DATE | Required |
| description | VARCHAR | Optional |
| user_id | BIGINT (FK) | Many-to-one relationship to `users` |

---

## 🔌 API Endpoints

### Auth — `/api/auth` (public)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate and receive a JWT |

### Expenses — `/api/expenses` (JWT required)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/expenses` | Get all expenses for the logged-in user |
| GET | `/api/expenses/{id}` | Get a single expense by ID |
| POST | `/api/expenses` | Create a new expense |
| PUT | `/api/expenses/{id}` | Update an existing expense |
| DELETE | `/api/expenses/{id}` | Delete an expense |
| GET | `/api/expenses/category/{category}` | Get expenses filtered by category |
| GET | `/api/expenses/total` | Get total expense amount |
| GET | `/api/expenses/summary` | Get total expenses + transaction count |
| GET | `/api/expenses/summary/category` | Get category-wise totals |
| GET | `/api/expenses/summary/monthly` | Get month-wise totals *(backend-ready, not yet used in UI)* |

All `/api/expenses/**` requests must include:
```
Authorization: Bearer <jwt_token>
```

---

## 🖼️ Screenshots

> Add your own screenshots to a `screenshots/` folder and update the paths below.

![Login Page](screenshots/login.png)
![Register Page](screenshots/register.png)
![Dashboard](screenshots/dashboard.png)
![Add Expense](screenshots/add-expense.png)
![Analytics](screenshots/analytics.png)

---

## 🚀 Installation & Setup

### Prerequisites
- Java 17
- Node.js and npm
- MySQL Server
- Maven (or use the included `mvnw` wrapper)

### 1. MySQL Database Setup
```sql
CREATE DATABASE expense_tracker;
```

### 2. Backend Setup
```bash
cd backend/expense-tracker

# Configure src/main/resources/application.properties (see below)

./mvnw spring-boot:run
```
The backend runs on `http://localhost:8080`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend runs on `http://localhost:5173`.

---

## ⚙️ Environment & Configuration

**Backend** — `backend/expense-tracker/src/main/resources/application.properties`
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=<your-mysql-username>
spring.datasource.password=<your-mysql-password>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> ⚠️ Do not commit real database credentials. Use environment variables or a local `application-local.properties` (git-ignored) for real secrets.

**JWT signing key** is currently defined directly in `util/JwtUtil.java`. For any deployment beyond local development, move this to an environment variable / externalized config rather than hardcoding it in source.

**Frontend API base URL** — `frontend/src/services/api.js`
```js
baseURL: "http://localhost:8080/api"
```
Update this if your backend runs on a different host/port.

**CORS** — configured in `SecurityConfig.java` to allow only `http://localhost:5173`. Update the allowed origin if you deploy the frontend elsewhere.

---

## 🔮 Future Enhancements

- [ ] Income vs. expense tracking
- [ ] Role-based access control (e.g., Admin/User)
- [ ] Date-range and monthly analytics in the UI (backend endpoint already exists)
- [ ] Budget management and limits per category
- [ ] Spending alerts/notifications

---

## 🎯 Learning Objective

This project was built as part of my Java Full Stack learning journey to practice and demonstrate real-world usage of **Spring Boot, Spring Security, JWT authentication, REST API design, React, and MySQL** together in a single, working application.

