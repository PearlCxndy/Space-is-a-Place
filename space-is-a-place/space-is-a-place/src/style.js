import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: grey;
`;


export const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: Black;
  font-size: 15em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 2s ease-in-out;
`;

export const Paragraph = styled.p`
  max-width: 800px;
  font-size: 32px;
  position: relative;
  margin: 10vh;
`;

export const Section = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 5em 0;
  color: grey;
`;