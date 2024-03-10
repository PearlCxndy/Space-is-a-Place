import React, { useState, useRef } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const MAX_POINTS = 30;

const Popup = ({ setIsOpenPopup, children, enableDrawing = true }) => {
    const [points, setPoints] = useState([]);
    const popupRef = useRef(null);

    const handleMouseMove = enableDrawing ? (e) => {
        const boundingBox = popupRef.current.getBoundingClientRect();
        const x = e.clientX - boundingBox.left;
        const y = e.clientY - boundingBox.top;

        setPoints((prevPoints) => {
            const newPoints = [...prevPoints, `${x},${y}`];
            if (newPoints.length > MAX_POINTS) {
                // Remove the oldest point to maintain the buffer size
                newPoints.shift();
            }
            return newPoints;
        });
    } : null;

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
                ref={popupRef}
                onMouseMove={handleMouseMove}
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '8px',
                    width: '500px', // Adjust the width as necessary
                    height: '300px', // Adjust the height as necessary
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
                {enableDrawing && (
                    <svg
                        className="pointer-events-none absolute top-0 left-0 h-full w-full"
                        style={{ width: '100%', height: '100%' }}
                        viewBox="0 0 500 300" // These values should match the width and height of the popup for proper scaling
                    >
                        <polyline
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            points={points.join(" ")}
                        />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default Popup;
