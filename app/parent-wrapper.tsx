import React from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function ParentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavigationBar />
      <div className="">
        {children}
        <Footer />
      </div>
    </div>
  );
}
