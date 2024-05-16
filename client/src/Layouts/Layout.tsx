import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className=" py-10 flex-1 container mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
