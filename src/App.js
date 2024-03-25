import "./App.css";
import Contact from "./Team/Contact";
import Home from "./Team/Home";
import Chen from "./chen/Chen";
import ChenHighlight from "./chen/ChenHighlight";
import ChenJob from "./chen/ChenJob";
import ChenProject from "./chen/ChenProject";
import ChenInterest from "./chen/ChenInterest";

import Liu from "./liu/Liu";
import LiuHighlight from "./liu/LiuHighlight";
import LiuJob from "./liu/LiuJob";
import LiuProject from "./liu/LiuProject";
import LiuInterest from "./liu/LiuInterest";

import Zheng from "./zheng/Zheng";
import ZhengHighlight from "./zheng/ZhengHighlight";
import ZhengJob from "./zheng/ZhengJob";
import ZhengProject from "./zheng/ZhengProject";
import ZhengInterest from "./zheng/ZhengInterest";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./Team/NoMatch";

function App() {
  let ctrlDown = false;
  let personIdx = 0;
  let pageIdx = 0;
  let route = [
    {
      path: "",
      subPage: [""],
    },
    {
      path: "chen",
      subPage: ["", "highlight", "job", "project", "interest"],
    },
    {
      path: "liu",
      subPage: ["", "highlight", "job", "project", "interest"],
    },
    {
      path: "zheng",
      subPage: ["", "highlight", "job", "project", "interest"],
    },
  ];
  function nextPage() {
    if (
      pageIdx === route[personIdx].subPage.length - 1 &&
      personIdx === route.length - 1
    ) {
      return;
    }
    if (pageIdx === route[personIdx].subPage.length - 1) {
      console.log(personIdx);
      console.log(personIdx + 1);
      personIdx = personIdx + 1;
      console.log(personIdx);
      pageIdx = 0;
    } else {
      pageIdx = pageIdx + 1;
    }
    window.location.href = `/uiux-profile/#/${route[personIdx].path}/${route[personIdx].subPage[pageIdx]}`;
  }
  function prevPage() {
    if (pageIdx === 0 && personIdx === 0) {
      return;
    }
    if (pageIdx === 0) {
      personIdx = personIdx - 1;
      pageIdx = route[personIdx].subPage.length - 1;
    } else {
      pageIdx = pageIdx - 1;
    }
    window.location.href = `/uiux-profile/#/${route[personIdx].path}/${route[personIdx].subPage[pageIdx]}`;
  }
  function handleKeyDown(event) {
    if (event.key === "Control") {
      ctrlDown = true;
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      if (ctrlDown) {
        pageIdx = route[personIdx].subPage.length - 1;
        window.location.href = `/uiux-profile/#/${route[personIdx].path}/${route[personIdx].subPage[pageIdx]}`;
      } else {
        nextPage();
      }
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      if (ctrlDown) {
        pageIdx = 0;
        window.location.href = `/uiux-profile/#/${route[personIdx].path}/${route[personIdx].subPage[pageIdx]}`;
      } else {
        prevPage();
      }
    }
  }
  function handleKeyUp(event) {
    if (event.key === "Control") {
      ctrlDown = false;
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chen" element={<Chen />} />
        <Route path="/chen/highlight" element={<ChenHighlight />} />
        <Route path="/chen/job" element={<ChenJob />} />
        <Route path="/chen/project" element={<ChenProject />} />
        <Route path="/chen/interest" element={<ChenInterest />} />
        <Route path="/liu" element={<Liu />} />
        <Route path="/liu/highlight" element={<LiuHighlight />} />
        <Route path="/liu/job" element={<LiuJob />} />
        <Route path="/liu/project" element={<LiuProject />} />
        <Route path="/liu/interest" element={<LiuInterest />} />
        <Route path="/zheng" element={<Zheng />} />
        <Route path="/zheng/highlight" element={<ZhengHighlight />} />
        <Route path="/zheng/job" element={<ZhengJob />} />
        <Route path="/zheng/project" element={<ZhengProject />} />
        <Route path="/zheng/interest" element={<ZhengInterest />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
