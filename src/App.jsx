import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Country from "./pages/Country";
import Test from "./pages/Test";
import "./App.css";

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="Country" element ={<Country/>} />
        <Route path="Test" element = {<Test />} />
      </Routes>
  
    </div>
  );
}

export default App;