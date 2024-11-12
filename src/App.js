
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils-Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success")
      document.title = 'TextUtils-Light Mode'
    }
  }
  return (
    <>
      {/*<Navbar />*/}
        <Navbar title="TextUtils" AboutSec="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
          {/* <About /> */}
      {/* <Router> */}
          {/* <Switch> */}
            {/* <Route exact path="/about">
            </Route> */}
            {/* <Route exact path="/">
            </Route> */}
          {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
