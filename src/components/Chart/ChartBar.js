import React from 'react'
import "./ChartBar.css"

const ChartBar = (props) => {
    let barHeightFill = "0"

    if (props.value > 0) {
        barHeightFill = `${Math.round((props.value / props.totalValue) * 100)}%`
    }

    return (
        <>
            <div className='chart-bar'>
                <div className='chart-bar__label'>{barHeightFill}</div>
                <div className='chart-bar__inner'>
                    <div className='chart-bar__fill' style={{ height: barHeightFill }}></div>
                </div>
                <div className='chart-bar__label'>{props.label}</div>
            </div>
        </>
    )
}

export default ChartBar



