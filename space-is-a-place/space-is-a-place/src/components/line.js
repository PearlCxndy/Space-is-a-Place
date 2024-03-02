import React from 'react';
import { useThree } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';
import { RoundedBox } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';


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
export default DraggableRoundedBox;