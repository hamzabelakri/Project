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
          <h1>Who are DasAuto?</h1>
<p>Here at Autoweb Design, we are specialists in Automotive website design and digital solutions. We work with everyone from independent car dealerships right through to vehicle manufacturers. Our Automotive Website Design and Digital Marketing solutions are designed to convert and as we are a data driven agency, we are constantly improving our platform to ensure car dealers have the very latest in Automotive technology.

We pride ourselves in providing excellent customer service to our customers and aim to build a relationship with each and every one of our customers. We have also developed our own automotive e-commerce solution which will be available to all of our customers as standard. If you are paying a third party for an e-commerce solution on your Automotive website, speak to Autoweb Design and see how you can bring it all under one roof.</p>
<p>"We know from feedback given by customers, that the website is easy to navigate and easy to get the information you require when looking to buy a car".</p>
        
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
