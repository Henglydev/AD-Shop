import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Product from './components/product/product.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
    const[ proAPI, setProAPI] = useState([]);

    useEffect(()=>{
        pro();
    }, []);


    const pro = async () => {
        const rps = await fetch('https://api.escuelajs.co/api/v1/products'); 

        const jsonData = await rps.json();
        
        setProAPI(jsonData);
    };

    return (
      <>
       <Navbar />
        <Hero />
        <Product pro={proAPI} /> 
        <Footer />
      </>
         
    );
};

export default App;
