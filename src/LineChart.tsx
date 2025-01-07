import { faker } from "@faker-js/faker";

import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { gradientChartBackground } from "./plugins/gradientChartBackground";
import { datapointLine } from "./plugins/datapointLine";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function LineChart() {
  return (
    <Line
      plugins={[datapointLine]}
      options={{
        elements: {
          line: {
            tension: 0.15,
          },
        },
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: "Chart.js Line Chart - Multi Axis",
          },
          tooltip: {
            mode: "index",
            position: "nearest",
            xAlign: "center",
            yAlign: "bottom",
          },
          datalabels: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "rgba(112, 122, 143, 1)",
              backdropColor: "red",
            },
            border: { color: "#D9DEF2" },
          },
          y: {
            border: { dash: [10], color: "#D9DEF2", display: false },
            ticks: { color: "rgba(112, 122, 143, 1)", maxTicksLimit: 3 },
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
            borderColor: "rgba(239, 140, 44, 1)",
            fill: "origin",
            backgroundColor: (ctx) => gradientChartBackground(ctx),
            pointRadius: 0,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "rgba(255, 0, 0)",
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: "rgb(255, 255, 255)",
            tension: 0.15,
          },
        ],
      }}
    />
  );
}
