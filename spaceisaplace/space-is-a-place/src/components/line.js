import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { useDrag } from 'react-use-gesture';
import * as THREE from 'three';
import { Space } from './Space'; // Make sure this is your 3D model component

export default function DraggableSpace() {
  const groupRef = useRef();
  const { size } = useThree();

  const initialRotationY = -Math.PI / 4; // Rotate a bit left (45 degrees) initially

  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, initialRotationY, 0], // Initial rotation
  }));

  const bind = useDrag(({ movement: [mx, my], down }) => {
    const yRotation = down ? mx / (size.width / 2) * Math.PI : 0;
    api.start({
      rotation: [0, yRotation, 0],
    });
  });

  // Adjust the initial position of the group/model slightly down and to the right
  // The values here (e.g., 0.2 and -0.2) are just examples; adjust them as needed for your scene
  const initialPosition = [1.5, -0.5, 0];

  return (
    <a.group ref={groupRef} {...bind()} rotation={rotation} position={initialPosition}>
      <Space />
    </a.group>
  );
}
