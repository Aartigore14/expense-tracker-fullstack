import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import ExpenseAnalytics from "./pages/ExpenseAnalytics";
import EditExpense from "./pages/EditExpense";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={ <Login/> }
        />

        {/* Register */}
        <Route path="/register"
        element={<Register/>} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        {/*Protected Add Expense*/}
        <Route 
        path="/add-expense"
         element={
            <ProtectedRoute>
              <AddExpense/>
            </ProtectedRoute>
          }
        />

         {/*Protected Edit Expense*/}
        <Route 
        path="/edit-expense/:id"
        element={
            <ProtectedRoute>
              <EditExpense/>
            </ProtectedRoute>
          }
        />

        {/*Prtected Analytics*/}
        <Route 
        path="/analytics"
        element={
            <ProtectedRoute>
              <ExpenseAnalytics/>
            </ProtectedRoute>
          }
        />

      

        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;