import SignIn from "./components/Login/Signin";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Login/Dashboard";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
