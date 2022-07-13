import styles from "../styles/DiaryItem.module.scss";
function DiaryItem({ date, items }) {
  console.log(items);
  return (
    <div>
      <div className={styles.date}>{date}</div>
      <div>
        {items.map((element, index) => (
          <div style= {{display: 'flex'}}key={index}>
            <div>{element.name}</div>
              <div className={styles.diary__info} key={index}>
                {element.data.map((element, index) => (
                  <div style={{marginLeft: 10}}>
                    {element.count} - {element.weight} кг
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiaryItem;
