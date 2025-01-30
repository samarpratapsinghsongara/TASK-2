import React from "react";

export default class NewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            password:"",
        }
    }
    handleChange = (e)=>{
        const {name,value} = e.target
        this.setState({[name]:value});
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        const{name,email,password} = this.state;
        console.log(``)
    }
    render(){
        return(
            <>
            <h1>this is a form</h1>
            <form>
                <label htmlFor="name">Name : <input type="text" placeholder="Enter Your Name"></input></label>
                <br />
                <label>Email : <input type="Email" placeholder="Enter your Email"></input></label>
                <br />
                <label>Password : <input type="password" placeholder="Enter your password"></input></label>
                <br />
                <input type="submit"/>
            </form>
            </>
        )
    }
}