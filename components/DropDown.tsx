import React, { useState } from "react";
import styles from "../styles/DropDown.module.scss";

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);


  function handleOnClick(item) {
    console.log("selected");
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className={styles.ddwrapper}>
      <div
        tabIndex={0}
        className={styles.ddheader}
        role="button"
        onClick={() => {
          console.log(open);
          setOpen(!open);
        }}
      >
        <div className={styles.ddheader__title}>
          <p className={styles.ddheader__titlebold}>{title}</p>
        </div>
        <div className={styles.ddheader__action}>
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className={styles.ddlist}>
          {items.map((item) => (
            <li className={styles.ddlistitem} key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;