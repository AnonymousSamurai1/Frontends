import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../assets/Ellipse.svg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Cancel from '../assets/cancel.png';
import Fade from 'react-reveal'
import Menu from '../assets/Menu.png'
import Home from '../assets/Home.png'
import About from '../assets/About.png'
import Category from '../assets/Category.png'
import Contact from '../assets/Contact.png'
import Join from '../assets/Join.png'

const NavIcons = [
  {
    link : '/',
    image : Home,
    title : 'Home',
  },
  {
    link : '/about',
    image : About,
    title : 'About Us',
  },
  {
    link : '/category',
    image : Category,
    title : 'Category',
  },
  {
    link : '/contact',
    image : Contact,
    title : 'Contact',
  },
  {
    link : '/admin',
    image : Join,
    title : 'Admin',
  }
]

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };



  const[join, setJoin] = useState(false);

  const handleJoin = () => {
    return setJoin(true);
  };
  const handleLeaveJoin = () => {
    return setJoin(false);
  };
  

  return (
    <Container>

        <div className="logo">
            <motion.img src={Logo} alt='Logo'
            animate={{rotate:360}} 
            initial={{scale:1}} 
            transition={{repeat: 1, duration: 1}}
            />
        </div>
        

        <nav>
            <ul>
                <li><Link  to= '/' className='navigation'>Home</Link></li>
                <li><Link to= '/about' className='navigation'>About</Link></li>
                <li onMouseLeave={handleLeave}>
                    <li onMouseEnter={handleHover}><Link to= '/category' className='navigation'>Categories</Link></li>
                    {isOpen && (
                      <Fade top duration={1000} distance="40px">
                      <div className="main-menu">
                        <li><Link to= '/category' className='navigation'>Architecture</Link></li>
                        <li><Link to= '' className='navigation'>Construction</Link></li>
                        <li><Link to= '' className='navigation'>Survey</Link></li>
                        <li><Link to= '' className='navigation'>Civil Engineering</Link></li>
                        <li><Link to= '' className='navigation'>Land Sales</Link></li>
                      </div>
                      </Fade>
                    )}
                </li>
                <li><Link to= '/contact' className='navigation'>Contact</Link></li>    
            </ul>
        </nav>

        <div className='authentication'>
            <a href='/admin'><button className='join'>Admin</button></a>
        </div>

        
        <img src={Menu} alt = '' className='hambuger' onClick={handleJoin}/>
          {
            join && (
              <div className='load'>
              
                  <img src={Cancel} alt='' onClick={handleLeaveJoin} className='main_cancel'/>
                <div className='load_link'>
                {
                  NavIcons.map((icon, index)=>(
                    <Fade right duration={1000} distance="40px">
                      <div className = 'NavMain' key={index}>
                        <Link to={icon.link}><img src={icon.image} alt='images' /></Link>
                        <p>{icon.title}</p>
                      </div>
                    </Fade>
                  ))
                }
                </div>
              </div>
            )
          }
      

    </Container>
  )
}

const Container = styled.div`

  display: flex;
  justify-content: space-around;

  .logo{
    padding: 1%;
    width: 50%
  }
  
  img{
    width: 60px;
    height: 60px;
  }
  nav{
    padding-right: 28%;
    width: 50%;
  }
  nav ul{
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  nav ul li{
    line-height: 37px;
    color: #FFFFFF;
    text-decoration: none;
  }
  nav ul li: hover{
    color: #FFD39F;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .navigation{
    font-family: kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 37px;
    color: rgb(189, 189, 189);
    text-decoration: none;
  }
  .navigation: hover{
    color: #FFD39F;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .main-menu {
    display: block;
    position: absolute;
    top: 100%;
    width: 180px;
    height: 200px;
    border: 1px solid white;
    color: white;
    padding-left: 30%;
    background: rgba(82, 82, 82, 0.74);
    border-radius: 0px 20px 20px 20px;
  }
  .authentication{
    display:flex;
    padding: 2% 0%;
    width: 16%;
  }
  .main_auth{
    width: 100%;
  }
  .join{
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: 3px solid white;
    font-size: 17px;
    background: transparent;
    color: white;
    font-weight: bold;
  }
  .join:hover{
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background: white;
    color: black;
    cursor: pointer;
    font-weight: bold;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .join_main{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    overflow: hidden;
    background: rgba(82, 82, 82, 0.95);
  }
  .menu_image{
    width: 50px;
    height: 50px;
    float: right;
    margin: 10px;
    cursor: pointer;
  }
  .menu_image img{
    position: fixed;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .hambuger{
    display: none;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 760px){
    displaY: flex;

  .logo{
    padding: 2%;
    width: 100%;
  }
  nav{
    display: none;
  }
  .authentication{
    display: none;
  }
  .hambuger{
    display: block;
    padding: 6%;
    width: 30px;
    height: 30px;
  }
  .load{
    position: fixed;
    display: block;
    width: 100%;
    z-index: 3;
    background: rgba(82, 82, 82, 0.98);
  }
  .main_cancel{
    width: 40px;
    height: 40px;
    float: right;
    padding: 6%;
  }
  .main_loader{
    width: 100%;
    height: 100%;
    background: red;
  }
  .load_link{
    font-size: 25px;
    padding: 30% 5%;
    text decoration: none;
  }
  .load_link a{
    color: white;
    text decoration: none;
  }
  .NavMain{
    display: flex;
    margin-top: 50px;
  }
  .NavMain img{
    width: 50px;
    height: 50px;
  }
  .NavMain img:hover{
    transformation: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .NavMain p{
    padding: 4% 6%;
    color: white;
  }
}

`

export default Navbar
