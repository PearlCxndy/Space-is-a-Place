import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ScrollControls, Scroll, Sparkles, Backdrop, Float, Ring } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import transition from "../transition";
import DraggableSpace from './line.js';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Artgloss1, Artgloss2, Artgloss3, Artgloss4, Artgloss5, Artgloss6, Artgloss7, Artgloss8, Artgloss9, Artgloss10, Artgloss11, Artgloss12, Artgloss13, Artgloss14, Artgloss15 ,Artgloss16,Artgloss17,Artgloss18} from './popupinfo';
import Card from './card.js';
import Popup from "./popup";
import AnimatedText from './animated';
import { useInView } from 'react-intersection-observer';
import backImage1 from './artpic/1.jpg';
import backImage2 from './artpic/2.jpg';
import backImage3 from './artpic/3.jpg';
import backImage4 from './artpic/4.jpg';
import backImage5 from './artpic/5.jpg';
import backImage6 from './artpic/6.jpg';
import backImage7 from './artpic/7.jpg';
import backImage8 from './artpic/8.jpg';
import backImage9 from './artpic/9.jpg';
import backImage10 from './artpic/10.jpg';
import backImage11 from './artpic/11.jpg';
import backImage12 from './artpic/12.jpg';
import backImage13 from './artpic/13.jpg';
import backImage14 from './artpic/14.jpg';
import backImage15 from './artpic/15.jpg';
import backImage16 from './artpic/16.jpg';
import backImage17 from './artpic/18.jpg';
import backImage18 from './artpic/19.jpg';



const useSectionVisibility = (threshold = 0.5, triggerOnce = false) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  return { ref, inView };
};

const Section = ({ children, threshold, triggerOnce, hideDelay = 0, id }) => {
  const { ref, inView } = useSectionVisibility(threshold, triggerOnce);

  // Debugging
  useEffect(() => {
    console.log(`Section ${id} inView:`, inView);
  }, [inView, id]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0 } },
    hidden: { opacity: 0, y: 50, transition: { duration: 1, delay: hideDelay } },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
      {children}
    </motion.div>
  );
};

