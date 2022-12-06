import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Carousel } from "react-bootstrap"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
const Cetateni = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Cetățeni de onoare</h1>
        <p>
        "Să trăiești alături de astfel de oameni este o chestiune care ține numai de noroc.
         Să le accepți și să le admiri valoarea, ține doar de bună creștere și de bun simț"
         Duminică 18 iulie 2021,a avut loc festivitatea de decernare a celor 5 titluri de 
         "CETAȚEAN DE ONOARE" al comunei FLOREȘTI-STOENEȘTI,acest titlu reprezintă o distincție 
         onorofică cu merite deosebite în activitatea didactică și a fost acordat domnilor:
        </p>
        <ul style={{ paddingLeft: "1rem", listStyle: "inside" }}>
          <li>
            Toma Gheorge
          </li>
          <li>
            Dumitru Gheorghe
          </li>
          <li>
            State Corneliu
          </li>
          <li>
            Năchilă Petre
          </li>
          <li>
            Drăgușionoiu Constantin
          </li>
          </ul>
          <Carousel fade pause={"hover"}>
      <Carousel.Item>
        <StaticImage
          className="d-block width-100"
          src="../../images/Cetateni-1.jpg"
          alt="First slide"
          placeholder="tracedSVG"
          quality={100}
        />
        <Carousel.Caption className="slide-1">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block width-100"
          src="../../images/Cetateni-2.jpg"
          alt="Second slide"
          placeholder="tracedSVG"
          quality={100}
        />
        <Carousel.Caption className="slide-2">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block width-100"
          src="../../images/Cetateni-3.jpg"
          alt="Third slide"
          placeholder="tracedSVG"
          quality={100}
        />
        <Carousel.Caption className="slide-3">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block width-100"
          src="../../images/Cetateni-4.jpg"
          alt="Third slide"
          placeholder="tracedSVG"
          quality={100}
        />
        <Carousel.Caption className="slide-4">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block width-100"
          src="../../images/Cetateni-6.jpg"
          alt="Third slide"
          placeholder="tracedSVG"
          quality={100}
        />
        <Carousel.Caption className="slide-6">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block width-100"
          src="../../images/Cetateni-7.jpg"
          alt="Third slide"
          placeholder="tracedSVG"
          quality={100}
        />
        <Carousel.Caption className="slide-7">
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <p>
          Sâmbătă 8 Decembrie 2008 în sala de Conferinţe a Sanatoriului din
          Floreşti (actualmente desfiinţat), Consiliul Local al comunei Floreşti
          -Stoeneşti a acordat titlul de “Cetăţean de Onoare” al Comunei,
          domnilor:
        </p>
        <ul style={{ paddingLeft: "1rem", listStyle: "inside" }}>
          <li>
            Florentin Dumitru (fotbalist la echipa Steaua Bucureşti şi la Echipa
            Naţională a României)
          </li>
          <li>
            Gheorge Viziru (fost jucător de tenis şi antrenor al echipei române
            de Cupa Davis)
          </li>
        </ul>
        <p>
          ca semn de recunoaştere a talentului sportiv şi a contribuţiei aduse
          la sporirea prestigiului comunei.
        </p>
        {/* <div className="imagini-cetateni">Poze grid</div> */}
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default Cetateni
