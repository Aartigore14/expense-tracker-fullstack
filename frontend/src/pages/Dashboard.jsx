import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { getExpenses, deleteExpense } from "../services/expenseService";

function Dashboard() {
    const navigate = useNavigate();
    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const expenseResponse = await api.get("/expenses");
            const totalResponse = await api.get("/expenses/total");

            setExpenses(expenseResponse.data);
            setTotal(totalResponse.data);

        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        }
    };
    const handleDelete = async (id) =>{
        try{
            await deleteExpense(id);
            const data = await getExpenses();
            setExpenses(data);
            await fetchDashboardData();
        } catch(error){
            console.error("Error deleting expense:",error)
        }
    };

    const handleEdit = (id) =>{
        navigate(`/edit-expense/${id}`);
    };

    


    const handleLogout = ()=>{
        localStorage.removeItem("token");
        window.location.href="/login";
    };

    return (
    <div className="dashboard">

        {/* Header */}
        <div className="dashboard-header">
            <div>
                <h1>Expense Tracker</h1>
                <p>Welcome to your dashboard 👋</p>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>

        {/* Total Expense Card */}
        <div className="total-card">
            <p>Total Expenses</p>
            <h2>₹{Number(total).toFixed(2)}</h2>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-actions">

            <button
                className="primary-btn"
                onClick={() => navigate("/add-expense")}
            >
                + Add Expense
            </button>

            <button
                className="secondary-btn"
                onClick={() => navigate("/analytics")}
            >
                📊 View Analytics
            </button>

        </div>

        {/* Recent Expenses */}
        <div className="expenses-section">

            <h2>Recent Expenses</h2>

            {expenses.length === 0 ? (
                <p className="no-expenses">
                    No expenses found.
                </p>
            ) : (
                <div className="expense-list">

                    {expenses.map((expense) => (
                        <div className="expense-card" key={expense.id}>

                            <div className="expense-info">
                                <h3>{expense.title}</h3>

                                <p>
                                    {expense.category}
                                </p>
                            </div>

                            <div className="expense-right">

                                <strong>
                                    ₹{Number(expense.amount).toFixed(2)}
                                </strong>

                                <div className="expense-buttons">

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            handleEdit(expense.id)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            handleDelete(expense.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>

    </div>
);
}

export default Dashboard;