import { useState } from "react";
import WorkoutItem from "../components/WorkoutItem";
import Workout from "../components/Workout";

const diaryItems = [
  {
    date: "02/07/2022",
    diaryData: [
      {
        id: 1,
        name: "Жим лежа",
        data: [
          { id: 1, count: 10, weight: 22 },
          { id: 2, count: 12, weight: 30 },
        ],
      },
      { id: 2, name: "Отжимания", data: [{ id: 1, count: 20, weight: 2 }] },
    ],
  },

  {
    date: "03/07/2022",
    diaryData: [
      {
        id: 1,
        name: "Присед",
        data: [
          { id: 1, count: 1, weight: 22 },
          { id: 2, count: 2, weight: 120 },
        ],
      },
      { id: 2, name: "Жим ногами", data: [{ id: 1, count: 10, weight: 100 }] },
    ],
  },
];

function DiaryPage() {
  const [diary, setDiary] = useState(diaryItems);

  return (
    <>
      <h1>Diary</h1>
      {diary.map((item, idx) => (
        <>
          <p>{item.date}</p>
          {item.diaryData.map((e, idx) => (
            <>
              <Workout title={e.name} workout={e.data} />
            </>
          ))}
          <button
            onClick={(e) => {
              setDiary([...diary, { date: "0/0/0", diaryData: [] }]);
            }}
          >
            {"Add workout"}
          </button>
        </>
      ))}
    </>
  );
}

export default DiaryPage;
