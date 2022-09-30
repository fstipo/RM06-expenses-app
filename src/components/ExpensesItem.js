import React from 'react';
import './ExpensesItem.css';

const ExpensesItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2022</div>
      <h2 className="expense-item__description">Car Insurance</h2>
      <div className="expense-item__price">$224,78</div>
    </div>
  );
};

export default ExpensesItem;
