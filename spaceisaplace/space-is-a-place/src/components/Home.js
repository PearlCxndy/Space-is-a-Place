import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import transition from "../transition";
import DraggableSpace from './line';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Artgloss1, Artgloss2, Artgloss3, Artgloss4, Artgloss5, Artgloss6, Artgloss7, Artgloss8, Artgloss9, Artgloss10, Artgloss11, Artgloss12, Artgloss13, Artgloss14, Artgloss15 } from './popupinfo';
import Card from './card.js';
import Popup from "./popup";
import AnimatedText from './animated';
// import { Space } from './Space';


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
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Adjust for flexibility
      gridGap: '10px', // Added gap for aesthetics
      gridAutoRows: 'auto', // Adjusted for content
      position: 'relative', // Changed to relative for centering within its parent
      transform: 'translateX(-50%)',
      left: '50%', // Keep for centering if using absolute positioning
      justifyContent: 'center',
      backgroundColor: 'white',
      top: '110vh', // Keep if you need it offscreen initially
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
          <ScrollControls pages={4} damping={0.1}>
            <Scroll html style={{ width: '100%' }}>
              <motion.div
                style={{
                  display: 'inline-block', // Ensure the div fits the content size for better control
                  cursor: "pointer",
                  backgroundColor: "transparent" // Assuming you want the floating effect without a visible background
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
                <h1 className="title">Space is a<br />Place</h1>
              </motion.div>
              <h1 style={{ top: '110vh', marginBottom: '280px' }}>from painting to performance</h1>
              <motion.div className='title' initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, duration: 0.3 }}>
                <h1 className="scrollhere">-scroll here to explore-</h1>
              </motion.div>
              <h1 style={{ top: '100vh', marginBottom: '10px', position: 'absolute', maxWidth: '300px' }}> It is easy to overlook space in art: we can view a painting <br /> of an interior without noticing how the artist has created the illusion of dept </h1>
              <h1 style={{ top: '150vh', marginBottom: '20px', position: 'absolute' }}>The artists in this gallery have looked at space in various ways. Space can be a room in a house, a stroke of paint on canvas, a three-dimensional form protruding
                from a flat surface or the gallery itself. It can be the space inside the artist’s head, the space taken up by the artist’s (and the viewer’s) body or a space beyond the gallery</h1>
              <h1 className="title2" style={{ top: '175vh', marginBottom: '280px', position: 'absolute' }}>Art Glossary</h1>
              <div style={styles.pin_container}>
                <Card
                  size="small"
                  onClick={() => openPopupWithContent(< Artgloss1 />)}
                  className="custom-class-for-specific-card" // You can now pass custom classes
                >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss2 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss3 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss4 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss5 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss6 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss6 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss7 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss8 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss9 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss10 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss11 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss12 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss13 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss14 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss15 />)}
                  className="custom-class-for-specific-card" >
                  <h2>Abstraction / Abstract art</h2>
                  <p>Art which does not seek to represent a recognisable visual reality.</p>
                </Card>
              </div>
              <AnimatedText style={{ top: '310vh', marginBottom: '10px', position: 'absolute' }}
                phrases={[
                  { text: "Abstraction/Abstract art" },
                  { text: "Abstract Expressionism " },
                  { text: "Colour Field painting " },
                  { text: "Expressionism" },
                  { text: "Cubism " },
                  { text: "Conceptual art " },
                  { text: "Installation art " },
                  { text: "Minimalism" },
                  { text: "Modernism " },
                  { text: "Post-Impressionism" },
                  { text: "Pop Art " },
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
                  , top: '330vh', marginBottom: '10px', position: 'absolute'
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
            <Scroll>
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <ambientLight intensity={5} />
              <DraggableSpace />
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
