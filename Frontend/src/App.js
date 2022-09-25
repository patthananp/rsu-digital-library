import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Home from './Home';


import MainLayout from './Components/layouts/MainLayout';
// import PicSlide from './Components/layouts/Slide'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <div>
      {/* <PicSlide /> */}
      <MainLayout />
    </div>
  );
}
$argon2id$v=19$m=65536,t=3,p=4$9Ce2lxsQu4xrc21T3q1GOg$x64cPqxccTWRM+TehkwhUwDNx0vVOcmnJvFN2oeUZsc
export default App;
