import React from "react";
import { Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Loginpage/loginpage-component";

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
