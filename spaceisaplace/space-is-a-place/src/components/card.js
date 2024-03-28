import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({
    size,
    children,
    onClick,
    className,
    backgroundColor,
    backImage, }) => {
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

    const ref = useRef(null);

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Use hover state to control the flip instead of click
    const [isHovering, setIsHovering] = useState(false);

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

    const handleMouseEnter = () => {
        setIsHovering(true); // Trigger flip to back side on hover
    };

    const handleMouseLeave = () => {
        setIsHovering(false); // Reset to front side on mouse leave
        setRotateX(0);
        setRotateY(0);
    };

    // Define motion variants for neuromorphic design, flipping, and hover state
    const cardVariants = {
        initial: {
            boxShadow: "8px 8px 16px #aaa, -8px -8px 16px #fff",
        },
        hover: {
            boxShadow: "0px 0px 0px black",
            scale: 1.05, // Slightly scale up on hover
            transition: { type: 'spring', stiffness: 300 }
        },
        flipped: {
            rotateY: 180, // Add rotateY for flipping
            transition: { duration: 0.75} // Adjust duration to slow down the flip animation
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter} // Handle flip on hover
            onMouseLeave={handleMouseLeave}
            initial="initial"
            animate={isHovering ? "flipped" : {rotateX, rotateY}} // Use "flipped" variant if hovering, otherwise use tilt
            variants={cardVariants}
            onClick={onClick} // Keep onClick for additional functionality
            style={{
                ...styles.card,
                ...styles[size],
                transformStyle: "preserve-3d",
                backgroundColor: backgroundColor || 'transparent', // Set to transparent or a desired default
              }}
              className={`a ${className}`}
            >
              {/* This div wraps the content that is always visible on the card front */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backfaceVisibility: 'hidden',
                  zIndex: isHovering ? '0' : '1', // When not hovering, this should be on top
                }}
                className={className}
              >
                {children}
              </div>
              
              {/* This div contains the back image and is only visible when the card is flipped */}
              {isHovering && (
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backfaceVisibility: 'hidden',
                    zIndex: '2', // This should be on top when the card is flipped
                    transform: 'rotateY(180deg)', // Correct the orientation of the back content
                  }}
                >
                  <img 
                    src={backImage} 
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                    }} 
                  />
                </div>
              )}
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
        width: '600px',
        maxWidth: '100%',
        position: 'relative',
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
