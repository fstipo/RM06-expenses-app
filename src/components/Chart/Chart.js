import React from 'react'
import "../NewExpense/NewExpense.css"
import "./Chart.css"
import ChartBar from './ChartBar'

const Chart = (props) => {
    const sumValues = props.dataPoints.map(el => +el.value).reduce((prev, cur) => prev + cur);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} label={dataPoint.label} totalValue={sumValues} value={dataPoint.value} />)}
        </div>
    )
}

export default Chart
