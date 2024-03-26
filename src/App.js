import "./App.css";

import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

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
      <NativeBaseProvider>
        <Outlet />
      </NativeBaseProvider>
    </>
  );
}

export default App;
