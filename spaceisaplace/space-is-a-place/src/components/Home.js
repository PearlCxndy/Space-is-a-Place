import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ScrollControls, Scroll, Sparkles, Backdrop, Float, Ring } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import transition from "../transition";
import DraggableSpace from './line';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Artgloss1, Artgloss2, Artgloss3, Artgloss4, Artgloss5, Artgloss6, Artgloss7, Artgloss8, Artgloss9, Artgloss10, Artgloss11, Artgloss12, Artgloss13, Artgloss14, Artgloss15 } from './popupinfo';
import Card from './card.js';
import Popup from "./popup";
import AnimatedText from './animated';


function Home() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  // Define popupContent state here
  const [popupContent, setPopupContent] = useState(null); // This was missing in your original code

  const openPopupWithContent = (contentComponent) => {
    setPopupContent(contentComponent);
    setIsOpenPopup(true);
  };

  const styles = {
    pin_container: {
      margin: 0,
      padding: 0,
      width: '100vw', // Increased width
      height:'60vw',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Adjust for flexibility
      gridGap: '20px', // Added gap for aesthetics
      gridAutoRows: 'auto', // Adjusted for content
      position: 'relative', // Changed to relative for centering within its parent
      transform: 'translateX(-50%)',
      left: '50%', // Keep for centering if using absolute positioning
      justifyContent: 'center',
      backgroundColor: 'white',
      top: '280vh', // Keep if you need it offscreen initially
      marginBottom: '280px', // Adjust as needed
    }
  };


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
          <ScrollControls pages={8} damping={0.1}>
          <spotLight position={[10, 15, 10]} angle={0.3} />
              <ambientLight intensity={5} />
              <DraggableSpace />
              <Sparkles size={5} color={"#ffff"} scale={[10, 10, 10]}></Sparkles>
              <Backdrop
                receiveShadow
                floor={0.25} // Stretches the floor segment, 0.25 by default
                segments={50} // Mesh-resolution, 20 by default
                scale={[40, 30, 10]}
                position={[4, -10, 0]}
              >
                <meshStandardMaterial color="grey" />
              </Backdrop>

              <Float
                speed={4} // Animation speed, defaults to 1
                rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
              >
                <Ring
                  scale={1.0} // Smaller scale
                  position-z={2} // Adjust z-position to bring closer to the camera or into view
                  position-y={-5}
                  args={[0, 0.95, 60]}
                  opacity= {5}
                  receiveShadow
                >
                  <meshStandardMaterial
                    attach="material"
                    color="#FFD4D4" // base color for the material
                  // Additional material properties...
                  />
                </Ring>
              </Float>
            <Scroll html style={{ width: '100%' }}>
              <motion.div
                style={{
                  display: 'inline-block',
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  marginTop:'150px' // Adjusted to make the top margin lower
                }}
                initial="initial"
                animate="float"
                variants={{
                  initial: {
                    opacity: [0],
                    y: [-10],
                    x: 20 // Start from the original x position
                  },
                  float: {
                    y: [-10, 20],
                    x: 20, // Move 20 pixels to the right
                    opacity: [1],
                    transition: {
                      type: 'spring',
                      damping: 5,
                      stiffness: 50,
                      duration: 0.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }
                }}
              >
                <h1 className="title">Space is a<br />Place</h1>
              </motion.div>

              <h1 style={{ top: '200vh', marginBottom: '280px', marginLeft: '20px' ,marginTop:'50px'}}>from painting to performance</h1>
              <motion.div className='title' initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, duration: 0.3 }}>
                <h1 className="scrollhere">-scroll here to explore-</h1>
              </motion.div>
              <h1 style={{ top: '100vh', marginBottom: '10px', position: 'absolute', maxWidth: '300px', marginLeft: '20px' }}> It is easy to overlook space in art: we can view a painting <br /> of an interior without noticing how the artist has created the illusion of dept </h1>
              <h1 style={{ top: '130vh', marginBottom: '20px', position: 'absolute' , marginLeft: '1000px',maxWidth: '500px'}}>The artists in this gallery have looked at space in various ways. Space can be a room in a house, a stroke of paint on canvas, a three-dimensional form protruding
                from a flat surface or the gallery itself. It can be the space inside the artist’s head, the space taken up by the artist’s (and the viewer’s) body or a space beyond the gallery</h1>
                <h1 style={{ top: '190vh', marginBottom: '300px', position: 'absolute', marginLeft: '20px' ,maxWidth: '500px'}}>Art doesn’t happen in a vacuum. New patrons began to support art in the 19th century, taking over from the church and the aristocracy.The new middle classes built galleries to share their collections with the public.</h1>
                <h1 style={{ top: '250vh', marginBottom: '280px', position: 'absolute', marginLeft: '1000px' ,maxWidth: '500px'}}>Art was seen by a wider audience and art education meant that artists came from more diverse background the changes of the 20th century from the end of empire and two world wars to widening democracy and consumerism, affected the way art is made and how it is received</h1>
                <h1  style={{ top: '300vh', marginBottom: '400px', position: 'absolute', marginLeft: '20px',maxWidth: '500px' }}>Art becomes free to define its own boundaries. No longer in the service of religion, morality  , ideology or even realism ,art has carved a space for itself.</h1>
          <h1 className="title2" style={{ top: '320vh', marginBottom: '500px', position: 'absolute', marginLeft: '20px' }}>Art Glossary</h1>

              <div style={styles.pin_container}>
                <Card
                  size="small"
                  onClick={() => openPopupWithContent(<Artgloss1 />)}
                  backgroundColor="#ff6347" // Example background color
                >
                  <h2>Abstraction/Abstract Art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss2 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstract Expressionism </h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss3 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Colour Field painting </h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss4 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Conceptual art </h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss5 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss6 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss6 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss7 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss8 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss9 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss10 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss11 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss12 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss13 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss14 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss15 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                </Card>
              </div>
              <AnimatedText style={{ top: '800vh', marginBottom: '1500px', position: 'absolute' }}
                phrases={[
                  { text: "Abstraction/Abstract art" },
                  { text: "Abstract Expressionism " },
                  { text: "Colour Field painting " },
                  { text: "Expressionism" },
                  { text: "Cubism " },
                  { text: "Conceptual art " },
                  { text: "Installation art " },
                  { text: "Minimalism" },
                  { text: "Modernism " },
                  { text: "Post-Impressionism" },
                  { text: "Pop Art " },
                  { text: "Romanticism" },
                  { text: "Modernism" },
                  { text: "Impressionism" },
                ]}
              />
              <motion.div
                style={{
                  display: 'inline-block', // Ensure the div fits the content size for better control
                  cursor: "pointer",
                  backgroundColor: "transparent" // Assuming you want the floating effect without a visible background
                  , top: '730vh', marginBottom: '10px', position: 'absolute'
                }}
                initial="initial" // Starting animation state
                animate="float"
                variants={{
                  initial: { opacity: [0], y: [-10] },
                  float: {
                    y: [-10, 10], opacity: [1],
                    // Adjust the values for greater or lesser vertical movement
                    transition: {
                      type: 'spring', damping: 5, stiffness: 50, duration: 0.2, ease: "easeInOut", // This eases the animation for a smoother effect
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }
                }}
              >
                <a href="/test1" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h1 className="title2">Draw your<br />own space</h1>
                </a>
              </motion.div>
              </Scroll>
          </ScrollControls>
        </Canvas>
        {isOpenPopup && (
          <Popup setIsOpenPopup={setIsOpenPopup}>
            {popupContent}
          </Popup>
        )}
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