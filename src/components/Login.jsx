import React, { useState } from 'react'

const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setUserData((currentUserData) => {
            const {value, name} = event.target
            return {
                ...currentUserData,
                [name]: value
            }
        })
        
    }
    //FORM VALIDATION - ✅
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData)
        setUserData({
            email: "",
            password: ""
        })
    };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email: </label>
    <input value={userData.email} onChange={handleChange} id="email" name="email" placeholder="Enter your name" />
    <label htmlFor="password">Password: </label>
    <input value={userData.password} onChange={handleChange} id="password"  name="password" placeholder="Enter your password" />
    <button disabled={!userData} type="submit">
        Submit
    </button>
</form>
  )
}

export default Login