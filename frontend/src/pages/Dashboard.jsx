import { useEffect, useState } from "react";
import api from "../services/api";
import { getExpenses, deleteExpense, updateExpense } from "../services/expenseService";

function Dashboard() {

    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);
    const [editingExpense, setEditingExpense] = useState(null);

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

    const handleDelete = async(id)=>{
        try{
            await deleteExpense(id);
            const data = await getExpenses();
            setExpenses(data);
        } catch (error){
            console.error("Error deleting expense:",error);
        }
    };

    const handleEdit = (id) =>{
        const expense = expenses.find((expense) => expense.id === id);
        if(expense){
            setEditingExpense({...expense});
        }
    };
    
    const handleUpdate = async (e)=>{
        e.preventDefault();
        try{
            await updateExpense(editingExpense.id, editingExpense);
            setEditingExpense(null);
            await fetchDashboardData();
        } catch (error){
            console.error("Error updating expense", error);
        }
    };

    return (
        <div>
            <h1>Expense Tracker Dashboard</h1>

            <p>Welcome to your dashboard</p>

            <h2>Total Expenses: ₹{total}</h2>

            <h2>Recent Expenses</h2>
            {editingExpense && (
    <form onSubmit={handleUpdate}>

        <h2>Edit Expense</h2>

        <input
            type="date"
            value={editingExpense.date || ""}
            onChange={(e) =>
                setEditingExpense({
                    ...editingExpense,
                    date: e.target.value
                })
            }
        />

        <input
            type="text"
            value={editingExpense.title || ""}
            onChange={(e) =>
                setEditingExpense({
                    ...editingExpense,
                    title: e.target.value
                })
            }
            placeholder="Title"
        />

        <input
            type="text"
            value={editingExpense.description || ""}
            onChange={(e) =>
                setEditingExpense({
                    ...editingExpense,
                    description: e.target.value
                })
            }
            placeholder="Description"
        />

        <input
            type="number"
            value={editingExpense.amount || ""}
            onChange={(e) =>
                setEditingExpense({
                    ...editingExpense,
                    amount: Number(e.target.value)
                })
            }
            placeholder="Amount"
        />

        <input
            type="text"
            value={editingExpense.category || ""}
            onChange={(e) =>
                setEditingExpense({
                    ...editingExpense,
                    category: e.target.value
                })
            }
            placeholder="Category"
        />

        <button type="submit">
            Update Expense
        </button>

        <button
            type="button"
            onClick={() => setEditingExpense(null)}
        >
            Cancel
        </button>

    </form>
)}
            {expenses.map((expense) => (
                <div key={expense.id}>
                    <span>
                        {expense.title} - ₹{expense.amount}
                    </span>
                    <button onClick={()=> handleEdit(expense.id)}> Edit </button>
                    <button onClick={()=> handleDelete(expense.id)}> Delete </button>

                </div>
            ))}
        </div>
    );
}

export default Dashboard;