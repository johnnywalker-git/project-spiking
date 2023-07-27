"use client";
import React, { useState } from "react";
import firebase_app from "../../firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);
const page = () => {
    const[error, setError] = useState(null)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    setUserData((currentUserData) => {
      const { value, name } = event.target;
      return {
        ...currentUserData,
        [name]: value,
      };
    });
  };
  
  //FORM VALIDATION - ✅
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    const userEmail = userData.email
    const userPassword = userData.password
    const confirmUserPassword = userData.confirmPassword
    if(userPassword === confirmUserPassword) {
      try {
          const response = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
          console.log(response, "response from firebase")
      } catch (error) {
          setError(error.message)
      }
      setUserData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
      });
    } else {
      setError("Passwords do not match!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          value={userData.name}
          onChange={handleChange}
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          value={userData.email}
          onChange={handleChange}
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
        type="password"
          value={userData.password}
          onChange={handleChange}
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        
      </div>
      {error !== null && <p>{error}</p>}
      <div>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
        type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
        />
      </div>
      <button disabled={!userData} type="submit">
        Register
      </button>
    </form>
  );
};

export default page;
