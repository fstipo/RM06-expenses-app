import React from 'react'
import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {
    const selectedYearHandler = (e) => props.onSelectedYear(e.target.value);
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label className='expense-filter__control--label' htmlFor='years'>Filter by year</label>
                <select className='expense-filter__control--options' id="years" onChange={selectedYearHandler} value={props.selected}>
                    <option value="2022" >2022</option>
                    <option value="2021" >2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div >
    )
}

export default ExpenseFilter