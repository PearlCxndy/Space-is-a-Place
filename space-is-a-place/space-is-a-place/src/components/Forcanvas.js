import React from 'react';
import Sketch from 'react-p5';

const Paint = () => {
    const WIDTH = 950;
    const HEIGHT = 650;
    const BG_COLOR = "black";

    // data arrays
    let lines = [];
    let currentLine = [];

    // p5 elements
    let colorPicker;
    let size;
    let saveButton;
    let sel;
    let eraser;

	
    const setup = (p, parentRef) => {

        p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(3, 150);
        p.pixelDensity(1);
        // hide cursor from canvas
        p.noCursor();

        // Slider for stroke size
        size = p.createSlider(0,100,10).parent(parentRef);
        size.position(300, 110);
        size.style('width', '180px');


        // Selector for brush type
        sel = p.createSelect().parent(parentRef);
        sel.position(500, 110);
        sel.option("Normal Paint Brush (press 'N')");
        sel.option("Splatter Brush (press 'S')");
        // sel.option("Eraser (press 'E')");
        sel.option("brush3");
        sel.option("Draw Triangle (press 'T')");

        // Color picker
        colorPicker = p.createColorPicker('#ffffff').parent(parentRef);
        colorPicker.position(50, 105);
		

        // Eraser button
        eraser = p.createButton("ERASER").parent(parentRef);
        eraser.position(125, 110);
        eraser.mousePressed(() => sel.selected("Eraser (press 'E')"));

        // Save button
        saveButton = p.createButton("SAVE").parent(parentRef);
        saveButton.position(200, 110);
        saveButton.mousePressed(() => p.saveCanvas('canvas', 'png'));

    };

	const draw = (p) => {

		p.background(BG_COLOR);
		p.strokeJoin(p.ROUND);

		p.fill(255); // White text color
		p.noStroke();
		p.textSize(16); // Set text size
		p.text(`Brush Size: ${size.value()}`, 10, HEIGHT - 20); 

	
		if (p.mouseIsPressed && p.mouseY > 100) {
			// Convert color value to p5 color object for consistency
			let p5Color = p.color(colorPicker.value());
			const point = {
				x: p.mouseX,
				y: p.mouseY,
				color: p5Color, // Use p5 color object for consistency
				weight: size.value(),
				type: sel.value()
			};
			currentLine.push(point);
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
					for (let i = 0; i < p.random(1, 10); i++) {
						p.noStroke();
						p.fill(point.color);
						p.ellipse(
							point.x + p.random(-100, 100),
							point.y + p.random(-100, 100),
							point.weight, point.weight
						);
					}
				} else if (point.type === "brush3") {
					// Dot brush effect as specified
					p.strokeWeight(p.random(1, point.weight));
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.ellipse(point.x, point.y, p.random(0, 10), p.random(0, 10));
					p.ellipse(point.x + p.random(-10, 15), point.y + p.random(-10, 10), p.random(0, 5), p.random(0, 5));
					p.stroke(255, 255, 255, 5);
					p.strokeWeight(20);
					p.fill(255, 255, 255, 30);
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.rect(point.x, point.y, p.random(15, point.weight), p.random(-10, point.weight - 10));
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
		if (p.mouseY > 100) { // Only start a new line if the click is below the control panel
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

export default Paint;
