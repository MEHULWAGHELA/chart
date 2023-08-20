import React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const ChartC = () => {
    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'],
        datasets: [
            {
                label: 'sales in 2020',
                data: [5, 6, 4, 2, 7, 8, 5, 2],
                backgroundColor: 'red'
            },
            {
                label: 'sales in 2020',
                data: [5, 6, 4, 1, 7, 8, 5, 2],
                backgroundColor: 'yellow'
            },
        ]
    }
    const option = {
        title: {
            text: "Month chart",
            display: true,
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Sales'
                },
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
    return (
        <div>
            <Bar data={data} options={option} />
        </div >
    )
}

export default ChartC