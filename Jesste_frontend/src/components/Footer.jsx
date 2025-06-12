import React from 'react'
import styled from 'styled-components'

 const Nav = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Categories',
    link: '/category',
  },
  {
    title: 'Contact',
    link: '/contact',
  }
 ]

function Footer() {
  return (
    <Container>
      <div className='main_footer'>

            <div className='main_footer_nav'>
            {
              Nav.map((each, index) => (
                <div className='footer_nav' key={index}>
                <a href={each.link}>{each.title}</a>
                </div>
              ))
            }
          </div>

          <div className='copyright'>

            <div className='main_copyright'>
                <h3>&copy; Copyright @ 2023, Edem Aheto </h3>
            </div>
            
          </div>

      </div>

     
    </Container>
  )
}
const Container = styled.div`
padding-top: 4%;
.main_footer{
  background: grey;
}
.main_footer_nav{
  display: flex;
  padding: 0% 0%;
  padding: 2% 12%;
}
.footer_nav{
  padding-left: 15%;
}
.footer_nav a{
  text-decoration: none;
  color: white;
  padding-left: 30%;
  padding-top: 10%;
}

.copyright{
  background: grey;
  padding: 1% 35%;
}
.main_copyright{
  border-top: 5px solid white;
  text-align: center;
  padding: 1% 0%;
  color: white;
  font-family: "Rubik";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
@media (max-width: 760px){
  .main_footer{
    display: block;
  }
  .main_footer_nav{
    justify-content: space-around;
    padding-top: 4%;
  }
  .footer_nav{
    padding-left: 0%;
  }
  .footer_nav a{
    padding-left: 0%;
  }
  .copyright{
    padding: 5% 10%;
  }
  
`
export default Footer