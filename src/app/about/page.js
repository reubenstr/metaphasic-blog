import React from 'react';
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";



const About = () => {
  return (
    <main>
      <Container>
        <Intro />

        <div className="max-w-2xl mx-auto">
          <article className="mb-16">

            <div className="flex justify-center rounded">
              <img src="/assets/images/reuben-strangelove-with-sydney.jpg" alt="reuben strangelove" className="rounded-lg" />
            </div>

            <p className="mt-5">
              Hello everybody! I'm Reuben Strangelove and my passion is building cyber-physical systems combining data or mechanisms with visually interesting presentations. I enjoy developing the full software/hardware stack from the PCBs, firmware, communcation architecture, to the cloud endpoints, database, and frontend GUI/dashboard.
            </p>

            <p className="mt-5">
             My goal with Metaphasic Labs is inspiring current and future makers by showing completed projects with detailed images, providing design files, and sharing source code.
            </p>

            <p className="mt-5">
            Go out and make something fun!
            </p>

          </article>
        </div>
      </Container>
    </main>
  );
};

export default About;