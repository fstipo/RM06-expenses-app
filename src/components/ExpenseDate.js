import React from 'react';
import Moment from 'moment';


const ExpenseDate = (props) => {
    const expenseDate = props.date.toISOString();
    const month = Moment(expenseDate).format('MMM');
    const day = Moment(expenseDate).format('DD');
    const year = Moment(expenseDate).format('Y');
    return (
        <div className="expense-date">
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate