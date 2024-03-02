import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {  ScrollControls, Scroll } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import transition from "../transition";
import DraggableRoundedBox from './line';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function Home() {
  const [color] = useState("royalblue");

  // Motion values for the cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for the cursor
  const cursorXSpring = useSpring(cursorX, { stiffness: 700, damping: 30 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 700, damping: 30 });

  useEffect(() => {
    const moveCursor = e => {
      cursorX.set(e.clientX - 16); // Center the cursor
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.1} />
        <ScrollControls pages={3} damping={0.1}>
          <Scroll>
            <DraggableRoundedBox color={color} />
          </Scroll>
          <Scroll html>
            {/* DOM contents here will scroll along */}
            <motion.div className='title' initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 5, stiffness: 40, duration: 0.3 }}>
              <h1 className="title">Space<br/>is a<br/>Place</h1>
            </motion.div>
            <h1 style={{ top: '100vh' }}>html in here (optional)</h1>
            <h1 style={{ top: '200vh' }}>second page</h1>
            <h1 style={{ top: '300vh' }}>third page</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <motion.div className="cursor" style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: '32px', height: '32px', borderRadius: '50%',
        backgroundColor: 'yellow', mixBlendMode: 'difference'
      }} />
    </div>
  );
}



const rootElement = document.getElementById("title");
ReactDOM.render(<Home />, rootElement);

export default transition(Home);
