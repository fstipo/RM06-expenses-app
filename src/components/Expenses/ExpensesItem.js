import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css';
import './ExpenseDate.css';

const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title)



  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </Card>
  );
};

export default ExpensesItem;
