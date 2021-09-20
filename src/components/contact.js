import React, { useState } from "react";
import './About.css';
 export default function Contact() {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
      });
    
      const { fname, lname, email, password } = user;
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        alert(`your name is ${fname} ${lname}. your email address is ${email}. your password is ${password}. It means you are hacked.hahaha(evil laugh)`)
        setUser({
            fname: "",
        lname: "",
        email: "",
        password: "",
        })
        e.preventDefault();
      };
    return(
<>
<form className = "container my-5" onSubmit={handleSubmit}>
    <h1 className="contact-h1 text-success mb-3">contact us</h1>
  <div className="mb-4 fname-head mx-auto">
    <label htmlFor="fname" className="d-flex justify-content-start ms-2 mb-2">Enter FirstName</label>
    <input type="text" name="fname" onChange={handleChange} value={fname} className="form-control" id="fname"  />
    
  </div>
  <div className="mb-4 lname-head mx-auto">
    <label htmlFor="lname" className="d-flex justify-content-start ms-2 mb-2">Enter LastName</label>
    <input type="text" name="lname" onChange={handleChange} value={lname} className="form-control" id="lname" />
  </div>
  <div className="mb-4 email-head mx-auto">
    <label htmlFor="email" className="d-flex justify-content-start ms-2 mb-2">Email address</label>
    <input type="email" name="email"  onChange={handleChange} value={email} className="form-control" id="email"  />
    
  </div>
  <div className="mb-4 password-head mx-auto">
    <label htmlFor="password" className="d-flex justify-content-start ms-2 mb-2">Password</label>
    <input type="password" name='password' onChange={handleChange} value={password} className="form-control" id="password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


</>
    )
    
}