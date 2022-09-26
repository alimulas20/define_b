import React,{useState,useEffect} from 'react';
import logo from '../../Images/definex-logo.svg';
import navbarImage from '../../Images/navbarImage_bot.svg';
import buttonImage from '../../Images/icon.jpg'
import './index.css'; 
const Navbar = () => {
  const [isOpen,setOpen]=useState( !window.matchMedia("(max-width: 820px)").matches);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 820px)").matches
  )


  useEffect(() => {
    window
    .matchMedia("(max-width: 820px)")
    .addEventListener('change', e => setMatches( e.matches ));
    
  }, []);
  useEffect(() => {
    window
    .matchMedia("(max-width: 820px)")
    .addEventListener('change', e => setOpen( !e.matches ));
    
  }, []);
  return (
   <div className='navbar'>
    <nav className='navbar__top'>
        <img src={logo} alt="logo" className='navbar__image'/>
        <div className='navbar__top--type'>
        <button><img className='button__image' src={buttonImage} alt="buttonImage" onClick={(e)=>{setOpen(!isOpen)}}/></button>
          {isOpen&&
            <ul className={!matches ? 'navbar__list' : 'navbar__list2'}>
            {["About","Our Focus","Services","Labs","Insights","Careers","Contact"].map((li,i)=><li className="navbar__list--item" key={li+i}>{li}</li>)}
            </ul>
          }
        </div>
        
          
        
     </nav>
     <div className='navbar__bot'>
      <img className='navbar__bot--image' src={navbarImage} alt="navbarImage" />
      <div className='navbar__bot--text'>
        <h3>BLOG</h3>
        <h1>How to monetize user experience?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et iaculis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="../../App.js"> 
          ↗ Read
        </a>
      </div>
      
     </div>
   </div>
     
  
  );
};
  
export default Navbar;