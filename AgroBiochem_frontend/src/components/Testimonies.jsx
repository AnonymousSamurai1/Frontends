import React from "react";
import { Slide } from "react-slideshow-image";
import Person1 from "../assets/person2.png";
import Person2 from "../assets/person4.png";
import Person3 from "../assets/person5.png";
import styled from "styled-components";

const slideImages = [
  {
    image: Person1,
    name: "Angela",
  },
  {
    image: Person2,
    name: "Samuel",
  },
  {
    image: Person3,
    name: "Emmanuel",
  },
];
function Testimonies() {
  return (
    <Container>
      <div className="background">
        <Slide>
          {slideImages.map((each, index) => (
            <div key={index} className="slide">
              <div className="main_slider">
                <div className="image_container">
                  <img src={each.image} alt="testimonial" className="slider" />
                </div>
                <h2>{each.name}</h2>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </Container>
  );
}

const Container = styled.div``;
export default Testimonies;
