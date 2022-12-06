import React from "react"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
import { StaticImage } from "gatsby-plugin-image"
const Organigrama = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1 style={{ marginBottom: "0" }}>Organigrama Actuală</h1>
        <StaticImage
          src="../../images/Organigrama-actuala.png"
          alt="Organigrama"
          placeholder="tracedSVG"
        />
        <h1 style={{ paddingTop: "2rem", marginBottom: "0" }}>
          Organigrama - 2019
        </h1>
        <StaticImage
          src="../../images/Organigrama-2019.png"
          alt="Organigrama an 2019"
          placeholder="tracedSVG"
        />
        <h1 style={{ paddingTop: "2rem", marginBottom: "0" }}>
          Organigrama - 2017
        </h1>
        <StaticImage
          src="../../images/Organigrama-2017.jpg"
          alt="Organigrama an 2017"
          placeholder="tracedSVG"
        />
        <h1 style={{ paddingTop: "2rem", marginBottom: "0" }}>
          Organigrama - 2010
        </h1>
        <StaticImage
          src="../../images/Organigrama-2010.jpg"
          alt="Organigrama an 2010"
          placeholder="tracedSVG"
        />
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default Organigrama
