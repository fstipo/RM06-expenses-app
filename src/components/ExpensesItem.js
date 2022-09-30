import React from 'react';
import Moment from 'moment';
import './ExpensesItem.css';

const ExpensesItem = () => {
  const expenseDate = new Date(2022, 10, 30).toISOString();
  const expenseTitle = 'New Desk';
  const expensePrice = 514.24;

  return (
    <div className="expense-item">
      <div>{Moment(expenseDate).format('MMMM Do YYYY')}</div>
      <h2 className="expense-item__description">{expenseTitle}</h2>
      <div className="expense-item__price">${expensePrice}</div>
    </div>
  );
};

export default ExpensesItem;
