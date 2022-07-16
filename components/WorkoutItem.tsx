import styles from "../styles/DiaryItem.module.scss";

function WorkoutItem({
  
  item: { id, count, weight },
  idx,
  setList,
  isCurrentBeingUpdated,
}) {
  const handleInputCountChange = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, count: value } : item
      )
    );
  };
  const handleInputWeightChange = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, weight: value } : item
      )
    );
  };

  const renderTitleOrInput = () => {
    return isCurrentBeingUpdated ? (
      <div style={{ display: "flex" }}>
        <input type="number" value={count} onChange={handleInputCountChange} />
        <input
          style={{ marginLeft: 2 }}
          type="number"
          value={weight}
          onChange={handleInputWeightChange}
        />
      </div>
    ) : (
      <div style={{ display: "flex" }}>
        <p>
          {count} x {weight} {`(${count * weight} кг)`}
        </p>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          fontSize: 14,
          height: 30,
          display: "flex",
          alignItems: "center",
        }}
      >
        {`Подход ${idx + 1}`}.{renderTitleOrInput()}
      </div>
    </div>
  );
}

export default WorkoutItem;
