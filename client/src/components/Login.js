import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        //props.setLoggedIn(true);
      })
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div><form onSubmit={login}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="user name"
          //value={credentials.username}
          onChange={handleChange}
          /></label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="password"
          //value={credentials.password}
          onChange={handleChange}
          /></label>
        <button>Log in</button>
      </form></div>
    </>
  );
};

export default Login;
