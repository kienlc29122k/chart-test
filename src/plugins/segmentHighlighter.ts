import { Plugin } from "chart.js";

export const segmentHighlighter = (): Plugin<"bar"> => {
  let hoverValue: number | undefined = undefined;
  return {
    id: "segmentHighlighter",
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { top, height, width },
        scales: { x },
      } = chart;

      ctx.save();
      const segmentWidth = width / (x.max + 1);

      ctx.fillStyle = "rgba(246, 246, 249, 1)";
      if (hoverValue !== undefined) {
        ctx.fillRect(
          x.getPixelForValue(hoverValue) - segmentWidth / 2,
          top,
          segmentWidth,
          height
        );
      }
    },
    afterEvent(chart, args) {
      const {
        scales: { x },
      } = chart;

      if (args.inChartArea) {
        hoverValue = x.getValueForPixel(args.event.x || 0);
      } else {
        hoverValue = undefined;
      }
      args.changed = true;
    },
  };
};
