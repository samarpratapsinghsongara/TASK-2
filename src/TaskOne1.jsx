import React from "react";

export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"red"
        };
    }  
    changeColor =()=>{
        if(this.state.color==="red"){
        this.setState({
            color:"blue"
        })  
    }else{
        this.setState({
            color:"red"
        })
    }
    }
    render(){
        return(
            <>
            <div className="colorDiv" style={{backgroundColor:this.state.color}}>click button to change div</div>
            <br />
            <button onClick={this.changeColor}>Change Color</button>
            </>
        )
    }
    }
    
    