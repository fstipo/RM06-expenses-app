import React from 'react';
import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';
import './ExpenseDate.css';

const ExpensesItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>
  );
};

export default ExpensesItem;
