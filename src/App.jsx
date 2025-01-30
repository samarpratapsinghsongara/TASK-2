
import "./App.css";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";
import Home from "./Home";
import Todo from "./Todo";
import { Routes, BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/toggle" element={<TaskOne />} />
          <Route path="/Form" element={<TaskTwo />} />
          <Route path="/Todo" element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
