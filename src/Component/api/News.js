import React from "react";
import axios from "axios";
import { useState } from "react/cjs/react.production.min";
function News() {
  const [Menu, setMenu] = useState([]);
  const getData = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-03-07&sortBy=publishedAt&apiKey=fb8cf71d3c074c27aec0bb863d80082a"
      )
      .then((res) => {
        console.log(res);
        setMenu(res.data.articles);
      });
  };
  return <>
    <button onClick={getData}>getData</button>
    <h2></h2>
  </>;
}

export default News;
