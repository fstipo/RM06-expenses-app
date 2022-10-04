import React from 'react';
import Moment from 'moment';
import './ExpensesItem.css';

const ExpensesItem = (props) => {
  const expenseDate = props.date.toISOString();

  return (
    <div className="expense-item">
      {/* <div>{Moment(expenseDate).format('MMMM Do YYYY')}</div> */}
      <div>{Moment(expenseDate).format('MMMM Do YYYY')}</div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>
  );
};

export default ExpensesItem;
