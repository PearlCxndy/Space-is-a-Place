import React, { useState, useRef, useEffect } from "react";

// Max points for the line drawing
const MAX_POINTS = 150;

const MouseMoveLineDrawing = ({ children }) => {
  const [points, setPoints] = useState([]);
  const containerRef = useRef(null); // Reference to the container for dynamic sizing

  const handleMouseMove = (e) => {
    // Ensure the mouse movement is relative to the container's position
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const newPoint = `${x},${y}`;

    setPoints((prevPoints) => {
      const newPoints = [...prevPoints, newPoint];
      if (newPoints.length > MAX_POINTS) {
        newPoints.shift(); // Keep the points array at a fixed maximum length
      }
      return newPoints;
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full"
      style={{ width: '100%', height: '100%' }} // Container takes the full size of its parent
    >
      {children}
      <svg
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
        viewBox="0 0 100% 100%"
      >
        <polyline
          fill="none"
          stroke="black"
          strokeWidth="2"
          points={points.join(" ")}
        />
      </svg>
    </div>
  );
};

export const Artgloss1 = () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Abstraction/Abstract Art</h1>
        <p className="mt-4">Art which does not seek to represent a recognizable visual reality. It seeks to achieve its effect using shapes, forms, colors, and textures.</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss2 = () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Abstract Expressionism </h1>
        <p className="mt-4">An expressive form of Abstract painting mostly associated with New York artists of the 1940s and 50s, especially Jackson Pollock, Mark Rothko, Clyfford Still, Willem de Kooning and Franz Kline.</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss3 = () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Colour Field painting </h1>
        <p className="mt-4">A form of Abstract art where colour is emphasised, often in broad washes across the surface of the painting, made in the 1950s by American artists including Rothko, Still and Barnett Newman and Kenneth Noland. </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss4 = () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Conceptual art </h1>
        <p className="mt-4">Art that asks questions about the nature of art, which can take the form of unusual materials, ready-made objects, statements, performances, happenings or videos. Conceptual art challenges existing ways of making and viewing art. Fountain, the upturned urinal of 1917 by Marcel Duchamp is probably the first instance of Conceptual art. More recent examples include the work of Lawrence Weiner, Carl Andre and Hans Haacke in the 1960s to that of Martin Creed today.</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss5= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Indo-Persian  </h1>
        <p className="mt-4">Miniature painting Miniature painting became highly developed in India during the seventeenth century under the Mughal Emperor Akbar. Court painters developed ‘tasvir’, the ‘magical art’ of depicting figures and the Emperor commissioned portraits. The Mughal tradition combined the styles of Persian book paintings, with their flattened forms and symbolic postures with so-called ‘Farangi’ – French, European – elements: realistic features, individualised faces seen in Christian illuminated manuscripts brought to Akbar by the Jesuits. </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss6= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Expressionism  </h1>
        <p className="mt-4"> A form of art which attempts to represent the psychological perspective of the artist, developed in several centres in Europe from the 1890s into the 20th century. Expressionism can refer to the Fauves (‘wild beasts’), a grouping led by Henri Matisse and Andre Derain in Paris 1905-10, and German Expressionist groupings, such as Die Brücke (the Bridge) in Dresden (1905-), which included Hans Heckel and Ernst Ludwig Kirchner, and Der Blaue Reiter (the Blue Rider) in Munich, which included Franz Marc and Paul Klee, along with the Russian Abstract artist Vassily Kandinsky. Figuration A form of art which seeks to represent a recognisable visual reality.</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss7= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Cubism   </h1>
        <p className="mt-4"> A form of art pioneered by Pablo Picasso and Georges Braque in Paris in 1907 which sought to depict an object from multiple viewpoints. Analytic Cubism breaks forms down, while Synthetic Cubism assembles forms from multiple components.</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss8= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Installation art   </h1>
        <p className="mt-4"> Art which expands from the canvas or sculpture into a form which can exist on the gallery floor, walls and/or ceiling or even beyond the gallery altogether. Installation art uses everyday materials and can be a simple construction or a multi-storey structure that the viewer can physically enter. Possibly the earliest example of installation art is the German Kurt Schwitters’s Merzbau, begun in 1919, followed by the Russian El Lissitsky’s Proun Room, 1923</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss9= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Constructivism </h1>
        <p className="mt-4"> A Russian art movement led by Alexander Rodchenko and Vladimir Tatlin begun in 1915, which was inspired by modern 20th century machinery and architecture and often used industrial materials..</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss10= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Minimalism  </h1>
        <p className="mt-4">  Minimalist art followed Abstract Expressionism and was largely American based. The term refers to art in its most simplified form such as Robert Morris’s cubes and wedges of the 1960s, which were designed to place the viewer in the gallery space by making him/her aware of his/her own body within it. So-called because it was ‘empty of content’, the focus of minimalist art was on the object and its materials, most notably with Frank Stella’s shaped canvases or Carl Andre’s bricks. Other artists associated with Minimalism are Donald Judd, Sol Le Witt and Eva Hesse.</p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss11= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Modernism   </h1>
        <p className="mt-4"> A term usually taken to refer to all the revolutionary European and American art movements from 1850 –1950. Neo-Impressionism A development of Impressionism by the French artists Georges Seurat and Paul Signac in the 1880s and 90s, where Impressionism’s blocks of complementary colours were refined to dot forms which gave the canvas a light-filled appearance. This form of art is sometimes called Pointillism. </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);

export const Artgloss12= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Post-Impressionism  </h1>
        <p className="mt-4">  This term refers to the generation of artists in Paris who followed the Impressionists in the 1890s, especially Paul Cézanne, Vincent Van Gogh and Paul Gauguin. The name was given by the British art critic Roger Fry, who brought works by the artists to Britain in exhibitions in 1910 and 1912. </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);
export const Artgloss13= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Impressionism  </h1>
        <p className="mt-4">  A French art movement named by its critics after Claude Monet’s Impression: Sunrise 1874. With Edouard Manet, Edgar Degas, Pierre Renoir, Camille Pissarro, Paul Cézanne and Berthe Morisot, Monet staged seven exhibitions in Paris from 1874 –1886. Their work focused on modern subjects painted swiftly, often on the spot, with an emphasis on colour and light effects. </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);

export const Artgloss14= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Pop Art   </h1>
        <p className="mt-4"> A movement in the 1960s in Britain and America which explored the way in which the commercial world and mass culture shapes our perceptions and tastes. Artists such as Peter Blake, Edouardo Paolozzi and Richard Hamilton in Britain, and Claes Oldenberg, Roy Lichtenstein and Andy Warhol in America all used and pastiched the visual language of Pop in their work. </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);

export const Artgloss15= () => (
  <MouseMoveLineDrawing>
    <div className="absolute inset-0 flex items-center justify-center bg-white opacity-90">
      <div className="p-10 rounded-lg shadow-lg text-black" style={{ maxWidth: '80%', maxHeight: '80%', overflowY: 'auto' }}>
        <h1 className="text-2xl font-bold">Romanticism   </h1>
        <p className="mt-4"> A way of seeing the world that emphasises the perceptions of the individual human being rather than the inherited traditions of classicism. Romanticism flourished in the late 18th century with artists such as William Blake and Henry Fuseli in Britain and Eugéne Delacroix in France and Caspar David Friedrich in Germany in the 19th century. BD12665 Feb 2020 
 </p>
      </div>
    </div>
  </MouseMoveLineDrawing>
);



