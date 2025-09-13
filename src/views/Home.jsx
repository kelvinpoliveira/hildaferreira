// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {Navbar} from '../components/Navbar';
import Hero from 'components/Hero/index';
import About from 'components/About/index';
import Programs from 'components/Programs/index';
import ContactForm from 'components/ContactForm/index';
import Footer from 'components/Footer/index';
import { useContext } from 'react';
import {AnalyticsContext} from 'services/ga/AnalyticsContext'

const Home = (() => {

  const [isVisible, setIsVisible] = useState(false);
  const ini = useContext(AnalyticsContext);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href) => {
    console.log("🚀 ~ scrollToSection ~ href:", href)
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <ContactForm />
      <Footer />
    </div>
  );
});

export default Home;