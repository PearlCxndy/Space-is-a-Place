import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedText = ({ phrases }) => {
    const [active, setActive] = useState(0); // This state is used to cycle through phrases

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevActive) => (prevActive + 1) % phrases.length); // Loop through phrases
        }, 3000); // Change phrases every 3 seconds

        return () => clearInterval(interval);
    }, [phrases.length]); // Dependency on the number of phrases

    return (
        <div className="title2" style={{ padding: '900px', margin: '0 auto', width: '1000%' }}>
            <AnimatePresence>
                {phrases.map((phrase, index) => (
                    <motion.span
                        key={phrase.text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: active === index ? 1 : 0, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className={phrase.className} // Using the className passed with each phrase
                        style={{ top: '900vh', marginBottom: '20px', position: 'absolute' , MarginRight:'130px'}}
                    >
                        {phrase.text}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedText;
