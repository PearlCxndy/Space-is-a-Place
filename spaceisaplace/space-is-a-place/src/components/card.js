import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Card Component Adjusted to Include TiltCard Logic
const Card = ({ size, children, onClick }) => {
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
    
    const ref = useRef(null);
    
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    
    const handleMouseMove = (e) => {
        if (!ref.current) return;
    
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    
        setRotateX(rX);
        setRotateY(rY);
    };
    
    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };
    
    
    return (
        <div
            style={{
                ...styles.card,
                ...styles[size]
            }}
            onClick={onClick}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                    rotateX,
                    rotateY,
                }}
                style={{
                    transformStyle: "preserve-3d",
                }}
                className="a"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
                >
                    <p
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="a"
                    >
                        {children}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const styles = {
    card: {
        display: 'flex', // Adjusted to support motion effects properly
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px 10px',
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: 'black',
        cursor: 'pointer',
        perspective: '800px', // Added to enhance the 3D effect
    },
    small: {
        gridRowEnd: 'span 26',
    },
    medium: {
        gridRowEnd: 'span 33',
    },
    large: {
        gridRowEnd: 'span 45',
    }

    
};


export default Card;
