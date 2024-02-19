import React from 'react';
import { P5Wrapper } from 'react-p5-wrapper';
import Sketch from "react-p5"

function sketch(p) {
  // Define the MyLine class within the sketch function
  class MyLine {
    constructor(px, py, x, y) {
      this.px = px;
      this.py = py;
      this.x = x;
      this.y = y;
    }

    show() {
      p.stroke(255); // Use 'p' to call p5 methods
      p.line(this.px, this.py, this.x, this.y);
    }
  }
}
//   let myLine = null;

//   // p5.js setup function
//   p.setup = () => {
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     p.background(0);
//   };

//   // p5.js draw function
//   p.draw = () => {
//     // Update the myLine object with current and previous mouse positions
//     if (p.mouseIsPressed) {
//       myLine = new MyLine(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
//       myLine.show();
//     }
//   };
// }

// function MyP5Component() {
//   return <P5Wrapper sketch={sketch} />;
// }

// export default MyP5Component;