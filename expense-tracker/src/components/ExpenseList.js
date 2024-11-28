import React, { useState } from 'react';



const ExpenseList = ({ expenses }) => {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()) &&
    (!filterCategory || expense.category === filterCategory)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Expenses"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Other">Other</option>
      </select>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
