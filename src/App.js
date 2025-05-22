import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import './App.css'; // Importing the CSS file for better styling

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filterExpenses = (category) => {
    setCategoryFilter(category);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const filteredExpenses = categoryFilter === 'All' ? expenses : expenses.filter((expense) => expense.category === categoryFilter);

  return (
    <div className="App">
      <div className="container">
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <div className="filter-buttons">
          <button onClick={() => filterExpenses('All')}>All</button>
          <button onClick={() => filterExpenses('Food')}>Food</button>
          <button onClick={() => filterExpenses('Transport')}>Transport</button>
          <button onClick={() => filterExpenses('Entertainment')}>Entertainment</button>
          <button onClick={()=>filterExpenses('Miscellaneous')}>Miscellaneous</button>
          <button onClick={()=>filterExpenses('Health')}>Health</button>
        </div>
        <h2>Total Expenses: ₹{totalExpenses.toFixed(2)}</h2>
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;
