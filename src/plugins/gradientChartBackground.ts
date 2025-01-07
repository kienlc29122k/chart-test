import { ScriptableContext } from "chart.js";

export const gradientChartBackground = (
  context: ScriptableContext<"line">,
  bgColor: string[] = ["rgba(254, 168, 47, 0.2)", "rgba(254, 168, 47, 0)"]
) => {
  if (!context.chart.chartArea) return;

  const {
    ctx,
    chartArea: { top, bottom },
  } = context.chart;
  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
  const colorTranches = 1 / (bgColor.length - 1);

  for (let i = 0; i < bgColor.length; i++) {
    gradientBg.addColorStop(i * colorTranches, bgColor[i]);
  }

  return gradientBg;
};
