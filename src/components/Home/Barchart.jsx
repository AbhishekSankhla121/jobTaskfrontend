import React from "react";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

chartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ timestamp, dataSet, text, labeltext }) {
  // Sample data

  const data = {
    labels: timestamp,
    datasets: [
      {
        label: labeltext,
        data: dataSet,
        backgroundColor: "rgb(255, 153, 38)",
        borderColor: "rgb(255, 153, 38)",
        borderWidth: 1,
      },
    ],
  };

  // Configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: `${text}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "90%", height: "500px", margin: "10px 0 0 0" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
