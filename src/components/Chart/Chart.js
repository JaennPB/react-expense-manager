import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

const Chart = (props) => {
  const dataValues = props.chartData.map((el) => el.value);
  const maximumValue = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.chartData.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={maximumValue}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
