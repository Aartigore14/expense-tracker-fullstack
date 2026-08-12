import { useEffect, useState } from "react";
import api from "../services/api";
import { getExpenses, deleteExpense } from "../services/expenseService";

function Dashboard() {

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

    const handleDelete = async(id)=>{
        try{
            await deleteExpense(id);
            const data = await getExpenses();
            setExpenses(data);
        } catch (error){
            console.error("Error deleting expense:",error);
        }
    };

    return (
        <div>
            <h1>Expense Tracker Dashboard</h1>

            <p>Welcome to your dashboard</p>

            <h2>Total Expenses: ₹{total}</h2>

            <h2>Recent Expenses</h2>

            {expenses.map((expense) => (
                <div key={expense.id}>
                    <span>
                        {expense.title} - ₹{expense.amount}
                    </span>
                    <button onClick={()=> handleDelete(expense.id)}> Delete </button>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;