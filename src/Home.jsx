import React, { useEffect } from 'react'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

  useEffect(()=>{
//task--------------
    return ()=>{
      console.log("unmounting...")
    }
  },[])
  return (
    <>    
    <Nav/>
    <h1 className='heading'>Welcome to Home page</h1> 
    <Footer/> 
    </>
  )
}
export default Home 