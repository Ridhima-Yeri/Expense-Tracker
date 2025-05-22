import React from 'react';

function ExpenseItem({ expense }) {
  return (
    <li className="expense-item">
      <strong>{expense.description}</strong> - ₹{expense.amount} ({expense.category})
    </li>
  );
}

export default ExpenseItem;
