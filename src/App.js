import React from "react";
import { Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Loginpage/loginpage-component";
import HomePage from "./pages/HomePage/homepage-component";
import NetworkPage from "./pages/NetworkPage/networkpage-component";
import ReportPage from "./pages/ReportPage/reportpage-component";
import UserPage from "./pages/UserPage/userpage-component";

import './App.css';

function App() {
  return (
    <div>
    <h1>VMS APPLICATION BY RAJESH</h1>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/networkpage" element={<NetworkPage/>}/>
        <Route path="/reportpage" element={<ReportPage/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/logout" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
