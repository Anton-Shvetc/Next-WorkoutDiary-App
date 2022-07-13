import DiaryItem from "../components/DiaryItem";

const diaryItems = [
  {
    date: "02/07/2022",
    diaryData: [{ name: "Жим лежа", data: [{ count: 10, weight: 22 }, { count: 12, weight: 30 }] }, { name: "Отжимания", data: [{ count: 20, weight: 2 }] }],
  },
];

function Diary() {
  return (
    <>
      <h1>Diary</h1>
    <div>
      {diaryItems.map((element) => (
          <DiaryItem 
            key={element.date}
            date={element.date}
            items={element.diaryData}
          />
      ))}
    </div>
    </>
  );
}

export default Diary;
