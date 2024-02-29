import transition from "../transition";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ReactSketchCanvas } from "react-sketch-canvas";
const Paint2 = () => {
  const [state, setState] = useState({
    some: " ",
    color: "white",
    bgrColor: "white",
    penSize: 5,
    eraserSize: 5,
    otherMode: "Eraser",
    eraserOn: false
  });
  const canvas = React.createRef();
  const selectPenColor = (col) => {
    setState({ ...state, color: col });
  };
  const selectBgrColor = (col) => {
    setState({ ...state, bgrColor: col });
  };
  const selectPenSize = (size) => {
    setState({ ...state, penSize: size });
  };
  const selectEraserSize = (size) => {
    setState({ ...state, eraserSize: size });
  };
  return (
    <div>
      <ReactSketchCanvas
        style={{
          // border: "0.055rem solid #000"
        }}
        ref={canvas}
        strokeWidth={state.penSize}
        eraserWidth={state.eraserSize}
        strokeColor={state.color}
        canvasColor={state.bgrColor}
      />
      <button
        onClick={() => {
          canvas.current.eraseMode(!state.eraserOn);
          state.otherMode === "Eraser"
            ? setState({ ...state, eraserOn: true, otherMode: "Pen" })
            : setState({ ...state, eraserOn: false, otherMode: "Eraser" });
        }}
      >
        {state.otherMode}
      </button>
      <button
        onClick={() => {
          setState({
            some: " ",
            color: "white",
            bgrColor: "pink",
            penSize: 5,
            eraserSize: 5,
            otherMode: "Eraser",
            eraserOn: false
          });
          canvas.current.resetCanvas();
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          canvas.current.redo();
        }}
      >
        Redo
      </button>
      <button
        onClick={() => {
          canvas.current.undo();
        }}
      >
        Undo
      </button>
      <div class="color-picker">
        <input
          type="color"
          value={state.color}
          onChange={(e) => selectPenColor(e.target.value)}
        />
        <input
          type="color"
          value={state.bgrColor}
          onChange={(e) => selectBgrColor(e.target.value)}
        />
        <input
          type="range"
          min="0"
          max="42"
          value={state.thickness}
          onChange={(e) => selectPenSize(e.target.value)}
        />
        <input
          type="range"
          min="0"
          max="42"
          value={state.thickness}
          onChange={(e) => selectEraserSize(e.target.value)}
        />
      </div>
      {/* {state.some !== "" && <img src={state.some} />} */}
    </div>
  );
};
const rootElement = document.getElementById("title");
ReactDOM.render(<Paint2 />, rootElement);
export default transition(Paint2);
