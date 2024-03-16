

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, PerspectiveCamera, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

export function Space(props) {
  const { nodes, materials } = useGLTF('./model/spaceisaplace-transformed.glb')
  const space = useRef()
  const scroll = useScroll()
  const cameraRef = useRef();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * 2.5 * tl.current.duration());
  })
  useLayoutEffect(() => {
    if (cameraRef.current && space.current) {
      tl.current = gsap.timeline({ paused: true, defaults: { ease: 'power1.inOut' } });
  
      // Initial rotation to the right and zoom out
      tl.current.to(space.current.rotation, { y: "+=" + Math.PI / 4, duration: 500})
        .to(cameraRef.current.position, { z: "+=5", duration: 20 }, "<");
  
      // Turn to the left and zoom in
      tl.current.to(space.current.rotation, { y: "-=" + Math.PI / 2, duration: 500 })
        .to(cameraRef.current.position, { z: "-=10", duration: 50 }, "<");
  
      // Rotate a little bit back
      tl.current.to(space.current.rotation, { y: "-=" + Math.PI / 4, duration: 600 });
  
      // Step 4: Zoom out and move to the left
      // tl.current.to(cameraRef.current.position, { z: "+=10", duration: 20 }) // Zoom out
        tl.current.to(space.current.position, { x: "-=2", duration: 550}, "<"); // Move to the left

        tl.current.to(cameraRef.current.position, { z: "+=10", duration: 520}) // Zoom out
        .to(space.current.position, { x: "-=1", duration: 20 }, "<"); // Move to the left

        tl.current.to(space.current.position, { z: 0.4, duration: 530});
        tl.current.to(space.current.position, { z: "+=1.8", duration: 480}); // Replace 'originalZ' with the object's starting z-position
      // Step 5: Final zoom in
      tl.current.to(cameraRef.current.position, { z: "-=80", duration: 600 }); // Zoom in
      // Optional: Rotate back to initial orientation if needed
      tl.current.to(space.current.rotation, { y: "0", duration: 520 }); // Reset rotation
      tl.current.to(space.current.rotation, { y: "+=" + Math.PI / 4, duration: 520})
      tl.current.to(space.current.position, { x: "+=0.4", duration: 500 });

      // You can also chain more properties or callbacks if needed
      tl.current.to(space.current.rotation, { y: "-=" + Math.PI / 4, duration: 500 });
      tl.current.to(space.current.position, { x: "+=0.05", duration: 500 });
      tl.current.to(space.current.position, { x: "-=0.02", duration: 500 });
      tl.current.to(space.current.rotation, { y: "+=" + Math.PI / 4, duration: 500})
      .to(space.current.position, { x: "+=1", duration: 800 }, ">"); // Move to the left
      // tl.current.to(space.current.rotation, { y: "+=" + Math.PI / 2, duration: 500 }); // Rotate by 90 degrees to the right
      tl.current.to(space.current.position, { x: "+=5", duration: 1000 }); // Moves the object 5 units to the right from its current position


      // Start the timeline
      tl.current.play();
      // Finalize with a callback if you have any follow-up actions
      tl.current.call(() => {
        // Any follow-up actions after the entire animation sequence
        console.log('Animation sequence completed');
      });
      
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
            iridescenceThicknessRange={[100, 1000]}
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
            iridescenceThicknessRange={[100, 1000]}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./model/spaceisaplace-transformed.glb')
