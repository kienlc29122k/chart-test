import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { BarChart } from "./BarChart";
import { MultipleLinesChart } from "./MultipleLinesChart";
import { HorizontalBarChart } from "./HorizontalBarChart";
import DonutChart from "./DonutChart";
import { LineChart } from "./LineChart";

ChartJS.register(ArcElement, Legend);

export function App() {
  return (
    <>
      <div style={{ width: "500px", height: "500px", margin: "auto" }}>
        <DonutChart />
      </div>
      <div style={{ maxWidth: "1000px", height: "500px", margin: "auto" }}>
        <BarChart />
      </div>
      <div style={{ maxWidth: "1000px", height: "500px", margin: "auto" }}>
        <MultipleLinesChart />
      </div>
      <div style={{ maxWidth: "1000px", height: "500px", margin: "auto" }}>
        <HorizontalBarChart />
      </div>
      <div style={{ maxWidth: "1000px", height: "500px", margin: "auto" }}>
        <LineChart />
      </div>
    </>
  );
}

export default App;
