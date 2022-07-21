import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

import { getFirestore, setDoc, doc } from "firebase/firestore";
import { app } from "../firebase/firebase";


// Вынести отдельно
const db = getFirestore(app); 

const Signup = () => {
  const { user, signup } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
    name: ""
  });


  if (user) {
    CreateUser(data.email, data.name, user.uid);
  }

  const router = useRouter();
 const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
       router.push("/diaryPage");

    } catch (err) {
      console.log(err);
      alert('Пользователь уже сущетствует')
    }

    console.log(data);
  };

    async function CreateUser(email, name, uid) {
      await setDoc(doc(db, "users", uid), {
        email: email,
        name: name,
      });
    }


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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
            value={data.name}
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
