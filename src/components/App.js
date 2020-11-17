import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px",
    })
  };
  const checkRender= ()=> {setRenderBall(true)};
  const renderChoice = () => {
    if(renderBall===true)
    {
      return <div className="ball" style={ballPosition}></div>
    }
    else{
      return <button className="start" onClick={checkRender}>Start</button>
    }
  };

  const moveBall= (evt)=>{
    if(renderBall===true)
    {
      if(evt.key=== "ArrowUp")
      {
        y-=5;
        setY(y);
        setBallPosition({
          top: y + "px",
          left: x + "px"
        });
      }
      else if(evt.key=== "ArrowDown")
      {
        y+=5;
        setY(y);
        setBallPosition({
          ...ballPosition,
          top: y + "px",
          left: x + "px"
        });   
      }

      else if(evt.key=== "ArrowLeft")
      {
        x-=5;
        setX(x);
        setBallPosition({
          ...ballPosition,
          top: y + "px",
          left: x + "px"
        });   
      }
      else if(evt.key=== "ArrowRight")
      {
        x+=5;
        setX(x);
        setBallPosition({
          ...ballPosition,
          top: y + "px",
          left: x + "px"
        });   
      }
    }
  }
  useEffect(()=>{
    window.addEventListener('keydown',moveBall);
    return ()=>
    {
      window.addEventListener('keydown',moveBall);
    };
  });
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
