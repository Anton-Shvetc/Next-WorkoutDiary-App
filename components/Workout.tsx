import { useState } from "react";
import WorkoutItem from "./WorkoutItem";

function Workout({ workout, title }) {
  const [list, setList] = useState(workout);
  const [isCurrentBeingUpdated, setCurrent] = useState(false);

  return (
    <>
      <div>
        <h5>{title}</h5>
        {list.map((item, idx) => (
          <>
            <WorkoutItem
              key={item.id}
              item={item}
              idx={idx}
              setList={setList}
              isCurrentBeingUpdated={isCurrentBeingUpdated}
            />
          </>
        ))}

        <button
          onClick={() => setCurrent(isCurrentBeingUpdated ? false : true)}
        >
          {isCurrentBeingUpdated ? "Save" : "Edit"}
        </button>
        <button
          onClick={(e) => {
            setList([...list, { id: list.length + 1, count: 0, weight: 0 }]);
          }}
        >
          {"Add"}
        </button>
        <button
          onClick={(e) => {
            setList([...list.slice(0, list.length - 1)]);
          }}
        >
          {"Delete"}
        </button>
      </div>
    </>
  );
}

export default Workout;
