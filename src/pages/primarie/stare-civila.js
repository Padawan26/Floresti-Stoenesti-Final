import React from "react"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
import { VscFilePdf } from "react-icons/vsc"
const StareCivila = () => {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Stare Civilă</h1>
        <div className="list">
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Declaratie-de-casatorie-nr.89.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              PUBLICATIE, privind inregistrarea declaratiei de casatorie a
              domnului Cherciu Sandu-Valentin si a doamnei Lazar
              Petruta-Valentina.
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Declaratie-de-casatorie-nr.91.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              PUBLICATIE, privind inregistrarea declaratiei de casatorie a
              domnului Raducu Stelian si a doamnei Anghel Daniela.
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2014/04/Declaratie-de-casatorie-nr.99.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              PUBLICATIE, privind inregistrarea declaratiei de casatorie a
              domnului Rentea Florin si a doamnei Barbu Elena.
              <VscFilePdf style={style} />
            </div>
          </a>
        </div>
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default StareCivila
