import React from 'react';
import Sketch from 'react-p5';

const Paint = () => {
    const WIDTH = 1098;
    const HEIGHT = 900;
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
        p.createCanvas(WIDTH, HEIGHT).parent(parentRef).position(1, 150);
        p.pixelDensity(1);
        // hide cursor from canvas
        p.noCursor();

        // Slider for stroke size
        size = p.createSlider(1, 100, 20, 1).parent(parentRef);
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
	
		if (p.mouseIsPressed && p.mouseY > 100) { // Ensure drawing only happens below the control panel
			const point = {
				x: p.mouseX,
				y: p.mouseY,
				color: colorPicker.value(), // Assuming colorPicker is accessible
				weight: size.value(), // Assuming size is accessible
				type: sel.value() // Assuming sel is accessible
			};
			currentLine.push(point);
		}
	
		lines.forEach((path) => {
			path.forEach((point, index) => {
				p.stroke(point.color);
				p.strokeWeight(point.weight);
	
				// Handle normal paint brush
				if (point.type === "Normal Paint Brush (press 'N')" || point.type === "brush1") {
					if (index > 0) {
						const previousPoint = path[index - 1];
						p.line(previousPoint.x, previousPoint.y, point.x, point.y);
					}
				} else if (point.type === "Splatter Brush (press 'S')" || point.type === "brush2") {
					// Handle random line brush
					// This logic needs to be adjusted if you want to mimic the behavior of "brush2" exactly as described
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
					// Handle dot brush
					// Dot brush logic as described, integrating it into the forEach loop for each point
					p.strokeWeight(p.random(1, point.weight));
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.ellipse(point.x, point.y, p.random(0, 30), p.random(0, 20));
					p.ellipse(point.x + p.random(-20, 25), point.y + p.random(-20, 25), p.random(0, 5), p.random(0, 5));
					p.stroke(255, 255, 255, 5);
					p.strokeWeight(30);
					p.fill(255, 255, 255, 30);
					p.ellipse(point.x, point.y, p.random(0, point.weight), p.random(0, point.weight - 10));
					p.rect(point.x, point.y, p.random(15, point.weight), p.random(-10, point.weight - 10));
				}
				// Add more conditions for other brushes as needed
			});
		});
	
		// Draw the current brush preview at the cursor
		if (p.mouseY > 100) {
			p.stroke(colorPicker.color());
			p.fill(colorPicker.color());
			p.circle(p.mouseX, p.mouseY, size.value());
		}
		// Draw the current brush preview at the cursor
		if (p.mouseY > 100) { // Only show brush preview below the control panel
			p.stroke(colorPicker.color());
			p.fill(colorPicker.color());
			p.circle(p.mouseX, p.mouseY, size.value());
		}


        // Draw the current brush preview at the cursor
        if (p.mouseY > 50) { // Only show brush preview below the control panel
            p.stroke(colorPicker.color());
            p.fill(colorPicker.color());
            p.circle(p.mouseX, p.mouseY, size.value());
        }
    };

    const mousePressed = (p) => {
        if (p.mouseY > 150) { // Start a new line only if the click is below the control panel
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
