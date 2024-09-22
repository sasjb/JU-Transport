import React from 'react';
import Navbar from './components/Navbar.jsx';
//  import App from "./App.jsx"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import DrawerAppBar from './components/DrawerAppBar';
import ResoponsiveAppBar from './components/ResoponsiveAppBar';
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Transport from "./components/pages/Transport.jsx";
import Trips from "./components/pages/Trips.jsx";
import Client from "./components/pages/Client.jsx";
// import Profile from "./components/pages/Profile.jsx";
import Login from './components/pages/Login.jsx';
import Footer from './components/pages/Footer.jsx';
import Top from './components/Top.jsx';
import AdminTransportList from './components/pages/AdminTransportList.jsx';
import AdminTrip from './components/AdminTrip/AdminTrip.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/pages/Main.jsx';
import ClientTrips from './components/pages/ClientTrips.jsx';
import Profile from './components/pages/Profile.jsx';
import AddTransport from './components/pages/AddTransport.jsx';
import TransportReservationForm from './components/pages/TransportReservationForm.jsx';
import AddAdminEmployee from './components/AdminEmployee/AddAdminEmployee.jsx';
import ProfileInfo from './components/pages/ProfileInfo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/transport",
        element: <Transport />
      },
      {
        path: "/trips",
        element: <AdminTrip />
      },
      {
        path: "/client",
        element: <Client/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <ClientTrips />
      },
      {
        path: "/profile",
        element: <ProfileInfo />
      },
      {
        path: "/addtransport",
        element: <AddTransport />
      },
      {
        path: "/AddTransport/AdminTransportList",
        element: <AdminTransportList />
      },
      {
        path: "/reserve",
        element: <TransportReservationForm />
      },
      {
        path: "//AddClient/Driver",
        element: <AddAdminEmployee/>
      },
      

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Top/>
    <ResoponsiveAppBar/>
      {/* <Navbar/> */}
    {/* <DrawerAppBar/>   */}
    {/* <Home/> */}
    {/* <App/> */}
    {/* <RouterProvider router={router}/>
    <Footer/>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
