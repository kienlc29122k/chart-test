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
import { verticalHoverLine } from "./plugins/verticalHoverLine";
import { gradientChartBackground } from "./plugins/gradientChartBackground";

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

export function MultipleLinesChart() {
  return (
    <Line
      plugins={[verticalHoverLine]}
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
              backdropPadding: 10,
            },
          },
          y: {
            border: { dash: [10] },
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
            borderColor: "rgb(255, 99, 132)",
            fill: "origin",
            backgroundColor: (ctx) =>
              gradientChartBackground(ctx, [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0)",
              ]),
            pointRadius: 0,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "rgba(255, 0, 0)",
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: "rgb(255, 255, 255)",
            tension: 0.15,
          },
          {
            label: "Dataset 2",
            data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
            borderColor: "rgba(239, 140, 44, 1)",
            fill: "origin",
            backgroundColor: (ctx) => gradientChartBackground(ctx),
            pointRadius: 0,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "rgba(239, 140, 44, 1)",
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: "rgba(255, 255, 255, 1)",
          },
        ],
      }}
    />
  );
}

// background: linear-gradient(180deg, rgba(118, 133, 179, 0.1) -13.53%, rgba(118, 133, 179, 0) 99.06%);
// background: linear-gradient(180deg, rgba(75, 86, 243, 0.2) -0.4%, rgba(75, 86, 243, 0) 99.17%);
// background: linear-gradient(180deg, rgba(254, 168, 47, 0.2) -13.53%, rgba(254, 168, 47, 0) 99.06%);
