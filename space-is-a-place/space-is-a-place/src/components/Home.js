import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useThree } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useDrag } from 'react-use-gesture';
import { a, useSpring } from '@react-spring/three';
import transition from "../transition";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  // Define a state for the color
  const [color] = useState("royalblue");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
    text: { height: 150, width: 150, x: mousePosition.x - 75, y: mousePosition.y - 75, backgroundColor: "red", mixBlendMode: "difference" }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Space is a place</h1>
      <motion.div className='cursor' variants={variants} animate={cursorVariant} />
      <Canvas>
        <ambientLight intensity={0.1} />
        <DraggableRoundedBox color={color}/>
      </Canvas>
    </div>
  );
}

function DraggableRoundedBox({ color }) {
  const { size } = useThree();
  const [spring, set] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  const bind = useDrag(({ offset: [x, y] }) => {
    set({ position: [x / size.width * 2, -y / size.height * 2, 0] });
  });

  return (
    <a.mesh {...bind()} {...spring}>
      <RoundedBox args={[3, 3, 3]} radius={0.05} smoothness={4}>
        <meshPhongMaterial attach="material" color={color} />
      </RoundedBox>
    </a.mesh>
  );
}

const rootElement = document.getElementById("title");
ReactDOM.render(<Home />, rootElement);

export default transition(Home);
