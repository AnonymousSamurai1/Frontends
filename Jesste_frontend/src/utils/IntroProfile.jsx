import React from 'react'
import styled from 'styled-components'
import Construction from '../assets/Construction.mp4'
import { Fade } from 'react-reveal'

function IntroProfile() {
  return (
    <Container>

      <div className='experience'>
        <h1>10 Years of Experience in Construction</h1>
        <p>
        Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
        Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque
        </p>
        <button>Find Out More</button>
      </div>

      <div className='experience_details'>

        <Fade top duration={1000} distance="40px">
            <video src={Construction} autoPlay loop muted/>
        </Fade>

        <div className='experience_details_text'>
          <div className='enquiry'>
            <h1>Call for more enquires</h1>
            <p>(+233)54-361-9041</p>
          </div>
          <div className="button-container">
            <button>Read More</button>
          </div>
        </div>

      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  .experience{
    width: 40%;
    background: #262626;
    padding: 10% 4%;
  }
  .experience h1{
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 53.0833px;
    line-height: 65px;
    color: #FFFFFF;
  }
  .experience p{
    color: #FFFFFF;
    font-family: "Calibri";
    font-size: 15px;
    font-family: "Poppins";
    line-height: 25px;
    text-align: justify;
    padding: 7% 7% 7% 0%;
  }
  .experience button{
    width: 200px;
    height: 50px;
    background: transparent;
    border-radius: 10px;
    border: 3px solid white;
    color: white;
    font-weight: bold;
  }
  .experience button:hover{
    background: transparent;
    border-radius: 10px;
    border: 3px solid white;
    color: white;
    font-weight: bold;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .experience_details_text{
    display: flex;
  }
  .enquiry{
    background: #D9D9D9;
    width: 50% 
  }
  .enquiry h1{
    text-align: center;
    font-family: 'Rubik', sans-serif;
    padding-top: 2%;
    font-size: 32px;
    font-weight: 600;
  }
  .enquiry p{
    text-align: center;
    font-family: 'Rubik', sans-serif;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 18px;
    font-weight: 400;
  }
  .button-container{
    padding: 1% 8% 0% 8%;
  }
  .button-container button{
    width: 250px;
    height: 65px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    background: #D9D9D9;
    border-radius: 10px;
    border: none;
  }
  .button-container button: hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    background: rgba(217, 217, 217, 0.87);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  }
`
export default IntroProfile
