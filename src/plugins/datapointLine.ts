import { Plugin } from "chart.js";

export const datapointLine: Plugin<"line"> = {
  id: "datapointLine",
  beforeDatasetsDraw(chart, _, options) {
    const {
      ctx,
      chartArea: { bottom },
    } = chart;

    ctx.save();

    chart.getDatasetMeta(0).data.forEach((dataPoint, index) => {
      if (dataPoint.active) {
        ctx.beginPath();
        ctx.strokeStyle = options.borderColor || "rgba(153, 162, 178, 1)";
        ctx.moveTo(dataPoint.x, chart.getDatasetMeta(0).data[index].y);
        ctx.lineTo(dataPoint.x, bottom);
        ctx.stroke();
      }
    });
  },
};
