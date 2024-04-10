import {useState} from "react";
import { motion ,AnimatePresence } from 'framer-motion';
import img0 from './artpic/1.jpg';
import img1 from './artist/1.png';
import img2 from './artist/2.png';
import img3 from './artist/3.jpg';
import img4 from './artist/4.png';
import img5 from './artist/5.jpg';
import img6 from './artist/6.png';
import img7 from './artist/7.png';
import img8 from './artist/8.png';
import img9 from './artist/9.png';
import img10 from './artist/10.jpg';
import img11 from './artist/11.jpg';
import img12 from './artist/12.png';
import img13 from './artist/13.png';
import img14 from './artist/14.jpg';
import img15 from './artist/15.webp';
import img17 from './artist/17.jpg';
import img18 from './artist/18.png';
import img19 from './artist/19.jpg';
import img20 from './artist/20.png';
import img21 from './artist/21.jpg';
import img22 from './artist/22.png';
import img23 from './artist/23.png';
import img24 from './artist/24.jpeg';
import img25 from './artist/25.jpg';
import img26 from './artist/26.png';
import img27 from './artist/27.jpg';
import img28 from './artist/28.png';
import img29 from './artist/29.webp';
import img31 from './artist/31.jpg';
import img32 from './artist/32.png';
import img34 from './artist/34.jpg';
import img35 from './artist/35.jpg';
import img36 from './artist/36.avif';
import img37 from './artist/37.jpg';
import img38 from './artist/38.jpg';
import img39 from './artist/39.jpg';
import img40 from './artist/40.jpg';
import img41 from './artist/41.jpg';
import img42 from './artist/42.webp';
import img43 from './artist/43.jpg';
import img44 from './artist/44.png';
import img45 from './artist/45.png';
import img46 from './artist/46.png';
import img47 from './artist/47.png';
import img48 from './artist/48.png';
import img49 from './artist/49.jpeg';
import img50 from './artist/50.jpeg';
import img51 from './artist/51.jpeg';
import img52 from './artist/52.jpeg';
import img53 from './artist/53.jpeg';
import img54 from './artist/54.jpeg';
import img55 from './artist/55.jpeg';
import img56 from './artist/56.png';
import img57 from './artist/58.jpeg';






