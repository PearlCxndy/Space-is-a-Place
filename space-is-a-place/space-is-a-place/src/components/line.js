import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber'; 
import { useDrag } from 'react-use-gesture';
import { RoundedBox } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';


const DraggableRoundedBox = ({ color }) => {
  const { viewport } = useThree();
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.center();
    }
  }, []);

  const initialPositionX = viewport.width / 2 - 1.5;

  const [spring, api] = useSpring(() => ({
    position: [initialPositionX, 0, 0],
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  const bind = useDrag(({ offset: [x, y] }) => {
    const sensitivity = 0.1;
    const scaledX = x * sensitivity / viewport.width * 1.5;
    const scaledY = -y * sensitivity / viewport.height * 1.5;
    api.start({ position: [initialPositionX + scaledX, scaledY, 0] });
  });

  return (
    <a.mesh {...bind()} {...spring} ref={meshRef}>
      <RoundedBox args={[2, 2, 2]} radius={0.05} smoothness={4}>
        <meshPhongMaterial attach="material" color={color} />
      </RoundedBox>
    </a.mesh>
  );
};


export default DraggableRoundedBox;
