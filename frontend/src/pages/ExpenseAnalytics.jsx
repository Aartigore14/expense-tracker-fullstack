import { useEffect, useState } from "react";
import { getCategorySummary } from "../services/expenseService";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function ExpenseAnalytics() {

    const [expenses, setExpenses] = useState([]);

    // Colors for different categories
    const COLORS = [
        "#2563eb",
        "#10b981",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6",
        "#06b6d4",
        "#ec4899"
    ];

    useEffect(() => {

        const fetchCategorySummary = async () => {

            try {

                const data = await getCategorySummary();

                setExpenses(data);

                console.log("Category summary:", data);

            } catch (error) {

                console.error(
                    "Error fetching category summary:",
                    error
                );

            }
        };

        fetchCategorySummary();

    }, []);


    // Calculate total expenses
    const totalExpense = expenses.reduce(
        (sum, expense) =>
            sum + Number(expense.total),
        0
    );


    // Prepare data for Pie Chart
    const chartData = expenses.map((expense) => ({
        name: expense.category,
        value: Number(expense.total)
    }));


    return (

        <div className="analytics">

            {/* =========================
                HEADER
            ========================= */}

            <div className="analytics-header">

                <div className="analytics-title">

                    <h1>
                        Expense Analytics 📊
                    </h1>

                    <p>
                        Understand where your money goes
                    </p>

                </div>

            </div>


            {/* =========================
                SUMMARY CARDS
            ========================= */}

            <div className="analytics-summary">


                {/* Total Expenses */}

                <div className="analytics-summary-card">

                    <div className="summary-icon">
                        💰
                    </div>

                    <div>

                        <p>
                            Total Expenses
                        </p>

                        <h2>
                            ₹{totalExpense.toFixed(2)}
                        </h2>

                    </div>

                </div>


                {/* Total Categories */}

                <div className="analytics-summary-card">

                    <div className="summary-icon">
                        📂
                    </div>

                    <div>

                        <p>
                            Total Categories
                        </p>

                        <h2>
                            {expenses.length}
                        </h2>

                    </div>

                </div>

            </div>


            {/* =========================
                EMPTY STATE
            ========================= */}

            {expenses.length === 0 ? (

                <div className="analytics-empty">

                    <div className="empty-icon">
                        📊
                    </div>

                    <h2>
                        No expenses available
                    </h2>

                    <p>
                        Add some expenses to see your analytics.
                    </p>

                </div>

            ) : (

                <>


                    {/* =========================
                        CHARTS
                    ========================= */}

                    <div className="analytics-charts">


                        {/* =========================
                            PIE / DONUT CHART
                        ========================= */}

                        <div className="chart-card">

                            <div className="chart-header">

                                <h2>
                                    Expenses by Category
                                </h2>

                                <span>
                                    Distribution
                                </span>

                            </div>


                            <div className="chart-container">

                                <ResponsiveContainer
                                    width="100%"
                                    height={330}
                                >

                                    <PieChart>

                                        <Pie
                                            data={chartData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="45%"
                                            innerRadius={70}
                                            outerRadius={110}
                                            paddingAngle={3}

                                            label={({
                                                name,
                                                percent
                                            }) =>
                                                `${name} ${(
                                                    percent * 100
                                                ).toFixed(0)}%`
                                            }
                                        >

                                            {chartData.map(
                                                (entry, index) => (

                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={
                                                            COLORS[
                                                                index %
                                                                COLORS.length
                                                            ]
                                                        }
                                                    />

                                                )
                                            )}

                                        </Pie>


                                        <Tooltip
                                            formatter={(value) => [
                                                `₹${Number(
                                                    value
                                                ).toFixed(2)}`,
                                                "Expense"
                                            ]}
                                        />


                                        <Legend />

                                    </PieChart>

                                </ResponsiveContainer>

                            </div>

                        </div>


                        {/* =========================
                            BAR CHART
                        ========================= */}

                        <div className="chart-card">

                            <div className="chart-header">

                                <h2>
                                    Category Comparison
                                </h2>

                                <span>
                                    Spending
                                </span>

                            </div>


                            <div className="chart-container">

                                <ResponsiveContainer
                                    width="100%"
                                    height={330}
                                >

                                    <BarChart
                                        data={expenses}

                                        margin={{
                                            top: 20,
                                            right: 20,
                                            left: 10,
                                            bottom: 10
                                        }}
                                    >

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                        />


                                        <XAxis
                                            dataKey="category"
                                            axisLine={false}
                                            tickLine={false}
                                        />


                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                        />


                                        <Tooltip
                                            formatter={(value) => [
                                                `₹${Number(
                                                    value
                                                ).toFixed(2)}`,
                                                "Total Expense"
                                            ]}
                                        />


                                        <Bar
                                            dataKey="total"
                                            name="Total Expense"
                                            fill="#2563eb"
                                            radius={[
                                                8,
                                                8,
                                                0,
                                                0
                                            ]}
                                            barSize={45}
                                        />

                                    </BarChart>

                                </ResponsiveContainer>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        CATEGORY-WISE EXPENSES
                    ========================= */}

                    <div className="category-list">

                        <div className="category-list-header">

                            <div>

                                <h2>
                                    Category-wise Expenses
                                </h2>

                                <p>
                                    Breakdown of your spending
                                </p>

                            </div>

                        </div>


                        <div className="category-items">

                            {expenses.map((expense) => (

                                <div
                                    className="category-item"
                                    key={expense.category}
                                >

                                    <div className="category-name">

                                        <span className="category-dot">
                                            ●
                                        </span>

                                        <span>
                                            {expense.category}
                                        </span>

                                    </div>


                                    <strong>
                                        ₹{Number(
                                            expense.total
                                        ).toFixed(2)}
                                    </strong>

                                </div>

                            ))}

                        </div>

                    </div>

                </>

            )}

        </div>

    );
}

export default ExpenseAnalytics;