import { ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutCenterLabel } from "./plugins/doughnutCenterLabel";

const data: ChartData<"doughnut"> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(158, 164, 255, 1)",
        "rgba(107, 233, 208, 1)",
        "rgba(248, 197, 90, 1)",
        "rgba(251, 162, 180, 1)",
        "rgba(176, 190, 230, 1) ",
      ],
      hoverBackgroundColor: [
        "rgba(75, 86, 243, 1)",
        "rgba(47, 183, 158, 1)",
        "rgba(239, 140, 44, 1)",
        "rgba(241, 57, 105, 1)",
        "rgba(118, 133, 179, 1)",
      ],
      borderWidth: 6,
      borderRadius: 12,
      hoverBorderColor: "rgba(0, 0, 0, 0)",
    },
  ],
};

const DonutChart = () => {
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "75%",
        plugins: {
          datalabels: {
            display: false,
          },
          tooltip: {
            position: "average",
            displayColors: false,
            xAlign: "center",
            yAlign: "bottom",
            backgroundColor: "#1E2334",
            titleAlign: "center",
            bodyAlign: "center",
            callbacks: {
              title: function (context) {
                return context[0].label;
              },
              label: function (context) {
                return (
                  String(context.dataset.data[context.dataIndex]) + " hehehe"
                );
              },
            },
          },
          //   legend: { reverse: true },
        },
      }}
      plugins={[doughnutCenterLabel]}
    />
  );
};

export default DonutChart;
