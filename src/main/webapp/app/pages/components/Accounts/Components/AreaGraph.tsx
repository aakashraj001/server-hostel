import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Filler } from 'chart.js';
import { Chart } from 'chart.js/auto';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler, // Register the Filler plugin for area fills
);

interface PropTypes {
  dataarr: number[];
  topcolor: string;
  bottomcolor: string;
  borderColors: string;
  pointerBoderColors: string;
}

const AreaGraph: React.FC<PropTypes> = ({ dataarr, topcolor, bottomcolor, borderColors, pointerBoderColors }) => {
  const chartRef = useRef<Chart<'line'> | null>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, topcolor); // Top color
      gradient.addColorStop(1, bottomcolor); // Bottom color

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [topcolor, bottomcolor]);

  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        data: dataarr,
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderColor: borderColors,
        pointBorderColor: pointerBoderColors,
        fill: true,
        tension: 0.4,
        pointRadius: 0, // Remove the pointers on the graph
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      y: {
        display: false, // Hide the y-axis
      },
    },
  };

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default AreaGraph;
