import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const MaxExpense = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={MaxExpense}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
