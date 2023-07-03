'use client';
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
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const FilledLineChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
      const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:['asdasdsad', 'sdsdsd', 'sdadsasd'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [24, 24, 24, 24],
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
      }, []);
    

  return (
  <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
  <Line data={chartData} options={chartOptions} />
</div>)
}

export default FilledLineChart