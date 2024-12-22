import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Artist from "./components/Artist.jsx";
import Staking from "./components/Staking.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Team from "./components/Team.jsx";
import Vesting from "./components/Vesting.jsx";
import Marketplace from "./components/Marketplace.jsx";
import ConnectWallet from "./components/ConnectWallet.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/staking",
        element: <Staking />,
      },
      {
        path: "/roadmap",
        element: <Roadmap />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/vesting",
        element: <Vesting />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/connect_wallet",
        element: <ConnectWallet />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
