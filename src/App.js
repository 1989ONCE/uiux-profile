import "./App.css";

import { NativeBaseProvider } from "native-base";
import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import routes from "./routes";
import { SlideChangeEvent } from "./slide-change-event";

const personList = ["chen", "liu", "zheng"];

function App() {
  let ctrlDown = false;
  const location = useLocation();
  const navigate = useNavigate();
  const person = useMemo(() => location.pathname.split("/")[1], [location]);
  const page = useMemo(() => location.pathname.split("/")[2], [location]);
  const personIndex = useMemo(() => {
    if (!personList.includes(person)) return -1;
    return routes[0].children.findIndex((route) => route.path === person);
  }, [person]);
  const pageIndex = useMemo(() => {
    if (personIndex === -1) return -1;
    return routes[0].children[personIndex].children.findIndex(
      (route) => route.path === page
    );
  }, [page, personIndex]);

  function prevPage() {
    if (personIndex === -1) {
      return;
    }
    const isStartOfPerson = pageIndex === 0;
    const personIndexInList = personList.findIndex((p) => p === person);
    const isStartOfPersonList = personIndexInList === 0;
    const prevPerson = personList[personIndexInList - 1];
    if (isStartOfPerson && isStartOfPersonList) {
      return;
    }
    if (isStartOfPerson) {
      const prevPersonRouteEntry = routes[0].children.find(
        (r) => r.path === prevPerson
      );
      window.dispatchEvent(
        new SlideChangeEvent({
          direction: "prev",
        })
      );
      navigate(
        `${prevPerson}/${
          prevPersonRouteEntry.children[
            prevPersonRouteEntry.children.length - 1
          ].path
        }`
      );
      return;
    }
    window.dispatchEvent(
      new SlideChangeEvent({
        direction: "prev",
      })
    );
    navigate(
      `${person}/${
        routes[0].children[personIndex].children[pageIndex - 1].path
      }`
    );
  }

  function nextPage() {
    if (personIndex === -1) {
      return;
    }
    const personIndexInList = personList.findIndex((p) => p === person);
    const isEndOfPerson =
      pageIndex === routes[0].children[personIndex].children.length - 1;
    const isEndOfPersonList = personIndexInList === personList.length - 1;
    const nextPerson = personList[personIndexInList + 1];
    if (isEndOfPerson && isEndOfPersonList) {
      return;
    }
    if (isEndOfPerson) {
      const nextPersonRouteEntry = routes[0].children.find(
        (r) => r.path === nextPerson
      );
      window.dispatchEvent(
        new SlideChangeEvent({
          direction: "next",
        })
      );
      navigate(`${nextPerson}/${nextPersonRouteEntry.children[0].path}`);
      return;
    }
    window.dispatchEvent(
      new SlideChangeEvent({
        direction: "next",
      })
    );
    navigate(
      `${person}/${
        routes[0].children[personIndex].children[pageIndex + 1].path
      }`
    );
  }

  function toStartOfPerson() {
    if (personIndex === -1) {
      return;
    }
    window.dispatchEvent(
      new SlideChangeEvent({
        direction: "prev",
      })
    );
    navigate(`${person}/${routes[0].children[personIndex].children[0].path}`);
  }

  function toEndOfPerson() {
    if (personIndex === -1) {
      return;
    }
    window.dispatchEvent(
      new SlideChangeEvent({
        direction: "next",
      })
    );
    navigate(
      `${person}/${
        routes[0].children[personIndex].children[
          routes[0].children[personIndex].children.length
        ].path
      }`
    );
  }

  function handleKeyDown(event) {
    if (event.key === "Control") {
      ctrlDown = true;
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      if (ctrlDown) {
        toEndOfPerson();
      } else {
        nextPage();
      }
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      if (ctrlDown) {
        toStartOfPerson();
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
    <NativeBaseProvider>
      <Outlet />
    </NativeBaseProvider>
  );
}

export default App;
