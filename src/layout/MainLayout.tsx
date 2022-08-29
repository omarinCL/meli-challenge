import React from "react";
import Breadcrum from "../components/Breadcrum";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Breadcrum />
      </section>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}

export default MainLayout;
