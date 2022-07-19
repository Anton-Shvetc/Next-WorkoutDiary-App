import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

import { getFirestore } from "firebase/firestore";
import { app } from "../firebase/firebase";


// Вынести отдельно
const db = getFirestore(app); 

const Signup = () => {
  const { user, signup } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
 const router = useRouter();
  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
      // db.collection("users").doc(userUid).set({
      //   email: htmlEmail,
      //   emailVertified: false,
      //   name: htmlUser,
      //   online: false,
      //   onlock: false,
      //   password: htmlPass,
      // });
       router.push("/diaryPage");

    } catch (err) {
      console.log(err);
      alert('Пользователь уже сущетствует')
    }

    console.log(data);
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
