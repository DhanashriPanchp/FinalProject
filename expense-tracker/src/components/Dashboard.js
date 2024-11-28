import React, { useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

const initialExpenses = [
  {
    id: "1",
    title: "Groceries",
    amount: 50.0,
    category: "Food",
    date: "2024-11-01",
  },
  {
    id: "2",
    title: "Taxi",
    amount: 20.0,
    category: "Transport",
    date: "2024-11-02",
  },
];

const Dashboard = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  // Add a new expense to the list
  const handleAddExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(), // Unique ID for the expense
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <h2>Expense Dashboard</h2>

      {/* Add Expense Form */}
      <AddExpense onAddExpense={handleAddExpense} />

      {/* Expense List */}
      {expenses.length > 0 ? (
        <ExpenseList expenses={expenses} />
      ) : (
        <p>No expenses added yet!</p>
      )}
    </div>
  );
};

export default Dashboard;
