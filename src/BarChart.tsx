import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
import { segmentHighlighter } from "./plugins/segmentHighlighter";

const labels = ["View Product", "Add to cart", "Reach Checkout", "Total Order"];

// Tooltip.positioners.average = function (elements, eventPosition) {
//   const {
//     chartArea: { top },
//     scales: { x },
//   } = this.chart;
//   const tooltipHeight = this.height;

//   console.log("Tooltip height:", tooltipHeight);
//   console.log(elements);

//   return {
//     x: x.getPixelForValue(x.getValueForPixel(eventPosition.x) || 0) || 0,
//     y: top - tooltipHeight,
//     xAlign: "center",
//     yAlign: "bottom",
//   };
// };

export function BarChart() {
  return (
    <div>
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginLeft: "40px",
        }}
      >
        <div style={{ textAlign: "center" }} className="">
          100
        </div>
        <div className="" style={{ textAlign: "center" }}>
          100
        </div>
        <div className="" style={{ textAlign: "center" }}>
          100
        </div>
        <div className="" style={{ textAlign: "center" }}>
          100
        </div>
      </div> */}
      <Bar
        id="bar-chart-123"
        options={{
          layout: {
            padding: {
              top: 30,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top" as const,
            },
            title: {
              display: false,
              text: "Chart.js Bar Chart",
            },
            tooltip: {
              enabled: false,
              xAlign: "center",
              yAlign: "bottom",
              backgroundColor: "#1E2334",
              titleAlign: "center",
              bodyAlign: "center",
              callbacks: {
                title: function (context) {
                  return context[0].label;
                },
              },
            },
            datalabels: {
              font: { size: 12, weight: 500 },
              color: "#0D136B",
              anchor: "end",
              align: "top",
            },
          },
          scales: {
            x: {
              border: { dash: [10] },
              ticks: { color: "rgba(112, 122, 143, 1)" },
            },
            y: {
              ticks: {
                maxTicksLimit: 4,
                color: "rgba(112, 122, 143, 1)",
              },
              border: { dash: [10] },
              grid: { display: false },
              type: "linear",
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              barPercentage: 1,
              categoryPercentage: 1,
              label: "Dataset 1",
              // borderRadius: { topRight: 8 },
              data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
              // backgroundColor: "rgba(255, 99, 132, 0.5)",
              backgroundColor: ["#EBEBFF", "#DBDDFF", "#C5C9FF", "#9EA4FF"],
            },
          ],
        }}
        plugins={[segmentHighlighter()]}
      />
    </div>
  );
}
