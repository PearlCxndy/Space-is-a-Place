import Sketch from "react-p5"
import transition from "../transition";
import ReactDOM from "react-dom";
import styled from "styled-components";
// import "./App.css"

export const Header = styled.div`
position: absolute;
height: 100vh;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
border: none;
margin: 10px;
cursor: pointer;
`;
const Paint = () => {
	const WIDTH = 400
	const HEIGHT = 400
	const BG_COLOR = "black"

	// data arrays
	let lines = []
	let currentLine = []

	// p5 elements
	let colorPicker
	let size
	let saveButton

	const setup = (p, parentRef) => {
		p.createCanvas(WIDTH, HEIGHT).parent(parentRef)
		p.pixelDensity(1)
		// hide cursor from canvas
		// p.noCursor()

		// slider for stroke size
		size = p.createSlider(1, 20, 8, 1)
		// size.position(0, 0, "relative");

		// color picker
		colorPicker = p.createColorPicker("#ed225d")
		colorPicker.class("picker")
		colorPicker.position(0, 0, "relative")
		colorPicker.style("border: none")

		// save button
		saveButton = p.createButton("SAVE")
		saveButton.style("border: none")
		saveButton.style("padding-top: 10px")
		saveButton.style("padding-bottom: 10px")
		saveButton.style("padding-left: 20px")
		saveButton.style("padding-right: 20px")

		// save canvas function
		const save = () => {
			return p.saveCanvas()
		}
		saveButton.mousePressed(save)
	}

	const draw = (p) => {
		p.background(BG_COLOR)

		p.strokeJoin(p.ROUND)

		if (p.mouseIsPressed) {
			// object with x and y axis of mouse point
			const point = {
				x: p.mouseX,
				y: p.mouseY,
				color: colorPicker.color(),
				weight: size.value()
			}
			// add point object to path array
			currentLine.push(point)
		}

		p.beginShape()

		lines.forEach((path) => {
			p.beginShape()
			path.forEach((point) => {
				p.drawingContext.shadowOffsetX = 2
				p.drawingContext.shadowOffsetY = -3
				p.drawingContext.shadowBlur = point.weight * 5
				p.drawingContext.shadowColor = point.color
				p.stroke(point.color)
				p.strokeWeight(point.weight)
				p.vertex(point.x, point.y)
			})
			p.endShape()
		})

		// mouse dot - size and color of selections
		p.stroke(colorPicker.color())
		p.circle(p.mouseX, p.mouseY, size.value())
		p.noFill()
	}

	const mousePressed = () => {
		currentLine = []
		lines.push(currentLine)
	}

	const windowResized = (p5) => {
		p5.resizeCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8)
	}

	return (
		<div><Header>
			<Sketch
				setup={setup}
				draw={draw}
				mousePressed={mousePressed}
				windowResized={windowResized}
			/>
         </Header>
		</div>
	)
}
const rootElement = document.getElementById("title");
ReactDOM.render(<Paint/>, rootElement);
export default transition(Paint)
