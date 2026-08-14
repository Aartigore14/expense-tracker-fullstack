import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../services/expenseService";

function AddExpense() {

    const navigate = useNavigate();

    const [expense, setExpense] = useState({
        date: new Date().toISOString().split("T")[0],
        description: "",
        title: "",
        amount: "",
        category: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const expenseData = {
                date: expense.date,
                description: expense.description,
                title: expense.title,
                amount: Number(expense.amount),
                category: expense.category
            };

            await addExpense(expenseData);

            setMessage("Expense added successfully!");

            setTimeout(() => {
                navigate("/dashboard");
            }, 800);

        } catch (error) {
            console.error("Error adding expense:", error);
            setMessage("Failed to add expense. Please try again.");
        }
    };

    return (
    <div className="form-page">

        <div className="form-card">

            <h1>Add Expense 💰</h1>

            <p className="form-subtitle">
                Record a new expense
            </p>

            <form className="expense-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="e.g. Lunch"
                        value={expense.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="e.g. Lunch with friends"
                        value={expense.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="e.g. 250"
                        value={expense.amount}
                        onChange={handleChange}
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="e.g. Food"
                        value={expense.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="add-expense-btn" type="submit">
                    Add Expense
                </button>

                <button
                    className="cancel-btn"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                >
                    Cancel
                </button>

            </form>

            {message && (
                <p className="form-message">
                    {message}
                </p>
            )}

        </div>

    </div>
);
}

export default AddExpense;