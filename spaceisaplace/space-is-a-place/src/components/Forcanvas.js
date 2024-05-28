
import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import transition from "../transition";
import { AnimatePresence, motion } from 'framer-motion';
import ReactDOM from "react-dom";
import brush1 from './stroke/Brush1.png';
import brush2 from './stroke/Brush2.png';
import brush3 from './stroke/Brush3.png';
import brush4 from './stroke/Brush4.png';
// import brush5 from './stroke/Brush5.png';
// import brush6 from './stroke/Brush6.png';
// import brush7 from './stroke/Brush7.png';
// import brush8 from './stroke/Brush8.png';
// import brush9 from './stroke/Brush10.png';
// import brush11 from './stroke/Brush11.png';
// import brush12 from './stroke/Brush12.png';
import save from './stroke/save.png';
import reset from './stroke/reset.png';

// Then you can put them in an array for easier use
const brushes = [brush1, brush2, brush3,brush4];


const AnimatedText = ({ phrases }) => {
	const [active, setActive] = useState(0); // This state is used to cycle through phrases

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prevActive) => (prevActive + 1) % phrases.length); // Loop through phrases
		}, 3000); // Change phrases every 3 seconds

		return () => clearInterval(interval);
	}, [phrases.length]); // Dependency on the number of phrases

	return (
		<div className="title3" style={{ padding: '1000px', margin: '0 auto', width: '100%' }}>
			<AnimatePresence>
				{phrases.map((phrase, index) => (
					<motion.span
						key={phrase.text}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: active === index ? 1 : 0, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className={phrase.className} // Using the className passed with each phrase
						style={{  position: 'absolute',
						top: '20vh', // Adjust this value to align vertically after rotation
						left: '50px', // Move text a bit to the right from the left-most side
						transform: 'rotate(-90deg) translateX(-55%)', // Adjust the horizontal position after rotation
						transformOrigin: 'left bottom', // Sets the pivot point of the rotation
						marginBottom: '20px'}}
					>
						{phrase.text}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};


const Paint = () => {
	const WIDTH = 950;
	const HEIGHT = 600;
	const BG_COLOR = "white";
	class SomeClass { }

	const someObject = new SomeClass();

	const clearCanvas = (p) => {
        lines = []; // Reset lines array
        p.background(BG_COLOR); // Clear the canvas visually
    };

	console.log(someObject instanceof SomeClass); // true

	// data arrays
	let lines = [];
	let currentLine = [];

	// p5 elements
	let colorPicker;
	let size;
	let saveButton;
	let sel;
	let eraser;
	let imgBrushes;
	let resetButton;

	// const [color] = useState("black");


	const preload = (p) => {
		// Initialize imgBrushes as an array
		imgBrushes = brushes.map(brush => p.loadImage(brush));
	};


	const setup = (p, parentRef) => {


		p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(460, 50);
		p.pixelDensity(1);
		// Draw a border around the canvas to visualize the area better
		p.noFill();
		p.stroke(0); // Black color for border
		p.strokeWeight(2);
		p.rect(0, nonDrawableAreaHeight, WIDTH, HEIGHT - nonDrawableAreaHeight);
		p.fill(0); // Set the text color to black
		p.textSize(16); // Set the text size
	

		// hide cursor from canvas
		// p.noCursor();
		// brushImage = p.loadImage('./stroke/Brush2.png', img => {
		// 	console.log('Image loaded', img);
		// });



		// Slider for stroke size

		size = p.createSlider(0, 100, 20).parent(parentRef);
		size.position(180, 350);
		size.style('width', '180px');
	


		// Selector for brush type
		sel = p.createSelect().parent(parentRef);
		sel.id('mySelectDropdown'); // Adding an ID for specific styling
		sel.position(180, 400);
		sel.option("Normal Paint Brush");
		sel.option("Modernism");
		sel.option("Abstract");
		sel.option("ColourField Painting");
		sel.option("Cubism");
		sel.option("Impressionism");
		sel.option("Charcoal")
		sel.option("Pencil");
		sel.option("Watercolour");
		sel.option("Colored Pencil");
		sel.option("Marker");
		sel.option("Spray");
		sel.option("Combined Stamp");
		sel.option("Square Stamp");
		sel.option("Eraser");

		//reset

		 resetButton = p.createImg(reset, 'reset button');
		resetButton.size(50, 50); 
        resetButton.parent(parentRef);
        resetButton.position(180, 510);
        resetButton.mousePressed(() => clearCanvas(p)); 
		resetButton.mouseOver(() => resetButton.style('transform', 'scale(0.8)'));
		resetButton.mouseOut(() => resetButton.style('transform', 'scale(1)')); 


		// Color picker
		colorPicker = p.createColorPicker('black').parent(parentRef);
		colorPicker.position(180, 300);


		// Eraser button
		eraser = p.createButton("ERASER").parent(parentRef);
		eraser.position(180, 450);
		eraser.mousePressed(() => {
			sel.value("Eraser"); 
		});
		// Save button
		saveButton = p.createImg(save, 'Save Icon');
  
		// Set button attributes
		saveButton.size(50, 50); // Set the size as needed
		saveButton.position(180, 580); // Position it on the canvas
		saveButton.mousePressed(saveCanvasImage); // Assign a mousePressed event
		 // When the mouse hovers over the button, apply a tint
		 saveButton.mouseOver(() => saveButton.style('transform', 'scale(0.8)'));
		 saveButton.mouseOut(() => saveButton.style('transform', 'scale(1)')); 

		function saveCanvasImage() {
			// Calculate the drawable area based on your canvas setup
			let drawableArea = p.get(0, nonDrawableAreaHeight, WIDTH, HEIGHT - nonDrawableAreaHeight);
			// Save the drawable area as a PNG image
			drawableArea.save('drawing', 'png');
		  }

	
		imgBrushes[0] = p.loadImage(brush1);
		imgBrushes[1] = p.loadImage(brush2);
		imgBrushes[2] = p.loadImage(brush3);
		imgBrushes[3] = p.loadImage(brush4);
	};


	const nonDrawableAreaHeight = 100;


	const draw = (p) => {

		p.background(BG_COLOR);
		p.strokeJoin(p.ROUND);



		if (p.mouseIsPressed) {
			if (p.mouseY > nonDrawableAreaHeight && p.mouseY < HEIGHT && p.mouseX >= 0 && p.mouseX <= WIDTH) {
				let p5Color = p.color(colorPicker.value());
				p.fill(p5Color);
				p.noStroke();
				p.ellipse(p.mouseX, p.mouseY, size.value(), size.value());
				// let type = sel.value(); // Assuming this is how you get the current tool/type
				let abstractShapes = Array.from({ length: 5 }, () => {
					let shapeType = p.random(["ellipse", "rect"]);
					return {
						shapeType: shapeType,
						offsetX: p.random(-10, 10),
						offsetY: p.random(-10, 10),
						sizeX: shapeType === "ellipse" ? p.random(10, size.value()) : p.random(5, size.value() * 0.8),
						sizeY: shapeType === "ellipse" ? p.random(10, size.value()) : p.random(5, size.value() * 0.8),
						strokeWeight: shapeType === "ellipse" ? p.random(1, 3) : p.random(0.5, 2),
						opacity: p.random(20, 70) // Adjust as needed for desired effect

					};

				});
				if (p.mouseX >= 0 && p.mouseX <= WIDTH && p.mouseY >= 0 && p.mouseY <= HEIGHT) {
					p.noCursor();
				} else {
					p.cursor(); // Default cursor outside the canvas area
				}

				const point = {
					x: p.mouseX,
					y: p.mouseY,
					color: p5Color,
					weight: size.value(),
					type: sel.value(),
					originalColor: p5Color.toString(),

					charcoalOffsets: Array.from({ length: 5 }, () => ({
						nxOffset: p.random(-10, 10),
						nyOffset: p.random(-20, 20),
						npxOffset: p.random(-10, 10),
						npyOffset: p.random(-10, 10)
					})),
					pencilOffsets: Array.from({ length: 3 }, () => ({
						offsetX: p.random(-5, 5),
						offsetY: p.random(-3, 3)
					})),
					watercolorDroplets: Array.from({ length: 20 }, () => ({
						offsetX: p.random(-size.value(), size.value()), // Random offset from the center point
						offsetY: p.random(-size.value(), size.value()),
						radius: p.random(size.value() * 0.2, size.value() * 0.5), // Random radius
						opacity: p.random(40, 100)
					})),
					abstractShapes: abstractShapes,
					coloredPencilOffsets: Array.from({ length: 10 }, () => ({
						offsetX: p.random(-4, 4),
						offsetY: p.random(-4, 4),
						offsetPX: p.random(-4, 4),
						offsetPY: p.random(-4, 4)
					})),

					// Replace 5 with the actual number of lines you need for the hatching effect
					hatchingLines: Array.from({ length: 8 }, (_, i) => ({
						offsetX: i * 2 - 5, // This will create lines spread from -5 to 5 on the x-axis
						offsetY: -40, // This sets the starting y-offset for the lines; adjust as needed
					})),
					sprayDroplets: Array.from({ length: 70 }, () => { // Further reduced number for better performance
						const angle = p.random(0, p.TWO_PI);
						// Increase the spread radius significantly to cover more area quickly
						const radius = Math.sqrt(p.random()) * size.value() * 3; 
						const offsetX = radius * Math.cos(angle);
						const offsetY = radius * Math.sin(angle);
					
						return {
							offsetX,
							offsetY,
							alpha: p.random(50, 100), // Higher alpha for more visible impact
						};
					}),
				};

				currentLine.push(point);

			}
		}
		lines.forEach((path) => {
			path.forEach((point, index) => {
				p.stroke(point.color);
				p.strokeWeight(point.weight);

				if (point.type === "Normal Paint Brush" || point.type === "brush1") {
					if (index > 0) {
						const previousPoint = path[index - 1];
						p.line(previousPoint.x, previousPoint.y, point.x, point.y);
					}
				} else if (point.type === "Eraser") {
					if (index > 0) {
						const previousPoint = path[index - 1];
						p.stroke(BG_COLOR); // Set the stroke color to the background color
						p.strokeWeight(point.weight); // Use the weight for the line thickness
						p.line(previousPoint.x, previousPoint.y, point.x, point.y);
					}
					p.fill(BG_COLOR); // Set the fill color to the same background color
					p.noStroke(); // No outline for the ellipse
					p.ellipse(point.x, point.y, point.weight, point.weight);
				}
				
				else if (point.type === "Modernism") {
					for (let i = 0; i < p.random(1, 9); i++) {
						// Remove the stroke or set a smaller stroke weight as needed
						p.strokeWeight(4); // Smaller stroke weight
						p.stroke(point.color); // Optional: Add this line if you want the splatter to have an outline
						p.fill(point.color);

						// Draw the ellipses at the static position of the point, with a reduced size
						p.ellipse(
							point.x,
							point.y,
							point.weight / 4, // Adjusted size for smaller effect
							point.weight / 4
						);
					}
				} else if (point.type === "Abstract") {
					point.abstractShapes.forEach(shape => {
						p.strokeWeight(shape.strokeWeight);
						let col = p.color(point.color);
						col.setAlpha(shape.opacity); // You might need to adjust the opacity based on your requirements
						p.stroke(col);
						p.fill(col);
						if (shape.shapeType === "ellipse") {
							p.ellipse(point.x + shape.offsetX, point.y + shape.offsetY, shape.sizeX, shape.sizeY);
						} else if (shape.shapeType === "rect") {
							p.rect(point.x + shape.offsetX, point.y + shape.offsetY, shape.sizeX, shape.sizeY);
						}
					});
				} else if (point.type === "ColourField Painting" || point.type === "brush4") {
					if (index > 0) {
						const previousPoint = path[index - 1];

						p.fill(point.color); // Use the color saved at the point of drawing
						p.stroke(point.color); // Use the same color for the stroke

						const variableEllipse = (x, y, px, py) => {
							let speed = (p.abs(x - px)/2) + (p.abs(y - py)/2);

							p.ellipse(x, y, speed, speed);
						};

						variableEllipse(point.x, point.y, previousPoint.x, previousPoint.y);
					}
				} else if (point.type === "Cubism") {
					// Use the point's stored color and size
					const rectColor = point.color;
					const rectWidth = point.weight;
					const rectHeight = point.weight * 1.33;

					p.fill(rectColor);
					p.stroke(rectColor);
					// Draw the rectangle based on the point's properties
					p.rect(point.x - rectWidth / 2, point.y - rectHeight / 2, rectWidth, rectHeight);
				}
				else if (point.type === "Impressionism") {
					let angle = p.map(point.x, 0, p.width, 0, 360) + p.map(point.y, 0, p.height, 0, 360);
					let val = p.cos(p.radians(angle)) * 20.0;

					for (let a = 0; a < 360; a += 75) {
						let xoff = p.cos(p.radians(a)) * val;
						let yoff = p.sin(p.radians(a)) * val;
						p.fill(point.color);
						p.ellipse(point.x + xoff, point.y + yoff, point.weight, point.weight);
					} // Ensure this closing bracket is present
				} else if (point.type === "Square Stamp") {
					if (imgBrushes[0]) {
						p.imageMode(p.CENTER);
						p.strokeWeight(20);
						p.image(imgBrushes[0], point.x, point.y, point.weight, point.weight);
					}
				}
				else if (point.type === "Combined Stamp") {
					// Ensure the images are loaded before trying to draw them
					if (imgBrushes[0] && imgBrushes[1] && imgBrushes[3]) { // Ensure both images are loaded

						p.imageMode(p.CENTER);
						p.noStroke(); // Assuming you don't want an outline for the brush images, or adjust as needed

						// Set a fixed offset for the second brush to maintain a slight distance
						const offsetX = 10; // Example horizontal offset
						const offsetY = 10; // Example vertical offset

						// Draw the first brush image at the point location
						p.image(imgBrushes[0], point.x, point.y, point.weight, point.weight);

						// Draw the second brush image with a slight offset to keep distance
						p.image(imgBrushes[1], point.x + offsetX, point.y + offsetY, point.weight, point.weight);

						p.image(imgBrushes[3], point.x, point.y, point.weight, point.weight);
					}
				}
				else if (point.type === "Charcoal") {
					// Use pre-calculated static offsets for the charcoal effect
					point.charcoalOffsets.forEach(offset => {
						let nx = point.x + offset.nxOffset;
						let ny = point.y + offset.nyOffset;
						let npx = nx + offset.npxOffset;
						let npy = ny + offset.npyOffset;
						p.strokeWeight(point.weight / 8); // Adjust stroke weight based on the size
						p.stroke(p.color(point.color)); // Use the stored color
						p.line(nx, ny, npx, npy);
					});
				}
				else if (point.type === "Pencil") {
					// Use pre-calculated offsets for the pencil effect to ensure it remains static
					point.pencilOffsets.forEach(offset => {
						let nx = point.x + offset.offsetX;
						let ny = point.y + offset.offsetY;
						let npx = nx + offset.offsetX; // Use the same offset for starting and ending points
						let npy = ny + offset.offsetY; // Use the same offset for starting and ending points
						p.strokeWeight(point.weight * 0.1); // Adaptation for size, adjust as needed
						p.stroke(p.color(point.color)); // Use color from color picker
						p.line(nx, ny, npx, npy);
					});
				}
				else if (point.type === "Watercolour") {
					point.watercolorDroplets.forEach(droplet => {
						let col = p.color(point.color);
						col.setAlpha(droplet.opacity);
						p.noStroke();
						p.fill(col);
						p.ellipse(point.x + droplet.offsetX, point.y + droplet.offsetY, droplet.radius * 2, droplet.radius * 2);
					});
				}
				else if (point.type === "Colored Pencil") {
					// Colored Pencil logic
					point.coloredPencilOffsets.forEach(offset => {
						let nx = point.x + offset.offsetX;
						let ny = point.y + offset.offsetY;
						let sw = 1.5 + p.noise(nx * 0.01, ny * 0.01) * point.weight;
						p.strokeWeight(sw);
						p.stroke(point.color);
						p.line(nx, ny, nx + offset.offsetPX, ny + offset.offsetPY);
					});
				}

				else if (point.type === "Marker") {
					// Hatching logic
					point.hatchingLines.forEach(line => {
						p.stroke(0);
						p.strokeWeight(1);
						p.line(point.x + line.offsetX, point.y + line.offsetY, point.x + line.offsetX, point.y + line.offsetY + 20);
					});
				}
				else if (point.type === "Spray") {
					p.strokeWeight(4); // Further reduce stroke weight for minimal drawing cost
					point.sprayDroplets.forEach((droplet) => {
						let col = p.color(point.originalColor || '#000');
						col.setAlpha(droplet.alpha); // Consider even higher alpha if visibility is an issue
						p.stroke(col);
						p.point(point.x + droplet.offsetX, point.y + droplet.offsetY);
					});
				}
			});
		});

		p.stroke(0); // Black color for border
		p.strokeWeight(2);
		p.noFill();
		p.rect(0, nonDrawableAreaHeight, WIDTH, HEIGHT - nonDrawableAreaHeight);
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
	
	useEffect(() => {
		const cursorElem = document.querySelector('.custom-cursor');

		const updateCursorPosition = (e) => {
			if (cursorElem) { // Check if the element exists
				cursorElem.style.left = `${e.clientX}px`;
				cursorElem.style.top = `${e.clientY}px`;
			}
		};

		window.addEventListener('mousemove', updateCursorPosition);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('mousemove', updateCursorPosition);
		};
	}, []);

	return (
		
		<div className="paint-container">
  <div className="control-panel">
    <div className="control-item">
      <p>Color Picker:</p>
    </div>
    <div className="control-item">
      <p> Size Slider:</p>
    </div>
    <div className="control-item">
      <p> Brush Type:</p>
    </div>
    <div className="control-item">
      <p>Eraser Tool:</p>
    </div>
    <div className="control-item2">
      <p >Reset Canvas:</p>
    </div>
    <div className="control-item2">
      <p> Save Drawing:</p>
    </div>
  </div>
			<AnimatedText
				phrases={[
					{ text: "Abstraction/Abstract art" },
					{ text: "Abstract Expressionism " },
					{ text: "Colour Field painting " },
					{ text: "Expressionism" },
					{ text: "Cubism " },
					{ text: "Conceptual art " },
					{ text: "Installation art " },
					{ text: "Minimalism" },
					{ text: "Modernism " },
					{ text: "Post-Impressionism" },
					{ text: "Pop Art " },
					{ text: "Romanticism" },
					{ text: "Modernism" },
					{ text: "Impressionism" },
				]}
			/>
			<Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} />
		</div>
		
	);
};

const rootElement = document.getElementById("title");
ReactDOM.render(<test1 />, rootElement);

export default transition(Paint);
