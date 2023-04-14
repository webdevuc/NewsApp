import React, { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import { useDispatch } from "react-redux";
import { getHeadLines } from "./actions/headLineAction";
import NewsCard from "./Components/NewsCard";
function App() {
  return (
    <div>
      <Sidebar />
      <NewsCard />
    </div>
  );
}

export default App;
