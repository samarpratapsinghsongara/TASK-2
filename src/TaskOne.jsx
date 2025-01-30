import { useState } from "react"
import "./TaskOne.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function TaskOne(){
    const [color,setColor] = useState("red");

    const changeColor=()=>{
        if(color === "red"){
            setColor("blue");
        }else{
            setColor("red");
        }
    }

    return(
        <>
        <Navbar/>
        <div>
        <div className="colorDiv" style={{backgroundColor:color}}>Click on the button to change color</div>
        <button onClick={changeColor} className="colorBtn">Change Color</button>
        </div>
        <Footer/>
        </>
    )
} 