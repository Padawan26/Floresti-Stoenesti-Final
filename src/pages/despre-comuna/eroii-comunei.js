import React from "react"
import NavComuna from "../../components/SideNavs/NavComuna"
import { StaticImage } from "gatsby-plugin-image"
const EroiiComunei = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Eroii Comunei</h1>
        <p>
          &emsp;&emsp;In timpul celor două războaie mondiale comuna
          Floreşti-Stoeneşti şi-a dat patriei tributul său de eroi. In cinstea
          acestora au fost ridicate monumente comemorative, câte unul în fiecare
          sat al comunei.
        </p>
        <div className="monumente">
          <div className="monument">
            <h2>MONUMENTUL EROILOR FLOREŞTI</h2>
            <StaticImage
              src="../../images/monument1.jpg"
              alt="monument istoric"
              placeholder="tracedSVG"
            />
          </div>
          <div className="monument">
            <h2>MONUMENTUL EROILOR STOENEŞTI</h2>
            <StaticImage
              src="../../images/monument2.jpg"
              alt="monument istoric"
              placeholder="tracedSVG"
            />
          </div>
          <div className="monument">
            <h2>MONUMENTUL EROILOR PALANCA</h2>
            <StaticImage
              src="../../images/monument3.jpg"
              alt="monument istoric"
              placeholder="tracedSVG"
            />
          </div>
        </div>
      </main>
      <div className="sideNav">
        <NavComuna />
      </div>
    </div>
  )
}

export default EroiiComunei
