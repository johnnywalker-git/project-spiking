"use client"
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase_app from "../../firebase/config";

const auth = getAuth(firebase_app);
const page = () => {

    const [error, setError] = useState(null)
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData((currentUserData) => {
            const {name, value} = event.target
            return {
                ...currentUserData,
                [name]: value
            }
        })
    } //controlled input

    const handleSubmit = async (event) => {
        event.preventDefault()
        const userEmail = userData.email
        const userPassword = userData.password
        setError(null)
        try {
          const response = await signInWithEmailAndPassword(auth, userEmail, userPassword)
          console.log(response)

        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }

        setUserData({
            email: "",
            password: ""
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" value={userData.email} onChange={handleChange} type="text" id='email' placeholder='please enter a valid email' required/>
        <label htmlFor="password">Password</label>
        <input name="password" value={userData.password} onChange={handleChange} type="password" id='password' placeholder='please enter a valid password' required/>
        <button>Login</button>
        {error ? <p>{error}</p> : null}
    </form>
  )
}

export default page
