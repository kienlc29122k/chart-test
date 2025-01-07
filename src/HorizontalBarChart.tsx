import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { faker } from "@faker-js/faker";

ChartJS.register(BarElement, ChartDataLabels);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function HorizontalBarChart() {
  return (
    <Bar
      options={{
        indexAxis: "y",
        elements: {
          bar: {
            borderRadius: 4,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right" as const,
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart",
          },
          tooltip: {
            yAlign: "bottom",
            position: "average",
          },
          datalabels: {
            color: "rgba(25, 78, 72, 1)",
            anchor: "end",
            padding: { left: 10, top: 50 },
            align: "end",
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              maxTicksLimit: 4,
              color: "rgba(112, 122, 143, 1)",
            },
          },
          y: {
            grid: { display: false },
            ticks: {
              color: "rgba(112, 122, 143, 1)",
              font: { size: 12 },
            },
            border: {
              display: false,
            },
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            barThickness: 20,
            label: "Dataset 1",
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: "rgba(159, 246, 224, 1)",
            hoverBackgroundColor: "rgba(47, 183, 158, 1)",
          },
        ],
      }}
    />
  );
}
