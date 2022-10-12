import React from 'react'

const NewExpenseStart = (props) => {
    return (
        <div className='form expense-start'>
            <button onClick={props.onClick}>Add new Expense</button>
        </div>
    )
}

export default NewExpenseStart