function Home() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  // Define popupContent state here
  const [popupContent, setPopupContent] = useState(null); 

  const openPopupWithContent = (contentComponent) => {
    setPopupContent(contentComponent);
    setIsOpenPopup(true);
  };

  const styles = {
    pin_container: {
      margin: 0,
      padding: 0,
      width: '98vw', 
      height: '60vw',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Adjust for flexibility
      gridGap: '20px',
      gridAutoRows: 'auto', // Adjusted for content
      position: 'relative', // Changed to relative for centering within its parent
      transform: 'translateX(-50%)',
      left: '49%', // Keep for centering if using absolute positioning
      justifyContent: 'center',
      backgroundColor: 'white',
      top: '480vh', 
      marginBottom: '280px', 
    }
  };


  // Motion values for the cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for the cursor
  const cursorXSpring = useSpring(cursorX, { stiffness: 200, damping: 20 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 200, damping: 20 });

  // Center the cursor

  useEffect(() => {
    const moveCursor = e => {
      cursorX.set(e.clientX - 16); 
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
          <ScrollControls pages={10} damping={0.65}>
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
                opacity={5}
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
                  marginTop: '150px' // Adjusted to make the top margin lower
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
              <motion.div
                className="icon-scroll"
                style={{
                  position: 'absolute', // Ensure positioning is applied
                  left: '50%', // Center horizontally
                  top: '75vh', // Adjusted top position
                  transform: 'translateX(-50%)', // Center the div
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
                <div className="icon-arrows">
                  <span></span>
                </div>
              </motion.div>
              <h1 style={{ top: '200vh', marginBottom: '150px', marginLeft: '20px', marginTop: '50px' }}>from painting to performance</h1>
              <motion.div initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, duration: 0.3 }}>
                <h1 className="scrollhere" >- scroll here to explore -</h1>
              </motion.div>

              <div style={{ position: 'absolute', width: '100%' }}>
                <Section id={1} threshold={0.4} triggerOnce={false} >
                  <h1 style={{
                    top: '10vh', position: 'absolute', maxWidth: '450px', marginLeft: '30px', backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
                    borderRadius: '40px', // Rounded corners for the background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '40px'
                  }}>It is easy to overlook space in art: we can view a painting of an interior without noticing how the artist has created the illusion of depth .</h1>
                </Section>
                <Section id={2} threshold={0.8} triggerOnce={false} hideDelay={9}>
                  <h1 style={{
                    top: '60vh', position: 'absolute', marginLeft: '1000px', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
                    borderRadius: '40px', // Rounded corners for the background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '40px'
                  }}>The artists in this gallery have looked at space in various ways. Space can be a room in a house, a stroke of paint on canvas, a three-dimensional form protruding from a flat surface or the gallery itself. It can be the space inside the artist’s head, the space taken up by the artist’s and the viewer’s body or a space beyond the gallery</h1>
                </Section>
                <Section id={3} threshold={0.6} triggerOnce={false} hideDelay={14}>
                  <h1 style={{
                    top: '160vh', position: 'absolute', marginLeft: '1000px', maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '40px', // Rounded corners for the background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '40px'
                  }}>Art doesn’t happen in a vacuum. New patrons began to support art in the 19th century, taking over from the church and the aristocracy.The new middle classes built galleries to share their collections with the public.</h1>
                </Section>
                <Section id={4} threshold={0.7} triggerOnce={false} hideDelay={80}>
                  <h1 style={{
                    top: '250vh',
                    marginBottom: '40px',
                    position: 'absolute',
                    marginRight: '40px', // Fixed typo from '40x' to '40px'
                    maxWidth: '760px',
                    marginLeft: '400px',
                    fontSize: '36px', // Bigger font size
                    lineHeight: '1.5', // Adjusted line height for better readability
                    color: '#333', // Example text color, adjust as needed
                    textAlign: 'justify', backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
                    borderRadius: '40px', // Rounded corners for the background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Soft shadow for depth// Example text alignment
                    padding: '20px'
                  }}>
                    Art was seen by a wider audience and art education meant that artists came from more diverse backgrounds.The changes of the 20th century from the end of empire and two world wars to widening democracy and consumerism,affected the way art is made and how it is received.
                  </h1>
                </Section>
                <Section id={5} threshold={0.9} triggerOnce={false} hideDelay={1000}>
                  <h1 style={{
                    position: 'absolute', // Use fixed to keep it in the viewport
                    top: '400vh', // Center vertically
                    left: '50%', // Center horizontally
                    transform: 'translate(-50%, -50%)', // Adjust the element's position to truly center it
                    fontSize: '36px', // Bigger font size
                    lineHeight: '1.5', // Adjusted line height for better readability
                    color: '#333', // Example text color, adjust as needed
                    textAlign: 'center', // Center text alignment
                    maxWidth: '80%', // Limit the width to avoid extremely wide text on large screens
                    padding: '20px', // Add some padding around the text
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
                    borderRadius: '10px', // Rounded corners for the background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Soft shadow for depth
                  }}>Art becomes free to define its own boundaries. No longer in the service of religion,morality,ideology or even realism,art has carved a space for itself.</h1>
                </Section>
              </div>


              <h1 className="title2" style={{ top: '550vh', marginBottom: '500px', position: 'absolute', marginLeft: '20px' }}>Art Glossary</h1>
              <motion.div
                style={{ top: '552vh', marginBottom: '500px', position: 'absolute', marginLeft: '500px' }}
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
              <h1 className="title3" >click for the more info</h1>
              </motion.div>

              <div style={styles.pin_container}>
                <Card
                  size="small"
                  onClick={() => openPopupWithContent(<Artgloss1 />)}
                  backgroundColor="#ff6347" // Example background color
                  backImage={backImage1}
                >
                  <h2>Abstraction/Abstract Art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss2 />)}
                  backgroundColor="#FA8072" 
                  backImage={backImage2}>
                  <h2>Abstract Expressionism </h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss3 />)}
                  backgroundColor="#ffe6f2" 
                  backImage={backImage3}>
                  <h2 style={{ color: '#000000' }}>Colour Field painting </h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss4 />)}
                  backgroundColor="#FFA07A"
                  backImage={backImage4} >
                  <h2>Conceptual art </h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss5 />)}
                  backgroundColor="#FFBF00" 
                  backImage={backImage5}>
                  <h2 style={{ color: '#000000' }}>Indo-Persian  </h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss6 />)}
                  backgroundColor="#E9967A" 
                    backImage={backImage6} >
                  <h2>Expressionism</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss7 />)}
                  backgroundColor="#E8E8E8" 
                  backImage={backImage8}>
                  <h2 style={{ color: '#000000' }}>Cubism</h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss8 />)}
                  backgroundColor="#FA8072" 
                  backImage={backImage7}>
                  <h2>Installation art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss9 />)}
                  backgroundColor="#FA807A" 
                  backImage={backImage9}>
                  <h2 style={{ color: '#000000' }}>Constructivism</h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss10 />)}
                  backgroundColor="#BA4949" 
                  backImage={backImage10}>
                  <h2>Minimalism</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss11 />)}
                  backgroundColor="#F2B0B0"
                  backImage={backImage12} >
                  <h2>Modernism </h2>
                </Card>
                <Card size="large" onClick={() => openPopupWithContent(<Artgloss12 />)}
                  backgroundColor="#F2D5B0"
                  backImage={backImage13} >
                  <h2 style={{ color: '#000000' }}>Post-Impressionism</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss13 />)}
                  backgroundColor="#FF9436"
                  backImage={backImage14} >
                  <h2>Impressionism</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss14 />)}
                  backgroundColor="#FFBF00"  backImage={backImage15}>
                  <h2 style={{ color: '#000000' }}>Pop Art</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss15 />)}
                  backgroundColor="#E9967A" 
                  backImage={backImage16}>
                  <h2>Romanticism</h2>
                </Card>
                <Card size="medium" onClick={() => openPopupWithContent(<Artgloss16 />)}
                  backgroundColor="#E9967A"
                  backImage={backImage11} >
                  <h2 style={{ color: '#000000' }}>Neo-Impressionism</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss17 />)}
                  backgroundColor="#ffffe6"
                  backImage={backImage18} >
                  <h2 style={{ color: '#000000' }}>The Bauhaus</h2>
                </Card>
                <Card size="small" onClick={() => openPopupWithContent(<Artgloss18 />)}
                  backgroundColor="#ff6666"
                  backImage={backImage17} >
                  <h2>Figuration</h2>
                </Card>
              </div>
              <AnimatedText
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
                  { text: "The Bauhaus" },
                  { text: "Figuration" },
                ]}
              />
              <div className='title2'>
              <motion.div
                style={{
                  display: 'inline-block', // Ensure the div fits the content size for better control
                  cursor: "pointer",
                  backgroundColor: "transparent", // Assuming you want the floating effect without a visible background
                  top: '900vh',
                  marginBottom: '10px',
                  position: 'absolute',
                  marginLeft: '20vh'
                }}
                initial="initial" // Starting animation state
                animate="float"
                variants={{
                  initial: { opacity: [0], y: [-10] },
                  float: {
                    y: [-10, 10], opacity: [1],
                    transition: {
                      type: 'spring',
                      damping: 5,
                      stiffness: 50,
                      duration: 0.2,
                      ease: "easeInOut", // This eases the animation for a smoother effect
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }
                }}
              >
                <a href="/test1" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white px-8 py-4 font-bold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" style={{ fontSize: '80px' }}>
                  <span className="title2">click here <br /><b>Draw your<br />own space</b></span>
                  </button>
                </a>
              </motion.div>
              </div>
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
          width: '30px', height: '30px', borderRadius: '50%',
          backgroundColor: 'white', mixBlendMode: 'difference'
        }} />
      </div>
    </>

  );
}


const rootElement = document.getElementById("title");
ReactDOM.render(<Home />, rootElement);
export default transition(Home);