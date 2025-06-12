import React from 'react'
import styled from 'styled-components'

function Categories(props) {
  return (
    <Container>
      <div className="cat">
        <img src={props.img} alt="" />
        <h5>{props.title}</h5>
      </div>
    </Container>
  )
}

const Container = styled.div`
.cat{
display: flex;
padding: 4% 15%;
:hover{
    cursor: pointer;
    transform: scale(1.1);
}
    img{
        width: 50px;
        height: 50px;
    }
    h5{
        font-size: 20px;
        padding: 7% 3%;
        font-weight: bolder;
        color: gray;
    }
}
`
export default Categories
