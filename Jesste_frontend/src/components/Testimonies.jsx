import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'
import Person3 from '../assets/person3.png'
import Person4 from '../assets/person4.png'
import Person5 from '../assets/person5.png'
import Person6 from '../assets/person6.png'


const slideImages = [
  {
    image: Person1,
    name: 'Mavis',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  {
    image: Person2,
    name: 'Angela',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  {
    image: Person3,
    name: 'Daniel',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  {
    image: Person4,
    name: 'Samuel',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  {
    image: Person5,
    name: 'Emmanuel',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  {
    image: Person6,
    name: 'Princess',
    description: 'I am a full stack developer with a background in web development and a passion for building web applications.',
  },
  ];

function Testimonies() {

    const slideProperties = {
        duration: 3500,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
      };

  return (
    <Container>
        <div className='title'>
          <h1>Testimonials</h1>
          <Typed strings={["Meet Some Clients"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
        </div>
        
        <div className='background'>
        <Slide {...slideProperties}>
        {slideImages.map((each, index)=>(
        
            <div key={index} className='slide'>
              <div className='main_slider'>
                <div className='image_container'>
                  <img src={each.image} alt='testimonial' className='slider'/>
                </div>
                <h2>{each.name}</h2>
                <p>{each.description}</p>
              </div>
            </div>
          ))
        }
        </Slide>
        </div>
    </Container>
  )
}
const Container = styled.div`
.title{
  padding: 8% 1% 3% 1%;
}
h1{
    font-size: 2rem;
    text-align: center;
    padding-buttom: 6rem;
    color: #E3CD5A;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
}
.typed{
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
    padding-left: 32.5%;
    font-family: 'Rubik', sans-serif;
}
.background{
  padding: 1%;
  background-color: #D9D9D9;
}
.slide{
  padding: 2% 19%;
  
}
.main_slider{
  width: 37%;
  height: 53vh;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: white;
}
.image_container{
  padding: 8% 27%;
}
.slider{
  width: 150px;
  height: 150px;
  
  border-radius: 20px;
}
.main_slider h2{
  text-align: center;
  padding-top: 0.5%;
}
.main_slider p{
  padding: 7%;
}
@media (max-width: 760px){
  .title{
    padding: 20% 1% 3% 1%;
  }
  h1{
    font-size: 31px;
  }
  .typed{
    font-size: 31px;
    padding-left: 13%;
  }
  .slide{
    padding: 2% 3%; 
  }
  .image_container{
    padding: 8% 27%;
  }
  .main_slider{
    width: 93%;
  }
  .main_slider p{
    padding-left: 13%;
  }
}
`
export default Testimonies