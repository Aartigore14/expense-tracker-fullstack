import { useState } from "react";

function AddExpense() {

    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: ""
    });

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

            const response = await fetch("https://expense-tracker-fullstack-production-8ccd.up.railway.app/api/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...expense,
                    amount: Number(expense.amount)
                })
            });

            if (!response.ok) {
                throw new Error("Failed to add expense");
            }

            alert("Expense added successfully!");

            setExpense({
                title: "",
                amount: "",
                category: "",
                date: "",
                description: ""
            });

        } catch (error) {
            console.error(error);
            alert("Failed to add expense");
        }
    };

    return (
        <div>
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Expense title"
                    value={expense.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={expense.amount}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={expense.category}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="date"
                    value={expense.date}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={expense.description}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Expense
                </button>

            </form>
        </div>
    );
}

export default AddExpense;