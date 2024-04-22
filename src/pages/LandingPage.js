import React, { useRef } from 'react';
import Cover from '../components/Cover.js';
import About from '../components/About';
import Requirements from '../components/Requirements';
import Contacts from '../components/Contacts';

import Gallery from '../components/Gallery';

export default function LandingPage() {
  const coverRef = useRef();
  const aboutRef = useRef();
  const reqRef = useRef();
  const contactRef = useRef();
  const galleryRef = useRef();
  return (
    <main className="flex-shrink-0">
      <section ref={coverRef} className="pt-0">
        <Cover />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={reqRef}>
        <Requirements />
      </section>    
      <section ref={galleryRef}>
        <Gallery />
      </section>
      <section ref={contactRef}>
        <Contacts />
      </section>
    </main>
  );
}
