import { Plugin } from "chart.js";

export const verticalHoverLine: Plugin<"line"> = {
  id: "verticalHoverLine",
  beforeDatasetDraw: (chart, _, options) => {
    const {
      ctx,
      chartArea: { top, bottom },
    } = chart;

    ctx.save();

    chart.getDatasetMeta(0).data.forEach((dataPoint) => {
      if (dataPoint.active) {
        ctx.beginPath();
        ctx.strokeStyle = options.borderColor || "rgba(153, 162, 178, 1)";
        ctx.moveTo(dataPoint.x, top);
        ctx.lineTo(dataPoint.x, bottom);
        ctx.stroke();
      }
    });
  },
};
