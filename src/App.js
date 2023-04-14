import React from "react";
import Sidebar from "./Components/Sidebar";
import NewsCard from "./Components/NewsCard";
function App() {
  console.log("process.env.COUNTRY_API_KEY", process.env.COUNTRY_API_KEY);
  return (
    <div>
      <Sidebar />
      <NewsCard />
    </div>
  );
}

export default App;
