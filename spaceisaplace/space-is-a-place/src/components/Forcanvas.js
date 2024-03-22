
import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import transition from "../transition";
import { AnimatePresence, motion } from 'framer-motion';
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
						style={{ top: '55vh', marginBottom: '20px', position: 'absolute', MarginRight: '120px' }}
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
	const HEIGHT = 700;
	const BG_COLOR = "white";
	class SomeClass { }

	const someObject = new SomeClass();


	console.log(someObject instanceof SomeClass); // true

	// data arrays
	const [lines, setLines] = useState([]);
	const [shouldReset, setShouldReset] = useState(false);
	let currentLine = [];

	// p5 elements
	let brushImage; // This will hold our image
	let colorPicker;
	let size;
	let saveButton;
	let sel;
	let eraser;
	let imgBrushes;
	let resetButton;

	// const [color] = useState("black");

	const resetSketch = () => {
		setShouldReset(true); // Set the reset flag to true
		setLines([]); // Clear the lines array
	  };
	const preload = (p) => {
		// Initialize imgBrushes as an array
		imgBrushes = brushes.map(brush => p.loadImage(brush));
	};

	const setup = (p, parentRef) => {

		p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(40, 60);
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
		sel.option("Charcoal")
		sel.option("Combined Brush");
		sel.option("Pencil");
		sel.option("Watercolour");
		sel.option("Colored Pencil");
		sel.option("Hatching");
		sel.option("Spray");
		sel.option("Eraser");

		//reset

		resetButton = p.createButton('RESET').parent(parentRef);
		resetButton.position(800, 105);
		resetButton.mousePressed(resetSketch);


		// Color picker
		colorPicker = p.createColorPicker('black').parent(parentRef);
		colorPicker.position(50, 105);


		// Eraser button
		eraser = p.createButton("ERASER").parent(parentRef);
		eraser.position(125, 110);
		eraser.mousePressed(() => sel.selected("Eraser"));

		// Save button
		saveButton = p.createButton("SAVE").parent(parentRef);
		saveButton.position(210, 110);
		saveButton.mousePressed(() => {
			let drawableArea = p.get(0, nonDrawableAreaHeight, WIDTH, HEIGHT - nonDrawableAreaHeight);
			drawableArea.save('drawing', 'png');
		});
		imgBrushes[0] = p.loadImage(brush1);
		imgBrushes[1] = p.loadImage(brush2);
		imgBrushes[2] = p.loadImage(brush3);
		imgBrushes[3] = p.loadImage(brush4);
		imgBrushes[4] = p.loadImage(brush5);
		imgBrushes[5] = p.loadImage(brush6);
		imgBrushes[6] = p.loadImage(brush7);
		imgBrushes[7] = p.loadImage(brush8);

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
		if (shouldReset) {
			p.clear(); // Clear the canvas (use p.clear() instead of p.background(BG_COLOR) to avoid filling the canvas with a color)
			setShouldReset(false); // Reset the flag after clearing the canvas
		  }
		  
		if (p.mouseIsPressed) {
			if (p.mouseY > nonDrawableAreaHeight && p.mouseY < HEIGHT && p.mouseX >= 0 && p.mouseX <= WIDTH) {
				let p5Color = p.color(colorPicker.value());
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


				const point = {
					x: p.mouseX,
					y: p.mouseY,
					color: p5Color,
					weight: size.value(),
					type: sel.value(),
					originalColor: p5Color.toString(),

					charcoalOffsets: Array.from({ length: 5 }, () => ({
						nxOffset: p.random(-7, 7),
						nyOffset: p.random(-7, 7),
						npxOffset: p.random(-7, 7),
						npyOffset: p.random(-7, 7)
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
						offsetY: -10, // This sets the starting y-offset for the lines; adjust as needed
					})),
					sprayDroplets: Array.from({ length: 90 }, () => ({
						offsetX: p.random(-size.value(), size.value()),
						offsetY: p.random(-size.value(), size.value()),
						alpha: p.random(15, 35),
					})),

					// ... other point properties ...
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
					p.stroke(BG_COLOR);
					p.fill(BG_COLOR);
					p.ellipse(point.x, point.y, point.weight, point.weight);


				} else if (point.type === "Splatter Brush" || point.type === "brush2") {
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
							let speed = p.abs(x - px) + p.abs(y - py);

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
				else if (point.type === "Dynamic Pattern") {
					let angle = p.map(point.x, 0, p.width, 0, 360) + p.map(point.y, 0, p.height, 0, 360);
					let val = p.cos(p.radians(angle)) * 12.0;

					for (let a = 0; a < 360; a += 75) {
						let xoff = p.cos(p.radians(a)) * val;
						let yoff = p.sin(p.radians(a)) * val;
						p.fill(point.color);
						p.ellipse(point.x + xoff, point.y + yoff, point.weight, point.weight);
					} // Ensure this closing bracket is present
				} else if (point.type === "Image Brush") {
					if (imgBrushes[0]) {
						p.imageMode(p.CENTER);
						p.strokeWeight(20);
						p.image(imgBrushes[0], point.x, point.y, point.weight, point.weight);
					}
				}
				else if (point.type === "Combined Brush") {
					// Ensure the images are loaded before trying to draw them
					if (imgBrushes[0] && imgBrushes[1] && imgBrushes[4]) { // Ensure both images are loaded

						p.imageMode(p.CENTER);
						p.noStroke(); // Assuming you don't want an outline for the brush images, or adjust as needed

						// Set a fixed offset for the second brush to maintain a slight distance
						const offsetX = 10; // Example horizontal offset
						const offsetY = 10; // Example vertical offset

						// Draw the first brush image at the point location
						p.image(imgBrushes[0], point.x, point.y, point.weight, point.weight);

						// Draw the second brush image with a slight offset to keep distance
						p.image(imgBrushes[1], point.x + offsetX, point.y + offsetY, point.weight, point.weight);

						p.image(imgBrushes[4], point.x, point.y, point.weight, point.weight);
					}
				}
				else if (point.type === "Charcoal") {
					// Use pre-calculated static offsets for the charcoal effect
					point.charcoalOffsets.forEach(offset => {
						let nx = point.x + offset.nxOffset;
						let ny = point.y + offset.nyOffset;
						let npx = nx + offset.npxOffset;
						let npy = ny + offset.npyOffset;

						p.strokeWeight(point.weight / 5); // Adjust stroke weight based on the size
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

				else if (point.type === "Hatching") {
					// Hatching logic
					point.hatchingLines.forEach(line => {
						p.stroke(0);
						p.strokeWeight(1);
						p.line(point.x + line.offsetX, point.y + line.offsetY, point.x + line.offsetX, point.y + line.offsetY + 10);
					});
				}
				else if (point.type === "Spray") {
					point.sprayDroplets.forEach((droplet) => {
						// Ensure that originalColor is a string representing a color
						let col = p.color(point.originalColor || '#000'); // Fallback to black if undefined
						col.setAlpha(droplet.alpha);
						p.stroke(col);
						p.strokeWeight(5);
						p.point(point.x + droplet.offsetX, point.y + droplet.offsetY);
					});
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
		<div >
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
