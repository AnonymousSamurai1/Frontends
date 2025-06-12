import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";
import Typed from "react-typed";
import { Fade } from "react-reveal";
import Cancel from "../assets/cancel.png";
import Navbar from "./Navigation";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";

const slideImages = [
  {
    image: Person1,
    description:
      '"AGROBIOCHEM transformed our crop yield in one season. Reliable and science-driven!"',
    name: "Esther M., Agripreneur",
  },
  {
    image: Person2,
    description:
      '"Their biocontrol solutions saved my farm from devastating disease. Highly recommend!"',
    name: "Kwame A., Plantain Farmer",
  },
  {
    image: Person3,
    description:
      '"Professional, innovative, and effective — AGROBIOCHEM is a game-changer for agriculture."',
    name: "Daniel T., Extension Officer",
  },
];

function Introduction() {
  const [click, setClick] = useState(false);

  const HandleClick = () => {
    return setClick(true);
  };

  const HandleUnclick = () => {
    return setClick(false);
  };

  return (
    <Container>
      <div className="beginner">
        <div className="title">
          <Fade duration={1000} distance="40px">
            <h1>
              <span className="span">AGROBIOCHEM</span>
              <br />
              THE MOST{" "}
              <Typed
                strings={["RELIABLE", "EFFECTIVE"]}
                typeSpeed={80}
                backSpeed={80}
                loop
                className="typed"
              />
              <br />
              AGROCHEMICAL COMPANY
              <br /> IN GHANA
            </h1>
          </Fade>
          <p>
            In id enim odio. Nunc aliquet diam tortor, at venenatis urna
            sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac
            euismod nibh elementum. Praesent eu urna at sem sodales venenatis.
            Mauris efficitur dapibus enim in posuere
          </p>

          <div className="button-container">
            <button onClick={HandleClick}> GET STARTED</button>
            {click && (
              <div className="menu">
                <img
                  src={Cancel}
                  alt="Cancel"
                  className="cancel"
                  onClick={HandleUnclick}
                />
                <Navbar />
                <Link to="/authen">
                  <h3 className="h3">For Admins Only</h3>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="details">
          <div className="details-sub">
            <Slide
              arrows={false}
              indicators={true}
              duration={3000}
              transitionDuration={500}
            >
              {slideImages.map((each, index) => (
                <div key={index} className="slide">
                  <img src={each.image} alt="testimonial" className="slider" />
                  <h2>{each.description}</h2>
                  <p>{each.name}</p>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .beginner {
    display: flex;
    padding: 3% 5%;
  }
  .title {
    width: 80%;
  }

  .title h1 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 49px;
    line-height: 76px;
    color: rgba(230, 227, 227, 0.989);
  }
  .span {
    color: rgb(102, 179, 2);
    font-weight: bold;
    font-size: 75px;
  }
  .typed {
    font-size: 49px;
    background: linear-gradient(
      97.24deg,
      rgb(255, 255, 255) 44.37%,
      rgba(243, 193, 95, 0) 113.02%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .title p {
    color: white;
    padding-top: 2%;
    padding-right: 30%;
    text-align: justify;
    font-family: "Kanit";
    font-size: 15px;
  }
  .button-container {
    padding-top: 5%;
  }
  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 251, 251, 0.45);
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    :hover {
      background: transparent;
      cursor: pointer;
      color: rgba(230, 227, 227, 0.989);
      border: 3px solid rgba(230, 227, 227, 0.989);
      transition: 1s;
      transform: scale(1.1);
    }
  }
  .menu {
    background: rgba(255, 255, 255, 0.18);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 5;
    backdrop-filter: blur(10px);
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .cancel {
    float: right;
    padding: 2% 1%;
    width: 30px;
    :hover {
      cursor: pointer;
    }
  }
  .h3 {
    float: right;
    padding: 1%;
    color: white;
    :hover {
      cursor: pointer;
      color: rgba(79, 204, 44, 0.91);
    }
  }
  .details {
    width: 40%;
    padding: 3% 0%;
  }
  .details-sub {
    width: 43%;
    height: 80%;
    border-radius: 20px;
    background: rgba(99, 145, 38, 0.67);
    padding: 6% 20%;
  }
  .slide {
    width: 100%;
    img {
      width: 270px;
      height: 200px;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
    }
    h2 {
      text-align: space-around;
      padding: 3% 0%;
      color: white;
      width: 240px;
      font-size: 18px;
      font-style: italic;
    }
    p {
      color: white;
      text-align: center;
    }
  }

  @media (max-width: 760px) {
  }
`;
export default Introduction;
