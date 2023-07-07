import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert1 from "./components/Alert1";
import TextForm from "./components/TextForm";


// import About from "./components/About";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enable", "success");
    }
  };
  return (
    <>
      {/* <Router>   */}
      <Navbar
        title="TextUtils"
        abouttext="about"
        mode={mode}
        togglemode={togglemode}
      /> 
      
      <Alert1 alert={alert} />
      <TextForm
          showalert={showalert}
          mode={mode}
          heading="enter a text to analze below"
        />
      {/* <div className="container my-3">
 
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">art
          
          </Route>
        </Switch>
        
      </div>
         
      <About/>
      </Router>  */}
    </>
  );
}
export default App;