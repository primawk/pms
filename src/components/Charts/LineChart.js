/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({ chartData }) {
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
  return <Line data={chartData} options={options} />;
}

export default LineChart;
