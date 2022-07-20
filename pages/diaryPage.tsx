// import { useState } from "react";
// import WorkoutItem from "../components/WorkoutItem";
// import Workout from "../components/Workout";

import { doc, getDoc } from "firebase/firestore";
import {app} from "../firebase/firebase";

import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";




const db = getFirestore(app) // const app = initializeApp(fireConfig)


async function Test() {
const q = query(collection(db, "users"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
});
}

// const userRef = doc(db, "users");
// console.log(userRef)

// async function Test() {
//   // const db = getDatabase();
// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// }

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

// const diaryItems = [
//   {
//     date: "02/07/2022",
//     diaryData: [
//       {
//         id: 1,
//         name: "Жим лежа",
//         data: [
//           { id: 1, count: 10, weight: 22 },
//           { id: 2, count: 12, weight: 30 },
//         ],
//       },
//       { id: 2, name: "Отжимания", data: [{ id: 1, count: 20, weight: 2 }] },
//     ],
//   },

//   {
//     date: "03/07/2022",
//     diaryData: [
//       {
//         id: 1,
//         name: "Присед",
//         data: [
//           { id: 1, count: 1, weight: 22 },
//           { id: 2, count: 2, weight: 120 },
//         ],
//       },
//       { id: 2, name: "Жим ногами", data: [{ id: 1, count: 10, weight: 100 }] },
//     ],
//   },
// ];


function DiaryPage() {

  // const [diary, setDiary] = useState(diaryItems);

  return (
    // <>
    //   <h1>Diary</h1>
    //   {diary.map((item, idx) => (
    //     <>
    //       <p>{item.date}</p>
    //       {item.diaryData.map((e, idx) => (
    //         <>
    //           <Workout title={e.name} workout={e.data} />
    //         </>
    //       ))}
    //       <button
    //         onClick={(e) => {
    //           setDiary([...diary, { date: "0/0/0", diaryData: [] }]);
    //         }}
    //       >
    //         {"Add workout"}
    //       </button>
    //     </>
    //   ))}
    // </>
    <>
      <button onClick={Test}>Test</button>
    </>
  );
}

export default DiaryPage;
