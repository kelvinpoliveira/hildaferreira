// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {Navbar} from '../components/Navbar/index';
import Hero from 'components/Hero/index';
import About from 'components/About/index';
import Programs from 'components/Programs/index';
import ContactForm from 'components/ContactForm/index';
import Footer from 'components/Footer/index';
import { useContext } from 'react';
import {AnalyticsContext} from 'services/ga/AnalyticsContext'
import ReactGA from 'react-ga4';

const Home = () => {
  const TRACKING_ID = "G-BR85R90X35";

  // const ini = useContext(AnalyticsContext);

  useEffect(() => {
    console.log("iniciou 1")
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/Home", title: "Homeeee" });
    console.log("iniciou 3")
  }, []);


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
};

export default Home;