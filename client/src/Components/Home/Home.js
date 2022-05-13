import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/bmw7.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/showroom.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>OUR SHOWROOM</h3>
            <p>ALL CAR BRANDS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Car-Repair.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>REPAIR</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
