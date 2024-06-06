import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Porsche from './assets/Porsche';
import { DirectionalLight } from 'three';
import { OrbitControls, Sky } from '@react-three/drei';
import  {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {About,Projects,Contact} from "./Pages";
function App() {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
