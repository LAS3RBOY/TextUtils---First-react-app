// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null) // alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#124666"
      document.body.style.color = "white"
      document.title = "TextUtils-DarkMode"
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light Mode has been enabled", "success")

    }
  }

  return (
    <>

      <Navbar title="Sahil Gupta" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">


        <TextForm heading="Enter your text to analyze" showAlert={showAlert} />


      </div>

    </>
  );
}
export default App;
