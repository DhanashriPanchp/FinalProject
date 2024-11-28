import React, { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({ title: "", amount: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!expense.title || !expense.amount || !expense.category) {
      alert("Please fill out all fields!");
      return;
    }

    // Call parent handler
    onAddExpense({ ...expense, amount: parseFloat(expense.amount) });

    // Reset form fields
    setExpense({ title: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title Input */}
      <input
        type="text"
        placeholder="Expense Title"
        value={expense.title}
        onChange={(e) => setExpense({ ...expense, title: e.target.value })}
      />

      {/* Amount Input */}
      <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />

      {/* Category Select */}
      <select
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Other">Other</option>
      </select>

      {/* Submit Button */}
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
