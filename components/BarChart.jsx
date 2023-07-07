import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [12130, 22349, 17550, 27892, 24333, 15632, 23241], // Example data values
          backgroundColor: "rgba(54, 162, 235, 0.4)", // Example background color
          borderColor: "rgba(54, 162, 235, 0.2)", // Example border color
        },
      ],
    });
    setChartOptions({
      plugins: {
        Legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
