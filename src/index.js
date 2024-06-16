import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { TourProvider } from "@reactour/tour";

import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const disableKeyboardNavigation = ["left", "right", "esc"];
const steps = [
  {
    selector: ".first-step",
    position: "center",
    content:
      "歡迎來到我們的網站，這是網站第一個導覽步驟！使用手機的話，我們建議改為電腦檢視模式，才不會影響資訊呈現～ \n點擊【提示框以外】或是【點擊叉叉】即可關閉導覽。\n\n如果還沒有觀看過，請點擊提示框裡的箭頭按鈕，做前後切換。\n如果想要跳過部分步驟，也可直接點擊提示框下方的圓點。",
  },
  {
    selector: ".second-step",
    position: "center",
    content: "點擊成員頭像可以查看成員資訊",
  },
  {
    selector: ".second-step",
    position: "center",
    content:
      "每位成員均有5頁的資訊，可以透過點擊螢幕上的【前後箭頭】來切換頁面，也可利用我們所設定的快捷鍵來切換頁面。",
  },
  {
    position: "center",
    content: `鍵盤快捷鍵介紹1： \n 按下【左(◀) or 上(▲)】切換至前一頁\n 按下【右(▶) or 下(▼)】切換至後一頁`,
  },
  {
    position: "center",
    content:
      "鍵盤快捷鍵介紹2: \n- macOS \n 按下 control + shift + 【左(◀) or 上(▲)】跳至該成員資訊的第一頁 \n 按下 control + shift + 【右(▶) or 下(▼)】跳至該成員資訊的最後一頁\n\n - windowOS \n 按下 control + 【左(◀) or 上(▲)】跳至該成員資訊的第一頁 \n 按下 control +【右(▶) or 下(▼)】跳至該成員資訊的最後一頁",
  },
  {
    selector: ".third-step",
    position: [30, window.innerHeight * 0.6],
    content:
      "點擊左邊按鈕為網站教學，網站的每個頁面均有此按鈕，使用過程中若不知道如何使用，可以點擊此按鈕查看教學。",
  },
  {
    selector: ".fourth-step",
    position: [60, window.innerHeight * 0.63],
    content:
      "點擊右邊按鈕會導向聯絡我們的頁面，若有任何問題或建議，歡迎透過該頁表單或是電話來聯絡我們！",
  },
  {
    position: "center",
    content:
      "這是網站的最後一個導覽步驟，希望您能夠喜歡我們的網站！\n\n點擊【提示框以外】或是【點擊叉叉】即可關閉導覽。",
  },

  // ...
];

const router = createHashRouter(routes);

root.render(
  <React.StrictMode>
    {localStorage.getItem("tour") === "true" ? (
      <RouterProvider router={router} />
    ) : (
      <TourProvider
        badgeContent={({ totalSteps, currentStep }) =>
          currentStep + 1 + "/" + totalSteps
        }
        steps={steps}
        disableKeyboardNavigation={disableKeyboardNavigation}
        styles={{
          popover: (base) => ({
            ...base,
            fontFamily: "",
            padding: "3rem",
            lineHeight: "1.5rem",
            whiteSpace: "pre-line",
          }),
        }}
      >
        <RouterProvider router={router} />
      </TourProvider>
    )}
  </React.StrictMode>
);

localStorage.setItem("tour", "true");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
