import StatisticHeading from "../components/StatisticHeading";
import StatisticItem from "../components/StatisticItem";
import Title from "../components/Title";

function Statistics() {
  return (
    <>
      <div>
        <StatisticHeading title="Всего" />
        <StatisticItem title="Тренировок" count="200"/>
      </div>
      <h3>Coming soon...</h3>
    </>
  );
}

export default Statistics;
