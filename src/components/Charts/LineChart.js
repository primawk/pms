/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData, style }) {
  const options = {
    maintainAspectRatio: style ? false : true,
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
  return (
    <>
      {style ? (
        <div style={style || {}}>
          <Line data={chartData} options={options} />
        </div>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </>
  );
}

export default LineChart;
