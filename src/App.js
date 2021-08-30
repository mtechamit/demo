import React, {useState} from "react";
import Popular from "./Popular";
import './App.css';
import PopularHotSelling from "./Popular/popularHotSellingApi";
import JsonPlace from "./Json";

const App = () => {
  const [popularData, setPopularData] = useState(PopularHotSelling);
  
  return (

    <div className="App">
        <Popular popularData={popularData} />
        <JsonPlace />
    </div>

  );
}

export default App;
