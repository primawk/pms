/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData, style, dateInterval }) {
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
          unit:
            dateInterval > 150 && dateInterval < 365
              ? 'week'
              : dateInterval > 365 && dateInterval < 1825
              ? 'month'
              : dateInterval > 1825
              ? 'year'
              : 'day'
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
