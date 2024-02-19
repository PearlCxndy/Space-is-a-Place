import Sketch from "react-p5"


const Paint = () => {
	const WIDTH = 1200
	const HEIGHT = 900
	const BG_COLOR = "black"

	// data arrays
	let lines = []
	let currentLine = []

	// p5 elements
	let colorPicker
	let size
	let saveButton


	const setup = (p, parentRef) => {
		p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(1,150)
		p.pixelDensity(1)
		// hide cursor from canvas
		p.noCursor()

		// slider for stroke size
		size = p.createSlider(1, 100, 20, 1);
		size.position(300,110);
		size.style('width', '180px');

		// color picker
		colorPicker = p.createColorPicker('#000000');
  		colorPicker.position(50, 105);

	  // save button
		saveButton = p.createButton("SAVE").parent(parentRef).center()
		// saveButton.style("border: none")
		// saveButton.style("padding-top: 10px")
		// saveButton.style("padding-bottom: 10px")
		// saveButton.style("padding-left: 20px")
		// saveButton.style("padding-right: 20px")
		saveButton.position(180, 110);

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

	// const windowResized = (p5) => {
	// 	p5.resizeCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8)
	// }

	return (
		<div>
			<Sketch
				setup={setup}
				draw={draw}
				mousePressed={mousePressed}
				// windowResized={windowResized}
			/>
		</div>
	)
}

export default Paint
