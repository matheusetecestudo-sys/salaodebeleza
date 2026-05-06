/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Banner from './components/Banner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-bg selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Banner />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
