import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ size, children, onClick, className, backgroundColor }) => { // Added backgroundColor prop
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

    // Define motion variants for neuromorphic design
    const cardVariants = {
        initial: {
            boxShadow: "8px 8px 16px #aaa, -8px -8px 16px #fff",
        },
        hover: {
            boxShadow: "0px 0px 0px black",
            scale: 1.05, // Slightly scale up on hover
            transition: { type: 'spring', stiffness: 300 }
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
            animate={{
                rotateX,
                rotateY,
            }}
            style={{
                ...styles.card,
                ...styles[size],
                transformStyle: "preserve-3d", // Necessary for 3D tilt effect
                backgroundColor: backgroundColor || 'black', // Use backgroundColor prop with fallback to black
            }}
            onClick={onClick}
            className={`a ${onClick ? 'cursor-pointer' : ''}`} // Add any other default classes here
        >
            <div
                style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0, // Added for horizontal centering
        bottom: 0, // Added for vertical centering
        display: 'flex', // Use flex to utilize justifyContent and alignItems
        alignItems: 'center', // Vertical centering
        justifyContent: 'center', // Horizontal centering
        padding: '10px', // Optional: Adds some space around the text
        zIndex: 20, // Higher z-index for text, to be above the drawing
        pointerEvents: 'none', // Ensures the drawing can be seen/interacted with through the text
    }}
                className={className} // Use the className prop for dynamic classes
            >
                {children}
            </div>
        </motion.div>
    );
};

const styles = {
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px',
        padding: '30px',
        borderRadius: '20px',
        color: 'white',
        cursor: 'pointer',
        perspective: '1000px',
        width: '600px', // Set your desired width
        maxWidth: '100%', // Ensure it doesn't overflow its container
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
