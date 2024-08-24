import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Edituser() {
    let navigate =  useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit= async(e)=>{
    e.preventDefault();
    console.log("Form submitted with data:", user);
    await axios.post("http://localhost:7040/post" , user);
    navigate("/")
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <div className="grid gap-3">
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="p-2 g-col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="p-2 g-col-6">
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
                aria-label="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="p-2 g-col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="p-2 g-col-6">
              <button type="submit" className="btn btn-outline-primary"> submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 