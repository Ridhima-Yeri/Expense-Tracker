import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addExpense({ description, amount, category });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-field">
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>
      <div className="form-field">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="form-field">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Health">Health</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
