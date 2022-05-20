import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css"
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
      <div class="col d-flex flex-wrap justify-content-center text-uppercase align-items-center">
            <h1 class="font-weight-bold mx-1">why choose</h1>
            <h1 className="section-title-special mx-1">DasAuto</h1>
          </div>
<p>Here at Autoweb Design, we are specialists in Automotive website design and digital solutions. We work with everyone from independent car dealerships right through to vehicle manufacturers. Our Automotive Website Design and Digital Marketing solutions are designed to convert and as we are a data driven agency, we are constantly improving our platform to ensure car dealers have the very latest in Automotive technology.

We pride ourselves in providing excellent customer service to our customers and aim to build a relationship with each and every one of our customers. We have also developed our own automotive e-commerce solution which will be available to all of our customers as standard. If you are paying a third party for an e-commerce solution on your Automotive website, speak to Autoweb Design and see how you can bring it all under one roof.</p>
<p>"We know from feedback given by customers, that the website is easy to navigate and easy to get the information you require when looking to buy a car".</p>
 

 <div className="container">
<div className="one" class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon rounded-circle p-2">
              <i class="fas fa-car fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">all brands</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum.</p>
          </div>
          
          <div className="one" class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon rounded-circle p-2">
              <i class="fas fa-comment fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">free support</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum.</p>
          </div>
          
          <div className="one" class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon rounded-circle p-2">
              <i class="fas fa-people-carry fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">caring</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum.</p>
          </div>
          
          <div className="one" class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon rounded-circle p-2">
              <i class="fas fa-wallet fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">affordable</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum.</p>
          </div>
       </div> 
 
 
 
 
    </div>
  );
}

export default Home;
