import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
