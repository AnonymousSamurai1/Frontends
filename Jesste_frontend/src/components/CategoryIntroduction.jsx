import React, {useState}from 'react'
import styled from 'styled-components'
import Header from './Header'
import ArchitectureLogo from '../assets/architecture-logo.png'
import CivilLogo from '../assets/construction-logo.png'
import SurveyLogo from '../assets/land-surveying-logo.png'
import ConstructionLogo from '../assets/building-logo.png'
import SaleLogo from '../assets/landscape-logo.png'
import Architecture from './Architecture'
import Survey from './Survey'
import Civil from './Civil'
import Construction from './Construction'
import LandSale from './LandSale'

function CategoryIntroduction() {
  
    const [currentPage, setCurrentPage] = useState('architecture');
  
    const navigateTo = (page) => {
      setCurrentPage(page);
    };

  return (
    <Container>
        <Header head="Categories" />
        <div className='main-nav'>
        <div>
      <nav className='cat-nav'>
        <ul>
          <li onClick={() => navigateTo('architecture')}><img src={ArchitectureLogo} /></li>
          <li onClick={() => navigateTo('survey')}><img src={SurveyLogo} /></li>
          <li onClick={() => navigateTo('civil')}><img src={CivilLogo} /></li>
          <li onClick={() => navigateTo('construction')}><img src={ConstructionLogo} /></li>
          <li onClick={() => navigateTo('sale')}><img src={SaleLogo} /></li>
        </ul>
      </nav>

      {currentPage === 'architecture' && <Architecture />}
      {currentPage === 'survey' && <Survey />}
      {currentPage === 'civil' && <Civil />}
      {currentPage === 'construction' && <Construction />}
      {currentPage === 'sale' && <LandSale />}
    </div>
         
        </div>     
    </Container>
  )
}

const Container = styled.div`
.main-nav{
  padding-top: 2% ;
  justify-content: space-between;
}
.cat-nav{
  padding: 0% 35%;
}
.cat-nav ul{
  display: flex;
  justify-content: space-between;
}
.cat-nav ul li{
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
}
.cat-nav img{
  width: 40px;
  height: 40px;
}
`
export default CategoryIntroduction
