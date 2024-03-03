import React from 'react';
import { useThree } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';
import { RoundedBox } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

function DraggableRoundedBox({ color }) {
  const { viewport } = useThree();
  
  // Calculate the initial position to place the box on the right side
  const initialPositionX = viewport.width / 2 - 1.5; // Adjust based on the box's size

  const [spring, api] = useSpring(() => ({
    position: [initialPositionX, 0, 0], // Start on the right
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  const bind = useDrag(({ offset: [x, y], vxvy: [vx, vy] }) => {
    // Scale down the drag movement to reduce sensitivity
    const sensitivity = 0.5; // Lower is less sensitive
    const scaledX = x * sensitivity / viewport.width * 2;
    const scaledY = -y * sensitivity / viewport.height * 2;

    // Update position with scaled values
    api.start({ position: [initialPositionX + scaledX, scaledY, 0] });
  });

  return (
    <a.mesh {...bind()} {...spring}>
      <RoundedBox args={[3, 3, 3]} radius={0.05} smoothness={4}>
        <meshPhongMaterial attach="material" color={color} />
      </RoundedBox>
    </a.mesh>
  );
}

export default DraggableRoundedBox;
