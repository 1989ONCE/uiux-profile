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
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route
          exact
          path="/ncustudio"
          element={<Home />}
        />
        <Route
          exact
          path="/ncustudio/contact"
          element={<Contact />}
        />
        <Route
          exact
          path="/ncustudio/chen"
          element={<Chen />}
        />
        <Route
          exact
          path="/ncustudio/chen/job"
          element={<ChenJob />}
        />
        <Route
          exact
          path="/ncustudio/chen/project"
          element={<ChenProject />}
        />
        <Route
          exact
          path="/ncustudio/chen/interest"
          element={<ChenInterest />}
        />
        <Route
          exact
          path="/ncustudio/liu"
          element={<Liu />}
        />
        <Route
          exact
          path="/ncustudio/liu/job"
          element={<LiuJob />}
        />
        <Route
          exact
          path="/ncustudio/liu/project"
          element={<LiuProject />}
        />
        <Route
          exact
          path="/ncustudio/liu/interest"
          element={<LiuInterest />}
        />
        <Route
          exact
          path="/ncustudio/zheng"
          element={<Zheng />}
        />
        <Route
          exact
          path="/ncustudio/zheng/job"
          element={<ZhengJob />}
        />
        <Route
          exact
          path="/ncustudio/zheng/project"
          element={<ZhengProject />}
        />
        <Route
          exact
          path="/ncustudio/zheng/interest"
          element={<ZhengInterest />}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
