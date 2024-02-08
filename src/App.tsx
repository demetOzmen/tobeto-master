import Navi from "./components/Navbar/Navi";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LoginNavi from "./components/Login/LoginNavi/LoginNavi";
import LoginFooter from "./components/Login/LoginFooter/LoginFooter";
import About from "./pages/About/About";
import Activity from "./pages/Activity/Activity";
import React from "react";
import AnnouncementTypeList from "./pages/HomePage/AnnouncementTypeList";
import Announcement from "./pages/HomePage/AnnouncementTest";
import MyAnnouncement from "./pages/MyAnnouncement/MyAnnouncement";
import MyCourse from "./pages/MyCourses/MyCourse";
import Connection from "./pages/Connection/Connection";
import MyProfile from "./pages/MyProfile/MyProfile";
import EditMyInfo from "./pages/MyProfile/EditMyInfo/EditMyInfo";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navi />
              <Announcement />

              <AnnouncementTypeList />
              <Footer />
            </>
          }
        />

        <Route
          path="/platform"
          element={
            <>
              <Navi />
              <Platform />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <LoginNavi />
              <Login />
              <LoginFooter />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <LoginNavi />
              <Register />
              <LoginFooter />
            </>
          }
        />
        <Route
          path="/connection"
          element={
            <>
              <LoginNavi />
              <Connection />
              <LoginFooter />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <LoginNavi />
              <About />
              <LoginFooter />
            </>
          }
        />

        <Route
          path="/catalog"
          element={
            <>
              <LoginNavi />
              <Catalog />
              <LoginFooter />
            </>
          }
        />

        <Route
          path="/activity"
          element={
            <>
              <Activity />
            </>
          }
        />
        <Route
          path="/my-announcement"
          element={
            <>
              <Navi />
              <MyAnnouncement />
            </>
          }
        />

        <Route
          path="/my-course"
          element={
            <>
              <Navi />
              <MyCourse />
            </>
          }
        />

        <Route
          path="/my-profile/editprofile/settings"
          element={
            <>
              <Navi />
              <Platform />
              <Footer />
            </>
          }
        />

        <Route
          path="/my-profile/editprofile"
          element={
            <>
              <Navi />
              <EditMyInfo/>
              <Footer />
            </>
          }
        />

<Route
          path="/my-profile"
          element={
            <>
              <Navi />
              <MyProfile/>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