const FollowCursorImage = ({ imageSrc, children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    // Calculate position to keep the image near the cursor but slightly offset
    setCursorPos({
      x: e.clientX + 80, // Offset to the right of the cursor
      y: e.clientY + 80, // Offset below the cursor
    });
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {children}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: cursorPos.x, y: cursorPos.y }}
            animate={{ scale: 1, opacity: 1, x: cursorPos.x, y: cursorPos.y }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ opacity: { duration: 0.2 }, scale: { type: "spring", stiffness: 300, duration: 0.5 } }}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              pointerEvents: 'none',
              zIndex: 10,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <img src={imageSrc} alt="" style={{ maxWidth: '300px', maxHeight: '300px' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Artgloss1 = () => (
  <div className="flex items-center justify-center" style={{ height: '100vh' }}>
    <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
      <h1 className="text-2xl font-bold">Abstraction/Abstract Art</h1>
      <p className="mt-4">
        Art which does not seek torepresent a recognizable visual reality. It seeks to achieve its effect using <FollowCursorImage imageSrc={img0}><span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>shapes, forms, colors, and textures</span></FollowCursorImage>.
      </p>
    </div>
  </div>
);
export const Artgloss2 = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Abstract Expressionism </h1>
        <p className="mt-4">An expressive form of Abstract painting mostly associated with New York artists of the 1940s and 50s, especially <FollowCursorImage imageSrc={img1}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Jackson Pollock</span></FollowCursorImage>, <FollowCursorImage imageSrc={img2}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>JMark Rothko</span></FollowCursorImage>,  <FollowCursorImage imageSrc={img3}>Clyfford Still</FollowCursorImage>,  <FollowCursorImage imageSrc={img4}><span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Willem de Kooning </span> </FollowCursorImage> and <FollowCursorImage imageSrc={img5}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Franz Kline.</span></FollowCursorImage></p>
      </div>
    </div>
);
export const Artgloss3 = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Colour Field painting </h1>
        <p className="mt-4">A form of Abstract art where colour is emphasised, often in broad washes across the surface of the painting, made in the 1950s by American artists including <FollowCursorImage imageSrc={img2}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Rothko</span></FollowCursorImage>, Still and <FollowCursorImage imageSrc={img6}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Barnett Newman</span></FollowCursorImage> and <FollowCursorImage imageSrc={img7}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Kenneth Noland. </span></FollowCursorImage></p>
      </div>
    </div>
);
export const Artgloss4 = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Conceptual art </h1>
        <p className="mt-3">Art that asks questions about the nature of art, which can take the form of unusual materials, ready-made objects, statements, performances, happenings or videos. Conceptual art challenges existing ways of making and viewing art. Fountain, the upturned urinal of 1917 by <FollowCursorImage imageSrc={img14}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Marcel Duchamp</span></FollowCursorImage> is probably the first instance of Conceptual art. More recent examples include the work of <FollowCursorImage imageSrc={img15}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Lawrence Weiner</span></FollowCursorImage>, <FollowCursorImage imageSrc={img46}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Carl Andre</span></FollowCursorImage> and <FollowCursorImage imageSrc={img17}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Hans Haacke</span></FollowCursorImage> in the 1960s to that of <FollowCursorImage imageSrc={img57}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Martin Creed </span></FollowCursorImage> today.</p>
      </div>
    </div>
);
export const Artgloss5= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Indo-Persian  </h1>
        <p className="mt-2">Miniature painting Miniature painting became highly developed in India during the seventeenth century under the <FollowCursorImage imageSrc={img8}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Mughal Emperor Akbar </span></FollowCursorImage>. Court painters developed ‘tasvir’, the ‘magical art’ of depicting figures and the Emperor commissioned portraits. The Mughal tradition combined the styles of Persian book paintings, with their flattened forms and symbolic postures with so-called ‘Farangi’ – French, European – elements: realistic features, individualised faces seen in Christian illuminated manuscripts brought to Akbar by the Jesuits. </p>
      </div>
    </div>
);
export const Artgloss6= () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
    <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
      <h1 className="text-2xl font-bold">Expressionism  </h1>
      <p className= "mt-2" > A form of art which attempts to represent the psychological perspective of the artist, developed in several centres in Europe from the 1890s into the 20th century. Expressionism can refer to the Fauves (‘wild beasts’), a grouping led by <FollowCursorImage imageSrc={img9}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Henri Matisse</span></FollowCursorImage>  and  <FollowCursorImage imageSrc={img10}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Andre Derainin </span> </FollowCursorImage>   Paris 1905-10, and German Expressionist groupings, such as Die Brücke (the Bridge). in Dresden (1905-), which included <FollowCursorImage imageSrc={img17}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Hans Heckel </span></FollowCursorImage> and <FollowCursorImage imageSrc={img11}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Ernst Ludwig Kirchner </span></FollowCursorImage> , and Der Blaue Reiter(the Bridge) (the Blue Rider) in Munich, which included  <FollowCursorImage imageSrc={img5}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Franz Marc  (the Bridge) </span></FollowCursorImage> and  Paul Klee (the Bridge), along with the Russian Abstract artist  Vassily Kandinsky (the Bridge) . Figuration A form of art which seeks to represent a recognisable visual reality.</p>
    </div>
  </div>
);
export const Artgloss7= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Cubism   </h1>
        <p className="mt-4"> A form of art pioneered by <FollowCursorImage imageSrc={img12}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Pablo Picasso </span></FollowCursorImage> and <FollowCursorImage imageSrc={img13}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Georges Braque(the Bridge) </span></FollowCursorImage> in Paris in 1907 which sought to depict an object from multiple viewpoints. Analytic Cubism breaks forms down, while Synthetic Cubism assembles forms from multiple components.</p>
      </div>
    </div>
);
export const Artgloss8= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Installation art   </h1>
        <p className="mt-3"> Art which expands from the canvas or sculpture into a form which can exist on the gallery floor, walls and/or ceiling or even beyond the gallery altogether. Installation art uses everyday materials and can be a simple construction or a multi-storey structure that the viewer can physically enter. Possibly the earliest example of installation art is the <FollowCursorImage imageSrc={img20}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>German Kurt Schwitters’s Merzbau</span></FollowCursorImage> , begun in 1919, followed by <FollowCursorImage imageSrc={img21}><span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> the Russian El Lissitsky’s </span></FollowCursorImage> Proun Room, 1923</p>
      </div>
    </div>
);
export const Artgloss9= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Constructivism </h1>
        <p className="mt-4"> A Russian art movement led by <FollowCursorImage imageSrc={img18}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Alexander Rodchenko</span></FollowCursorImage> and <FollowCursorImage imageSrc={img19}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Vladimir Tatlin </span></FollowCursorImage> begun in 1915, which was inspired by modern 20th century machinery and architecture and often used industrial materials..</p>
      </div>
    </div>
);
export const Artgloss10= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Minimalism  </h1>
        <p className="mt-2">  Minimalist art followed Abstract Expressionism and was largely American based. The term refers to art in its most simplified form such as <FollowCursorImage imageSrc={img22}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Robert Morris </span></FollowCursorImage>’s cubes and wedges of the 1960s, which were designed to place the viewer in the gallery space by making him/her aware of his/her own body within it. So-called because it was ‘empty of content’, the focus of minimalist art was on the object and its materials, most notably with <FollowCursorImage imageSrc={img45}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Frank Stella </span></FollowCursorImage>’s shaped canvases or <FollowCursorImage imageSrc={img46}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Carl Andre’ </span></FollowCursorImage>s bricks. Other artists associated with Minimalism are <FollowCursorImage imageSrc={img23}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Donald Judd </span></FollowCursorImage>,  <FollowCursorImage imageSrc={img24}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Sol Le Witt  </span></FollowCursorImage>and <FollowCursorImage imageSrc={img47}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Eva Hesse. </span></FollowCursorImage></p>
      </div>
    </div>
);
export const Artgloss11= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Modernism   </h1>
        <p className="mt-4"> A term usually taken to refer to all the revolutionary European and American art movements from 1850–1950. </p>
      </div>
    </div>
);

