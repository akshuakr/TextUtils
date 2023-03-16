import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [bMode, setBMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(()=> {
          setAlert(null);
        },2100);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setBMode("light");
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';
      // setInterval( ()=>{
        // document.title = 'TextUtils is Best';
      // },500);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1000);
    }
    else{
      setMode('light');
      setBMode("dark");
      showAlert("Light Mode Enabled", "success")
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        bMode={bMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={ <TextForm heading="Enter the text to analyze " mode={mode} showAlert={showAlert}/>}></Route> </Routes>
      </Router>
  );
}

export default App;
