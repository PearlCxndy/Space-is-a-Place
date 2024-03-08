import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
            }}
            onClick={onClick}
            className="a"
        >
            <div
                style={{
                    transform: "translateZ(75px)", // Brings the content closer
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                <p
                    style={{
                        transform: "translateZ(50px)", // Further brings the text closer for a 3D effect
                    }}
                    className="a"
                >
                    {children}
                </p>
            </div>
        </motion.div>
    );
};

const styles = {
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px 10px',
        padding: '20px',
        borderRadius: '16px',
        color: 'white',
        backgroundColor: 'black',
        cursor: 'pointer',
        // width: '300px', // Specify width for consistency
        // height: '200px', // Specify height for consistency
        perspective: '1000px', // Adjust as needed for the 3D effect
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
