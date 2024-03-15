

import React, { useRef,useLayoutEffect} from 'react'
import { useGLTF, PerspectiveCamera ,useScroll} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'

export function Space(props) {
  const { nodes, materials } = useGLTF('./model/spaceisaplace-transformed.glb')
  const space = useRef()
  const scroll = useScroll()
  const cameraRef = useRef();
  const tl = useRef();

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * 6 * tl.current.duration());
  })
  useLayoutEffect(() => {
    if (cameraRef.current) {
    // Set up the timeline with specific durations for each animation
    tl.current = gsap.timeline({ paused: true, defaults: { ease: 'power1.inOut' } });
    // Start by moving to the right
    tl.current.to(space.current.position, {
      x: 2, // Adjust as necessary for the distance you want to move to the right
      duration: 1 // Duration for the move to the right
    });
    tl.current.to(space.current.position, {
      x: 2,
      duration: 1
    });

    // Finally, move to the left
    tl.current.to(space.current.position, {
      x: -3, // Adjust as necessary for the distance you want to move to the left
      duration: 1 // Duration for the move to the left
    });
    tl.current.to(space.current.rotation, {
      y: "+=" + Math.PI / 2, // Rotate 90 degrees to the left
      duration: 4 // Adjust duration to control the speed of the rotation
    });
    tl.current.to(space.current.position, {
      y: "+=" + Math.PI / 4,
      x: -1, // Adjust as necessary for the distance you want to move to the right
      duration: 1 // Duration for the move to the right
    });
    tl.current.to(space.current.position, {
      x: -2, // Adjust as necessary for the distance you want to move to the left
      duration: 1 // Duration for the move to the left
    });
    // If needed, adjust the position more dramatically for visibility
  }
}, [cameraRef]);
  return (

    <group {...props} dispose={null} ref={space}>     
    <PerspectiveCamera ref={cameraRef} makeDefault={false} far={100} near={0.1} fov={22.895} position={[7.359, 4.958, 6.926]} rotation={[-0.627, 0.71, 0.441]} />
    <mesh geometry={nodes.Cube.geometry} material={materials.PaletteMaterial001} position={[0, 1.26, 0]} scale={[2.25, 1.2, 2.1]} />
    <instancedMesh args={[nodes.Cube023.geometry, materials.PaletteMaterial001, 46]} instanceMatrix={nodes.Cube023.instanceMatrix} />
    <instancedMesh args={[nodes.Cube035.geometry, materials.PaletteMaterial001, 31]} instanceMatrix={nodes.Cube035.instanceMatrix} />
    
      <group position={[-0.21, 0.16, 0.37]} rotation={[0, 0, 0]} scale={0.15}>
        <mesh>
          <meshPhysicalMaterial 
            color="#aaa"  
            roughness={0.2}
            metalness={1}
            reflectivity={0.5}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}           
          />
        </mesh>
        <mesh>
          <meshPhysicalMaterial 
            color="#000000"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.2}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./model/spaceisaplace-transformed.glb')
