"use client";

import { useEffect, useState } from "react";
import "./../../../style.css";

export default function Page({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  let id = params.userId;
  console.log(id);
  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    let response = await fetch(`http://localhost:3000/backend/${id}`);
    response = await response.json();
    console.log(response, "1");
    setName(response.result.name);
    setAge(response.result.age);
    setEmail(response.result.email);
  };
  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/backend/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result.success) {
      alert("user infomation updated");
    }else{
      alert(' please try with vaild input')
    }
    console.log(result, "2");
  };

  return (
    <div className="add-user">
      <h1>Add New user</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="number"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
        className="input-field"
      />
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <button onClick={updateUser} className="btn">
        Update User
      </button>
    </div>
  );
}
