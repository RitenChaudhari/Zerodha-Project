import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [info,setInfo] = useState({
    email:"",
    password: "",
  });

  function onChangeHandler(event){
    const {name,value} = event.target;

    setInfo((prevInfo) =>{
      return {
        ...prevInfo,
        [name]:value
      }
    });
  }

  const onSubmitHandler = async(event,req,res) =>{
    event.preventDefault();

    try {
      const url = "http://localhost:3002/login";
      const response = await axios.post(url,info);

      if(response.data.success){
        localStorage.setItem("token",response.data.token);
        alert("Successfully, Signed In");
      }else{
        alert(response.data.message);
      }

      window.location.href="http://localhost:5174/"
    } catch (error) {
      console.log("Error during login",error);
      alert("An Error Occured, Please Try Again");
    }
  }

  return (
    <div className="container text-center form-control">
      <h2 className="mb-5">Login Page</h2>
      <form className="row g-3" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="Email">Enter Email: &nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={info.email}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Enter password: &nbsp;&nbsp;&nbsp;</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={info.password}
            onChange={onChangeHandler}
          />
        </div>

        <button className="btn btn-primary">Login</button>
      </form>

      <p>
        Dont have an Account{" "}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Signup Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
