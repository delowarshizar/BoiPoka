import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <ToastContainer />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
