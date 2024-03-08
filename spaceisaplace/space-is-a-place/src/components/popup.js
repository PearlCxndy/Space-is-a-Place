import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";


const MAX_POINTS = 30;

const Popup = ({ setIsOpenPopup, children }) => {
    const [points, setPoints] = useState([]);

    const handleMouseMove = (e) => {
        // Calculate the relative position of the mouse to the popup
        const boundingBox = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - boundingBox.left;
        const y = e.clientY - boundingBox.top;

        // Update the points array with the new point
        setPoints((prevPoints) => {
            const newPoints = [...prevPoints, `${x},${y}`];
            if (newPoints.length > MAX_POINTS) {
                newPoints.shift(); // Remove the oldest point
            }
            return newPoints;
        });
    };

    console.log(points); // Log the current points to confirm they're being captured

    return (
        <div
            onClick={() => setIsOpenPopup(false)}
            style={{
                position: 'fixed',
                background: 'rgba(0,0,0,0.6)',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                onMouseMove={handleMouseMove}
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '8px',
                    width: '500px', // Increased width for demonstration
                    height: '300px', // Set a height for demonstration
                    padding: '20px 10px',
                }}
            >
                <div
                    onClick={() => setIsOpenPopup(false)}
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                >
                    <AiOutlineCloseSquare />
                </div>
                {children}
                <svg
                    className="pointer-events-none absolute top-0 left-0 h-full w-full"
                    viewBox={`0 0 ${500} ${300}`} // Adjust viewBox to the width and height of the popup
                >
                    <motion.polyline
                        fill="none"
                        stroke="black"
                        strokeWidth="4"
                        points={points.join(" ")}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Popup;
