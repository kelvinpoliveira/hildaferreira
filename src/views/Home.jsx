// @ts-nocheck
import About from 'components/About/index';
import ContactForm from 'components/ContactForm/index';
import Footer from 'components/Footer/index';
import Hero from 'components/Hero/index';
import Programs from 'components/Programs/index';
import Testimonials from 'components/Testemonials/index';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Navbar } from '../components/Navbar/index';

const Home = () => {
  const TRACKING_ID = "G-BR85R90X35";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/Home", title: "Home" });
  }, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;