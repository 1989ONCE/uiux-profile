import App from "./App";

import Contact from "./Team/Contact";
import Home from "./Team/Home";
import ChenLayout from "./chen/ChenLayout";
import Chen from "./chen/Chen";
import ChenHighlight from "./chen/ChenHighlight";
import ChenJob from "./chen/ChenJob";
import ChenProject from "./chen/ChenProject";
import ChenInterest from "./chen/ChenInterest";

import LiuLayout from "./liu/LiuLayout";
import Liu from "./liu/Liu";
import LiuHighlight from "./liu/LiuHighlight";
import LiuJob from "./liu/LiuJob";
import LiuProject from "./liu/LiuProject";
import LiuInterest from "./liu/LiuInterest";

import ZhengLayout from "./zheng/ZhengLayout";
import Zheng from "./zheng/Zheng";
import ZhengHighlight from "./zheng/ZhengHighlight";
import ZhengJob from "./zheng/ZhengJob";
import ZhengProject from "./zheng/ZhengProject";
import ZhengInterest from "./zheng/ZhengInterest";
import NoMatch from "./Team/NoMatch";

const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/chen",
        element: <NoMatch />,
      },
      {
        path: "chen",
        element: <ChenLayout />,
        children: [
          {
            path: "about",
            element: <Chen />,
          },
          {
            path: "highlight",
            element: <ChenHighlight />,
          },
          {
            path: "job",
            element: <ChenJob />,
          },
          {
            path: "project",
            element: <ChenProject />,
          },
          {
            path: "interest",
            element: <ChenInterest />,
          },
        ],
      },
      {
        path: "/liu",
        element: <NoMatch />,
      },
      {
        path: "liu",
        element: <LiuLayout />,
        children: [
          {
            path: "about",
            element: <Liu />,
          },
          {
            path: "highlight",
            element: <LiuHighlight />,
          },
          {
            path: "job",
            element: <LiuJob />,
          },
          {
            path: "project",
            element: <LiuProject />,
          },
          {
            path: "interest",
            element: <LiuInterest />,
          },
        ],
      },
      {
        path: "/zheng",
        element: <NoMatch />,
      },
      {
        path: "zheng",
        element: <ZhengLayout />,
        children: [
          {
            path: "about",
            element: <Zheng />,
          },
          {
            path: "highlight",
            element: <ZhengHighlight />,
          },
          {
            path: "job",
            element: <ZhengJob />,
          },
          {
            path: "project",
            element: <ZhengProject />,
          },
          {
            path: "interest",
            element: <ZhengInterest />,
          },
        ],
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

export default routes;
