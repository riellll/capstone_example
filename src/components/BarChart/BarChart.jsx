'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChart = ({data}) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
const {paraStock, bioStock, aspData, zofData, prodName} = data

  const [chartOptions, setChartOptions] = useState({});

// console.log(paraStock, bioStock);
  useEffect(() => {
    setChartData({
        labels: prodName && [...prodName],
        datasets: [
            {
                label: 'Sales $',
                data: [bioStock, paraStock, aspData.stock, zofData.stock],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4',
              }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [data]);

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}

export default BarChart;