
import React from 'react';
import Sketch from 'react-p5';
import transition from "../transition";
import ReactDOM from "react-dom";


const Paint = () => {
	const WIDTH = 950;
	const HEIGHT = 850;
	const BG_COLOR = "white";
	class SomeClass { }

	const someObject = new SomeClass();

	console.log(someObject instanceof SomeClass); // true

	// data arrays
	let lines = [];
	let currentLine = [];

	// p5 elements
	let brushImage; // This will hold our image
	let colorPicker;
	let size;
	let saveButton;
	let sel;
	let eraser;

	// const [color] = useState("black");
	const variableEllipse = (p, x, y, px, py) => {
		let speed = p.abs(x - px) + p.abs(y - py);
		p.stroke(speed);
		p.ellipse(x, y, speed, speed);
	};

	

	const setup = (p, parentRef) => {
		
		p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(3, 115);
		p.pixelDensity(1);
		// hide cursor from canvas
		p.noCursor();
		brushImage = p.loadImage('spaceisaplace/space-is-a-place/src/components/Brush2.png', img => {
			console.log('Image loaded', img);
		  });
		// Slider for stroke size
		size = p.createSlider(0, 100, 10).parent(parentRef);
		size.position(300, 110);
		size.style('width', '180px');


		// Selector for brush type
		sel = p.createSelect().parent(parentRef);
		sel.position(500, 110);
		sel.option("Normal Paint Brush (press 'N')");
		sel.option("Splatter Brush (press 'S')");
		// sel.option("Eraser (press 'E')");
		sel.option("brush3");
		sel.option("Variable Ellipse" );
		sel.option("Draw Triangle (press 'T')");
		sel.option("Image");


		// Color picker
		colorPicker = p.createColorPicker('black').parent(parentRef);
		colorPicker.position(50, 105);


		// Eraser button
		eraser = p.createButton("ERASER").parent(parentRef);
		eraser.position(125, 110);
		eraser.mousePressed(() => sel.selected("Eraser (press 'E')"));

		// Save button
		saveButton = p.createButton("SAVE").parent(parentRef);
		saveButton.position(200, 110);
		saveButton.mousePressed(() => {
			let drawableArea = p.get(0, nonDrawableAreaHeight, WIDTH, HEIGHT - nonDrawableAreaHeight);
			drawableArea.save('drawing', 'png');
		});

		brushImage = p.loadImage('/Users/PearlCxndie_1/Documents/GitHub/Space-is-a-Place/spaceisaplace/space-is-a-place/src/components/stroke/Brush2.png', img => {
			console.log('Image loaded', img);
		  }, err => {
			console.error('Failed to load image', err);
		  });
	};
	const variableImage = (p, x, y, px, py) => {
		let speed = p.abs(x - px) + p.abs(y - py);
		let imgSize = speed; // Calculate the size of the image based on speed
		
		if (!brushImage) {
		  console.log('Brush image not loaded');
		  return; // Exit the function if the image hasn't been loaded yet
		}
		
		p.image(brushImage, x - imgSize / 2, y - imgSize / 2, imgSize, imgSize);
	  };
	const nonDrawableAreaHeight = 100;
	const draw = (p) => {

		p.background(BG_COLOR);
		p.strokeJoin(p.ROUND);

		// Draw a border around the canvas to visualize the area better
		p.noFill();
		p.stroke(0); // Black color for border
		p.strokeWeight(2);
		p.rect(0, nonDrawableAreaHeight, WIDTH, HEIGHT - nonDrawableAreaHeight);



		if (p.mouseIsPressed) {
			if (p.mouseY > nonDrawableAreaHeight && p.mouseY < HEIGHT && p.mouseX >= 0 && p.mouseX <= WIDTH) {
				let p5Color = p.color(colorPicker.value());
				const point = {
					x: p.mouseX,
					y: p.mouseY,
					color: p5Color,
					weight: size.value(),
					type: sel.value()
				};
				currentLine.push(point);
			}
		}


		lines.forEach((path) => {
			path.forEach((point, index) => {
				// Use p.fill() and p.stroke() with the p5 color object
				p.stroke(point.color);
				p.strokeWeight(point.weight);

				if (point.type === "Normal Paint Brush (press 'N')" || point.type === "brush1") {
					if (index > 0) {
						const previousPoint = path[index - 1];
						p.line(previousPoint.x, previousPoint.y, point.x, point.y);
					}
				} else if (point.type === "Splatter Brush (press 'S')" || point.type === "brush2") {
					// Splatter effect as specified
					for (let i = 0; i < p.random(1, 9); i++) {
						p.noStroke();
						p.fill(point.color);
						p.strokeWeight(20);
						p.ellipse(
							point.x + p.random(-80, 80,point.weight),
							point.y + p.random(-80, 80,point.weight),
							(point.weight/2 , point.weight/2)
						);
					}
				} else if (point.type === "brush3") {
					// Dot brush effect as specified
					p.strokeWeight(p.random(1, point.weight - 5));
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.ellipse(point.x, point.y, p.random(0, 10), p.random(0, 10));
					p.ellipse(point.x + p.random(-10, 15), point.y + p.random(-10, 10), p.random(0, 5), p.random(0, 5));
					p.stroke(255, 255, 255, 5);
					p.strokeWeight(20);
					p.fill(255, 255, 255, 30);
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.rect(point.x, point.y, p.random(15, point.weight), p.random(-10, point.weight - 10));
				}
				else if (point.type === "Variable Ellipse" || point.type === "brush4") {
					// Assuming index > 0 for drawing; adapt as needed
					if (index > 0) {
						const previousPoint = path[index - 1];
						variableEllipse(p, point.x, point.y, previousPoint.x, previousPoint.y);
					}
				}
				else if (point.type === "Image" || point.type === "brush5") {
					// Draw using the point's coordinates
					if (index > 0) {
						const previousPoint = path[index - 1];
						variableImage(p, point.x, point.y, previousPoint.x, previousPoint.y);
					}
				}
			});
		});

		// Drawing the brush preview at the cursor
		if (p.mouseY > 100) {
			let previewColor = p.color(colorPicker.value()); // Convert to p5 color object
			p.stroke(previewColor);
			p.fill(previewColor);
			p.circle(p.mouseX, p.mouseY, size.value());
		}
	};
	const mousePressed = (p) => {
		// Only start a new line if the click is within the drawable area
		if (p.mouseY > nonDrawableAreaHeight && p.mouseY < HEIGHT) {
			currentLine = [];
			lines.push(currentLine);
		}
	};

	return (
		<div>
			<Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
		</div>
	);
};

const rootElement = document.getElementById("title");
ReactDOM.render(<test1 />, rootElement);

export default transition(Paint);
