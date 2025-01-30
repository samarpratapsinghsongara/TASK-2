import { useState } from "react";
import React from "react";
import "./TaskTwo.css"
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

export default function TaskTwo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const data = (e) => {
    e.preventDefault();
    let finalData = [{name,email,password}];
    console.log(finalData);
    
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePass = (e) => setPassword(e.target.value);

  const handleShow = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
    <Nav/>
      <div className="form">
        <form  onSubmit={data}>
          NAME
          <input 
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleName}
            required
          ></input>
          <br />
          E-MAIL
          <input
            type= "email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmail}
            required
          ></input>
          <br />
          
          PASSWORD
          <div className="passwordDiv" >
          <input
            type={showPassword ?"text":"password"}
            placeholder="password"
            value={password}
            onChange={handlePass} 
            required
          ></input><span className="showPassword" onClick={handleShow} > {showPassword ? "Hide" : "Show"}</span>
        
          </div>
          <br />
          <input type="submit"></input>
          <br />
        </form>
      </div>
      <Footer/>
    </>
  );
}


