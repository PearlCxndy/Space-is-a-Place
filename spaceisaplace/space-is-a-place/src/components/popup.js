import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const MAX_POINTS = 150; // Match the max points if you want consistency

const Popup = ({ setIsOpenPopup, children, enableDrawing = true }) => {
    const [points, setPoints] = useState([]);
    const [popupSize, setPopupSize] = useState({ width: 500, height: 300 }); // Default size
    const popupRef = useRef(null);

    useEffect(() => {
        if (popupRef.current) {
            const { width, height } = popupRef.current.getBoundingClientRect();
            setPopupSize({ width, height });
        }
    }, []);

    const handleMouseMove = enableDrawing ? (e) => {
        if (!enableDrawing) return;

        const boundingBox = popupRef.current.getBoundingClientRect();
        const x = e.clientX - boundingBox.left;
        const y = e.clientY - boundingBox.top;

        setPoints((prevPoints) => {
            const newPoints = [...prevPoints, `${x},${y}`];
            return newPoints.length <= MAX_POINTS ? newPoints : newPoints.slice(1);
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
                    borderRadius: '5px',
                    width: '500px',
                    height: '300px',
                    padding: '100px 10px',
                    zIndex: 10, // Ensure popup background is below the drawing
                }}
            >
                <div
                    onClick={() => setIsOpenPopup(false)}
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 30, // Ensure the close button is above the drawing
                    }}
                >
                    <AiOutlineCloseSquare />
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        zIndex: 20, // Higher z-index for text, to be above the drawing
                    }}
                >
                    {children}
                </div>
                {/* Draw area */}
                {enableDrawing && (
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                viewBox={`0 0 ${popupSize.width} ${popupSize.height}`}
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
}

export default Popup;
