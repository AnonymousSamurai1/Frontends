import styled from 'styled-components'
import IntroPage from '../assets/AgroBioChem.mp4'
import IntroDescription from '../components/IntroDescription'
import Logo from '../assets/logo2.png';

function Introduction() {
  
  return (
    <Container>

      <div class="introduction">
        <video src={IntroPage} autoPlay loop muted/>

        <div className='description'>
          <img src={Logo} alt='Logo'className="logo"/>
          <IntroDescription />
        </div>
        
      </div>
    </Container>
  )
}

const Container = styled.div`
  .introduction {
    width: 100%;
    height: 100vh; 
    display: flex;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .description{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color:  rgba(0, 0, 0, 0.8);
    .logo{
      padding: 1%;
      width: 300px;
      height: 70px;
    }
  }
  @media (max-width: 900px){
    .introduction{
      height: 105vh;
    }
    .description{
      width: 100.50%;
      height: 105vh;
    }
  }
  
`

export default Introduction
