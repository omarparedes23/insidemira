import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Methods from '../components/Methods';
import Services from '../components/Services';
import Topics from '../components/Topics';
import Thoughts from '../components/Thoughts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Methods />
      <Services />
      <Topics />
      <Thoughts />
      <Contact />
      <Footer />
    </main>
  );
}