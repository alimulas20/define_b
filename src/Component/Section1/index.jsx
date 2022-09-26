import React from 'react';
import './section1.css'; 
import image1 from '../../Images/cardImage1.svg'
import image2 from '../../Images/cardImage2.svg'
import image3 from '../../Images/cardImage3.svg'
const Section1 = () => {
  return (
   
    <div className='section'>
      <h1 className='section__text'>Trending Insights</h1>
      <div className='card_list'>
        <div className='card'>
          <img src={image1} alt="" />
          <h4>BLOG</h4>
          <h5>How to monetize user experience?</h5>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet...</h6>
          <a href="../../App.js">↗ Discover</a>
        </div>
        <div className='card'>
          <img src={image2} alt="" />
          <h4>CASE STUDY</h4>
          <h5>For Banks, Excellence in Digital Sales is not as far as You Think</h5>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet...</h6>
          <a href="../../App.js">↗ Discover</a>
        </div>
        <div className='card'>
          <img src={image3} alt="" />
          <h4>ARTICLE</h4>
          <h5>Lorem ipsum dolor sit amet</h5>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet...</h6>
          <a href="../../App.js">↗ Discover</a>
        </div>
      </div>
   </div>
  
  );
};
  
export default Section1;