import React from 'react';

import image2 from '../../Images/cardImage4.svg'
import image1 from '../../Images/cardImage5.svg'
import image3 from '../../Images/cardImage6.svg'
import './section2.css'; 
const Section2 = () => {
  return (
   
     <div className='section2'>
      <div className='section2__text'>
      <h1 >Case Studies</h1>
      <a href="../../App.js">↗ Discover All</a>
      </div>
      <div className='card_list2'>
      <div className='card2'>
        <img src={image1} alt="" />
        <h5>How to monetize user experience?</h5>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet...</h6>
        <a href="../../App.js">↗ Discover</a>
      </div>
      <div className='card2'>
        <img src={image2} alt="" />
        <h5>For Banks, Excellence in Digital Sales is not as far as You Think</h5>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet...</h6>
        <a href="../../App.js">↗ Discover</a>
      </div>
      <div className='card2'>
        <img src={image3} alt="" />
        <h5>Lorem ipsum dolor sit amet</h5>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet...</h6>
        <a href="../../App.js">↗ Discover</a>
      </div>
      </div>
      
     </div>
  
  );
};
  
export default Section2;