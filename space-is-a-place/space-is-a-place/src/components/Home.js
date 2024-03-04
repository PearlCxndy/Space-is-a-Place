import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {  ScrollControls, Scroll } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import transition from "../transition";
import DraggableRoundedBox from './line';
import { motion, useMotionValue, useSpring } from 'framer-motion';


function Home() {
  const [color] = useState("black");

  // Motion values for the cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for the cursor
  const cursorXSpring = useSpring(cursorX, { stiffness: 800, damping: 30 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 800, damping: 30 });

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
    <>

    <div className="App" >
      <Canvas>
        <ScrollControls pages={3} damping={0.1}>
          <Scroll html>
            {/* DOM contents here will scroll along */}
            <motion.div className='title' initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 5, stiffness: 40, duration: 0.3 }}>
              <h1 className="title">Space is a<br/>Place</h1>
            </motion.div>
            <h1 style={{ top: '100vh', marginBottom: '50px' }}>from painting to performance</h1>
            <h1 style={{ top: '1000vh', marginBottom: '60px'  }}> It is easy to overlook space in art: we can view a painting <br/> of an interior without noticing how the artist has created the illusion of dept </h1>
            <h1 style={{ top: '1500vh', marginBottom: '60px' }}>The artists in this gallery have looked at space in various ways. Space can be a room in a house, a stroke of paint on canvas, a three-dimensional form protruding 
            from a flat surface or the gallery itself. It can be the space inside the artist’s head, the space taken up by the artist’s (and the viewer’s) body or a space beyond the gallery</h1>
          </Scroll>
          <Scroll>
          <ambientLight intensity={0.5} />
            <DraggableRoundedBox color={color} />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <motion.div className="cursor" style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: '42px', height: '42px', borderRadius: '50%',
        backgroundColor: 'white', mixBlendMode: 'difference'
      }} />
    </div>
    </>
    
  );
}



const rootElement = document.getElementById("title");
ReactDOM.render(<Home />, rootElement);

export default transition(Home);
