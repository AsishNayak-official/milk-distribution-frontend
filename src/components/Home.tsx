import React from "react";
import AddNDownload from "./AddNDownload";
import CardLayout from "./CardLayout";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <AddNDownload />
      <CardLayout />
    </div>
  );
};

export default Home;
