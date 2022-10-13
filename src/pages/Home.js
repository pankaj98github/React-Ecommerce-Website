import React from 'react';
import FeatureProduct from '../components/FeatureProduct';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import Contact from './Contact';


const Home = () => {
  const data = {
    name : "PK Store"
  }
  return (
  <>
    <HeroSection myData={data} />
    <FeatureProduct />
    <Services />
    <Trusted />
    <Contact />
  </>
  )
};

export default Home;
