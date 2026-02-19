import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Login from "./Login"

const Signup = () => {
  const [info,setInfo] = useState({
    email:"",
    username:"",
    password:""
  })

  function handleOnChange(event){
    const {name,value} = event.target;
    
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]:value,
      }
    })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:3002/signup";
      const response = await axios.post(url,info);

      if(response.data.success){
        localStorage.setItem("token",response.data.token);
        alert("Signup Successful");
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error during Signup: ",error);
      alert("An Error Occured. Please Try Again")
    }    
  }

  return (
    <div className='container text-center form-control'>
      <h2 className='mb-5'>Sign Up Page</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Enter Email: &nbsp;&nbsp;&nbsp;</label>
          <input type="email" name="email" placeholder='Enter Email' value={info.email} onChange={handleOnChange}/>
        </div>
        <div>
          <label htmlFor="Username">Enter Username: &nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="username" placeholder='Enter username' value={info.username} onChange={handleOnChange}/>
        </div>
        <div>
          <label htmlFor="password">Enter password: &nbsp;&nbsp;&nbsp;</label>
          <input type="password" name="password" placeholder='Enter Password' value={info.password} onChange={handleOnChange}/>
        </div>

        <button className='btn btn-primary'>SignUp</button>
      </form>

      <p>Already have an Account <Link to="/login" style={{textDecoration:"none"}}>Login Here</Link></p>
      
    </div>
  )
}

export default Signup
