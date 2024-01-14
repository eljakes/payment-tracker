import './Graph.css';
// Import the necessary adapters directly from chart.js
import 'chartjs-adapter-date-fns';

import { Chart, LineElement, LinearScale, PointElement } from 'chart.js';
import { addMonths, format } from 'date-fns';

import { Line } from 'react-chartjs-2';
import React from 'react';

Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
const Graph = () => {
  // Setup the data
  const labels = Array.from({ length: 7 }, (_, index) => addMonths(new Date(), index));
  const data = {
    labels: labels.map((date) => format(date, 'MMMM yyyy')),
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  // Define options (including scales)
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  // Combine data and options into the config object
  const config = {
    type: 'line',
    data: data,
    options: options,
  };

  return (
    <div>
      <h2>Line Graph</h2>
      <Line {...config} />
    </div>
  );
};

export default Graph;
