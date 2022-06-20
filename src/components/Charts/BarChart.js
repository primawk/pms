/* eslint-disable no-unused-vars */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: true
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 32
            }
          }
        }
      }
    }
  };
  return <Bar data={chartData} options={options} />;
}

export default BarChart;
