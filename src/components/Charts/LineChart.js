/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData, style }) {
  const options = {
    maintainAspectRatio: style ? false : true,
    plugins: {
      legend: {
        display: true
      }
    },
    elements: {
      point: {
        radius: 2
      }
    },
    scales: {
      x: {
        type: 'timeseries',
        time: {
          unit: 'day'
        },
        ticks: {
          source: 'auto'
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
