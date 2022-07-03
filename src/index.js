//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

var d = new Date(); // for now
var hour = d.getHours(); // GET HOUR
// var minute = d.getMinutes(); // =>  30
// var second = d.getSeconds(); // => 51

let greeting = "";

let customStyle = {
  color: ""
};

if (hour >= 0 && hour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 style={customStyle} className="heading">
    {greeting}
  </h1>,
  document.querySelector("#root")
);
