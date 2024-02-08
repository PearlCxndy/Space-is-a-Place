import { useScroll, useTransform } from "framer-motion";
import {
  Header,
  Paragraph,
  Title,
  Section,

} from "./style";



const App = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <Header>
        <Title style={{ x }}>Space is A Place</Title>
      </Header>
      <Section>
        <Paragraph>
          test
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          test
        </Paragraph>
      </Section>
    </>
  );
};

export default App;