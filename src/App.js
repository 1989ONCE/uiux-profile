import './App.css';
import Contact from './Team/Contact';
import Home from './Team/Home';
import Chen from './chen/Chen';
import ChenJob from './chen/ChenJob';
import ChenProject from './chen/ChenProject';
import ChenInterest from './chen/ChenInterest';
import Liu from './liu/Liu';
import LiuJob from './liu/LiuJob';
import LiuProject from './liu/LiuProject';
import LiuInterest from './liu/LiuInterest';
import Zheng from './zheng/Zheng';
import ZhengJob from './zheng/ZhengJob';
import ZhengProject from './zheng/ZhengProject';
import ZhengInterest from './zheng/ZhengInterest';
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/chen"
          element={<Chen />}
        />
        <Route
          
          path="/chen/job"
          element={<ChenJob />}
        />
        <Route
          
          path="/chen/project"
          element={<ChenProject />}
        />
        <Route
          
          path="/chen/interest"
          element={<ChenInterest />}
        />
        <Route
          
          path="/liu"
          element={<Liu />}
        />
        <Route
          
          path="/liu/job"
          element={<LiuJob />}
        />
        <Route
          
          path="/liu/project"
          element={<LiuProject />}
        />
        <Route
          
          path="/liu/interest"
          element={<LiuInterest />}
        />
        <Route
          
          path="/zheng"
          element={<Zheng />}
        />
        <Route
          
          path="/zheng/job"
          element={<ZhengJob />}
        />
        <Route
          
          path="/zheng/project"
          element={<ZhengProject />}
        />
        <Route
          
          path="/zheng/interest"
          element={<ZhengInterest />}
        />
      </Routes>
    </>
  );
}

export default App;
