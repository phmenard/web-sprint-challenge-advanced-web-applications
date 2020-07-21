import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // must have a loading state
  const [loading, setLoading] = useState(true);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors();
  }, []);

  // grab our colors
  const getColors = () => {
    setLoading(true);
    axiosWithAuth().get('colors')
    .then(res => {
      console.log(res.data);
      setColorList(res.data);
      setLoading(false);
    })
  }

  if (loading) {
    // Loading up the colors
    return <div><h2>Loading colors...</h2></div>;
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
