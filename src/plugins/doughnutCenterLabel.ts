import { Plugin } from "chart.js";

export const doughnutCenterLabel: Plugin<"doughnut"> = {
  id: "doughnutLabelPlugin",
  beforeDraw(chart) {
    const { ctx } = chart;
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    // ctx.font = "30px Inter";
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("hehehe", xCoor, yCoor);
  },
};
