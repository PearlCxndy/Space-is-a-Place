
import React from 'react';
import Sketch from 'react-p5';
import transition from "../transition";
import ReactDOM from "react-dom";
import brush1 from './stroke/Brush1.png';
import brush2 from './stroke/Brush2.png';
import brush3 from './stroke/Brush3.png';
import brush4 from './stroke/Brush4.png';
import brush5 from './stroke/Brush5.png';
import brush6 from './stroke/Brush6.png';
import brush7 from './stroke/Brush7.png';
import brush8 from './stroke/Brush8.png';
import brush9 from './stroke/Brush10.png';
import brush11 from './stroke/Brush11.png';
import brush12 from './stroke/Brush12.png';
import brush13 from './stroke/Brush13.png';
import brush14 from './stroke/Brush14.png';
import brush15 from './stroke/Brush15.png';
import brush16 from './stroke/Brush16.png';


// Then you can put them in an array for easier use
const brushes = [brush1, brush2, brush3, brush4, brush5, brush6, brush7, brush8, brush9, brush11, brush12, brush13, brush14, brush15, brush16];




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
	let imgBrush;

	// const [color] = useState("black");



	const setup = (p, parentRef) => {

		p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(3, 115);
		p.pixelDensity(1);
		// hide cursor from canvas
		p.noCursor();
		brushImage = p.loadImage('./stroke/Brush2.png', img => {
			console.log('Image loaded', img);
		});
		// Slider for stroke size
		size = p.createSlider(0, 100, 10).parent(parentRef);
		size.position(300, 110);
		size.style('width', '180px');


		// Selector for brush type
		sel = p.createSelect().parent(parentRef);
		sel.position(500, 110);
		sel.option("Normal Paint Brush");
		sel.option("Splatter Brush");
		// sel.option("Eraser (press 'E')");
		sel.option("Abstract");
		sel.option("ColourField Painting");
		sel.option("Image Brush");
		sel.option("Cubism");
		sel.option("Dynamic Pattern");



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
		imgBrush = p.loadImage(brush1, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush2, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush3, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush4, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush5, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush6, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush7, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush8, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush9, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush11, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush12, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush13, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush14, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush15, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});
		imgBrush = p.loadImage(brush16, img => {
			console.log('Image brush loaded', img);
		}, err => {
			console.error('Failed to load image brush', err);
		});

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
		  
			  if (point.type === "Normal Paint Brush" || point.type === "brush1") {
				if (index > 0) {
				  const previousPoint = path[index - 1];
				  p.line(previousPoint.x, previousPoint.y, point.x, point.y);
				}
			  } else if (point.type === "Eraser") {
				// Assuming BG_COLOR is your background color
				p.stroke(BG_COLOR);
				p.fill(BG_COLOR);
				p.ellipse(point.x, point.y, point.weight, point.weight);
			  } else if (point.type === "Splatter Brush" || point.type === "brush2") {
				for (let i = 0; i < p.random(1, 9); i++) {
					// Remove the stroke or set a smaller stroke weight as needed
					p.strokeWeight(3); // Smaller stroke weight
					p.stroke(point.color); // Optional: Add this line if you want the splatter to have an outline
					p.fill(point.color);

					// Draw the ellipses at the static position of the point, with a reduced size
					p.ellipse(
						point.x,
						point.y,
						point.weight / 4, // Adjusted size for smaller effect
						point.weight / 4  // Adjusted size for smaller effect
					);
				}
			  } else if (point.type === "Abstract") {
				p.strokeWeight(p.random(1, point.weight - 5));
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.ellipse(point.x, point.y, p.random(0, 10), p.random(0, 10));
					p.ellipse(point.x + p.random(-10, 15), point.y + p.random(-10, 10), p.random(0, 5), p.random(0, 5));
					p.stroke(255, 255, 255, 5);
					p.strokeWeight(20);
					p.fill(255, 255, 255, 30);
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.rect(point.x, point.y, p.random(15, point.weight), p.random(-10, point.weight - 10));
			  } else if (point.type === "ColourField Painting" || point.type === "brush4") {
				if (index > 0) {
					const previousPoint = path[index - 1];

					// Use the stored color for each point for both filling and stroking
					p.fill(point.color); // Use the color saved at the point of drawing
					p.stroke(point.color); // Use the same color for the stroke

					const variableEllipse = (x, y, px, py) => {
						let speed = p.abs(x - px) + p.abs(y - py);

						// Draw the ellipse with the previously defined stroke and fill colors
						p.ellipse(x, y, speed, speed);
					};

					variableEllipse(point.x, point.y, previousPoint.x, previousPoint.y);
				}
			  } else if (point.type === "Cubism") {
				let p5Color = p.color(colorPicker.value()); // Assuming colorPicker is accessible here
					p.fill(p5Color);
					p.stroke(p5Color); // Apply the same color for strok
					// Dynamically adjust the rectangle's size based on the size slider
					let rectSize = size.value(); // Use the size slider's value

					// Calculate width and height based on the size slider's value
					let rectWidth = rectSize; // You can adjust this formula as needed
					let rectHeight = rectSize * 1.33; // Keep a consistent aspect ratio or adjust as you prefer

					// Draw the rectangle centered on the mouse position
					// Adjust starting position based on dynamic size
					p.rect(point.x - rectWidth / 2, point.y - rectHeight / 2, rectWidth, rectHeight);
			  } else if (point.type === "Dynamic Pattern") {
				let angle = p.map(point.x, 0, p.width, 0, 360) + p.map(point.y, 0, p.height, 0, 360);
				let val = p.cos(p.radians(angle)) * 12.0;

				for (let a = 0; a < 360; a += 75) {
					let xoff = p.cos(p.radians(a)) * val;
					let yoff = p.sin(p.radians(a)) * val;
					p.fill(point.color);
					p.ellipse(point.x + xoff, point.y + yoff, point.weight, point.weight);
				} // Ensure this closing bracket is present
			  } else if (point.type === "Image Brush") {
				if (imgBrush) {
				  p.imageMode(p.CENTER);
				  p.image(imgBrush, point.x, point.y, point.weight, point.weight);
				}
			  }
			  // No need for extra brackets after each if-else if statement
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
