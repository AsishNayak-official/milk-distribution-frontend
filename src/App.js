import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewUser from "./components/AddNewUser";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddNewUser/>} />
    </Routes>
  );
}

export default App;