export const Artgloss12= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Post-Impressionism  </h1>
        <p className="mt-4">  This term refers to the generation of artists in Paris who followed the Impressionists in the 1890s, especially <FollowCursorImage imageSrc={img27}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Paul Cézanne</span></FollowCursorImage> , <FollowCursorImage imageSrc={img48}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Vincent Van Gogh</span></FollowCursorImage> and <FollowCursorImage imageSrc={img28}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Paul Gauguin</span></FollowCursorImage>. The name was given by the British art critic <FollowCursorImage imageSrc={img29}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Roger Fry</span></FollowCursorImage>, who brought works by the artists to Britain in exhibitions in 1910 and 1912. </p>
      </div>
    </div>
);
export const Artgloss13= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Impressionism  </h1>
        <p className="mt-4">  A French art movement named by its critics after <FollowCursorImage imageSrc={img40}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Claude Monet</span></FollowCursorImage>’s Impression: Sunrise 1874. With <FollowCursorImage imageSrc={img41}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Edouard Manet</span></FollowCursorImage>, <FollowCursorImage imageSrc={img42}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Edgar Degas</span></FollowCursorImage>, <FollowCursorImage imageSrc={img43}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Pierre Renoir</span></FollowCursorImage>,<FollowCursorImage imageSrc={img44}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Camille Pissarro</span></FollowCursorImage> , <FollowCursorImage imageSrc={img45}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Paul Cézanne</span></FollowCursorImage> and <FollowCursorImage imageSrc={img46}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Berthe Morisot</span></FollowCursorImage>, Monet staged seven exhibitions in Paris from 1874 –1886. Their work focused on modern subjects painted swiftly, often on the spot, with an emphasis on colour and light effects. </p>
      </div>
    </div>
);

