import React from 'react';
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

const Contact = () => { 
  return (
    <main>
      <Container>
        <Intro />
        <div className="flex justify-center">      
          Contact via email through: reuben stranglove at gmail dot com      
        </div>
      </Container>
    </main>
  );  
};

export default Contact;