import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination/Pagination";
import Navbar from "../components/navbar";

const Layout: React.FC = () => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    console.log("hi");
  };
  return (
    <>
      <Navbar />
      <Outlet />
      <Pagination pageCount={24} onPageChange={handlePageChange} />
      <Footer />
    </>
  );
};

export default Layout;
