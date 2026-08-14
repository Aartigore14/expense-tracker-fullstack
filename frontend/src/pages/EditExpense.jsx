import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditExpense() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: ""
    });

    useEffect(() => {
        fetchExpense();
    }, []);

    const fetchExpense = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:8080/api/expenses/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch expense");
            }

            const data = await response.json();

            setExpense({
                title: data.title || "",
                amount: data.amount || "",
                category: data.category || "",
                date: data.date || "",
                description: data.description || ""
            });

        } catch (error) {
            console.error(error);
            alert("Unable to load expense");
        }
    };

    const handleChange = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:8080/api/expenses/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        ...expense,
                        amount: Number(expense.amount)
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update expense");
            }

            alert("Expense updated successfully!");

            navigate("/dashboard");

        } catch (error) {
            console.error(error);
            alert("Failed to update expense");
        }
    };

    return (
    <div className="form-page">

        <div className="form-card">

            <h1>Edit Expense ✏️</h1>

            <p className="form-subtitle">
                Update your expense details
            </p>

            <form className="expense-form" onSubmit={handleSubmit}>

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
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="e.g. 250"
                        value={expense.amount}
                        onChange={handleChange}
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
                    <label>Description</label>
                    <textarea
                        name="description"
                        placeholder="e.g. Lunch with friends"
                        value={expense.description}
                        onChange={handleChange}
                    />
                </div>

                <button className="add-expense-btn" type="submit">
                    Update Expense
                </button>

                <button
                    className="cancel-btn"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                >
                    Cancel
                </button>

            </form>

        </div>

    </div>
);
}

export default EditExpense;