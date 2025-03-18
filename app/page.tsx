import Navbar from './components/Home/Navbar';
import Hero from "./components/Home/Hero";
import Features from "./components/Home/Features";
import Howitworks from './components/Home/Howitworks';
import Showcase from './components/Home/Showcase';
import Testimonials from './components/Home/Testimonials';
import CTA from './components/Home/CTA';
import Footer from './components/Home/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Howitworks />
      <Showcase />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