export const Artgloss14= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Pop Art   </h1>
        <p className="mt-4"> A movement in the 1960s in Britain and America which explored the way in which the commercial world and mass culture shapes our perceptions and tastes. Artists such as <FollowCursorImage imageSrc={ img49 }> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Peter Blake </span></FollowCursorImage>, <FollowCursorImage imageSrc={img31}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Edouardo Paolozzi</span></FollowCursorImage> and <FollowCursorImage imageSrc={img32}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Richard Hamilton </span></FollowCursorImage> in Britain, and <FollowCursorImage imageSrc={img50}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Claes Oldenberg </span></FollowCursorImage>, <FollowCursorImage imageSrc={img34}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Roy Lichtenstein </span></FollowCursorImage> and <FollowCursorImage imageSrc={img35}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Andy Warhol </span></FollowCursorImage> in America all used and pastiched the visual language of Pop in their work. </p>
      </div>
    </div>
);

export const Artgloss15= () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Romanticism   </h1>
        <p className="mt-4"> A way of seeing the world that emphasises the perceptions of the individual human being rather than the inherited traditions of classicism. Romanticism flourished in the late 18th century with artists such as  <FollowCursorImage imageSrc={img36}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>William Blake</span></FollowCursorImage> and  <FollowCursorImage imageSrc={img37}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Henry Fuseli</span></FollowCursorImage> in Britain and  <FollowCursorImage imageSrc={img38}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Eugéne Delacroix</span></FollowCursorImage> in France and <FollowCursorImage imageSrc={img39}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Caspar David Friedrich </span></FollowCursorImage> in Germany in the 19th century. BD12665 Feb 2020 
 </p>
      </div>
    </div>
);
export const Artgloss16= () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
    <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
      <h1 className="text-2xl font-bold">Neo-Impressionism   </h1>
      <p className="mt-4"> A development of Impressionism by the French artists <FollowCursorImage imageSrc={img25}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Georges Seurat </span></FollowCursorImage> and <FollowCursorImage imageSrc={img26}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Paul Signac </span></FollowCursorImage> in the 1880s and 90s, where Impressionism’s blocks of complementary colours were refined to dot forms which gave the canvas a light-filled appearance. This form of art is sometimes called Pointillism.  
 </p>

    </div>
  </div>
);
export const Artgloss17= () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
    <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
      <h1 className="text-2xl font-bold">The Bauhaus </h1>
      <p className="mt-4"> The Bauhaus was an art school in Germany established by the architect Walter Gropius from 1919-1933. It taught art,craft,design and architecture and ti's teachers and pupils incclude key 20th century Modernists such as <FollowCursorImage imageSrc={img51}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Wassily Kandinsky </span></FollowCursorImage>, <FollowCursorImage imageSrc={img52}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Paul Klee  </span></FollowCursorImage> <FollowCursorImage imageSrc={img53}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Ludwig Mies van der Rohe </span></FollowCursorImage>.<FollowCursorImage imageSrc={img54}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}> Laszio Moholy-Nagy </span></FollowCursorImage>,<FollowCursorImage imageSrc={img55}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>  Naum Gabo </span></FollowCursorImage> and <FollowCursorImage imageSrc={img56}> <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>  Josef and Anni Albers.   </span></FollowCursorImage>
 </p>

    </div>
  </div>
);
export const Artgloss18= () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
    <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
      <h1 className="text-2xl font-bold">Figuration  </h1>
      <p className="mt-4"> A form of art which seeks to represent a recognisable visual reality.  
 </p>

    </div>
  </div>
);



