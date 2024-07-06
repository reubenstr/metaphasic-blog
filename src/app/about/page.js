import React from 'react';
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

const About = () => { 
  return (
    <main>
      <Container>
        <Intro />
        <article className="mb-16">
          About page, coming soon!
        </article>
      </Container>
    </main>
  );  
};

export default About;