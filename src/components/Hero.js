import React from "react"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import "animate.css"

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100 h-50"
          src="../images/Slide 1.jpg"
          alt="First slide"
          placeholder="tracedSVG"
        />
        <Carousel.Caption className="slide-1">
          <h4 className="hero-caption">Florești-Stoenești</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100 h-50"
          src="../images/Slide 2.jpg"
          alt="Second slide"
          placeholder="tracedSVG"
        />
        <Carousel.Caption className="slide-2">
          <h4 className="hero-caption">Florești-Stoenești</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100 h-50"
          src="../images/Slide 3.jpg"
          alt="Third slide"
          placeholder="tracedSVG"
        />
        <Carousel.Caption className="slide-3">
          <h4 className="hero-caption">Florești-Stoenești</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
