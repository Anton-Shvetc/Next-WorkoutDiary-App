import { useState } from "react";
import WorkoutItem from "./WorkoutItem";
import Workout from "../components/Workout";

function Workouts({ data, title }) {
  const [list, setList] = useState(data);
  const [isCurrentBeingUpdated, setCurrent] = useState(false);

  return (
    <>
      <h5 style={{display: "block"}}>{title}</h5>

      {list.diaryData.map((e, idx) => (
        <>
          <Workout title={e.name} workout={e.data} />
        </>
      ))}
      <button
        onClick={(e) => {
          setList({
            data: list.date,
            diaryData: [
              ...list.diaryData,
              {
                id: list.diaryData.length + 1,
                name: "Новое упражнение",
                data: [{ id: list.diaryData.length + 1, count: 0, weight: 0 }],
              },
            ],
          });

          console.log(list.diaryData);
        }}
      >
        New workout
      </button>
    </>
  );
}

export default Workouts;
