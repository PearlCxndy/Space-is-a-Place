

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
    tl.current.seek(scroll.offset * 7 * tl.current.duration());
  })
  useLayoutEffect(() => {
    if (cameraRef.current && space.current) {
      tl.current = gsap.timeline({ paused: true, defaults: { ease: 'power1.inOut' } });
  
      // Extending the duration for more gradual movements
      tl.current.to(space.current.position, { x: 2, duration: 8 }) // Slower movement to the right
                .to(space.current.position, { x: -9, duration: 20 }, "+=2") // Start 2 seconds after the previous animation ends, longer duration for a smoother transition
                .to(space.current.position, { x: -3, duration: 40 }, "<+1"); // Start 1 second after the second animation starts, significantly longer duration for a very gradual movement
  
      // Slowing down rotation animations as well
      tl.current.to(space.current.rotation, { y: "+=" + Math.PI / 2, duration: 16 }) // Slower rotation
                .to(space.current.rotation, { y: "-=" + Math.PI / 4, duration: 20 });
  
      // Adjusting camera movements for a smoother zoom in effect
      tl.current.to(cameraRef.current.position, { z: cameraRef.current.position.z - 5, duration: 40 }) // Slower approach towards the object
                .to(cameraRef.current, {
                    fov: 40,
                    onUpdate: () => cameraRef.current.updateProjectionMatrix(),
                    duration: 8 // Slower FOV change for a gradual zoom effect
                })
                .to(space.current.rotation, {y: 0}, 20)   
                .to(space.current.rotation, {x: 0}, 20) 
                .to(space.current.position, {x: 0}, 20)   
                
                tl.current.to(space.current.rotation, { y: "+=" + Math.PI / 2, duration: 16 }) // Slower rotation
                .to(space.current.rotation, { y: "-=" + Math.PI / 4, duration: 20 });
  
                
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
