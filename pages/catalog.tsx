import Title from "../components/Title";

import React from "react";
// import "./App.scss";
import Dropdown from "../components/DropDown";

const testArray = [
  {
    id: 11, 
    title: "Грудь",
    data: [
      {
        id: 1,
        value: "Жим лежа",
      },
      {
        id: 2,
        value: "Отжимания",
      },
      {
        id: 3,
        value: "Брусья",
      },
    ],
  },
  {
    id: 12, 
    title: "Спина",
    data: [
      {
        id: 1,
        value: "Становая тяга",
      },
      {
        id: 2,
        value: "Тяга к поясу ",
      },
      {
        id: 3,
        value: "Подтягивания",
      },
    ],
  },
  {
    id: 14, 
    title: "Ноги",
    data: [
      {
        id: 1,
        value: "Становая тяга",
      },
      {
        id: 2,
        value: "Тяга к поясу ",
      },
      {
        id: 3,
        value: "Подтягивания",
      },
    ],
  },
];

function Catalog() {
  return (
    <div>
      <Title title="Catalog" />
      <button>Упражнения</button>
      <div className="container">
        {testArray.map((element, index) => (
          <Dropdown
            key={element.id}
            title={element.title}
            items={element.data}
            multiSelect
          />
          
        ))}

          
      </div>
    </div>
  );
}

export default Catalog;
