import React from "react"
import NavInformatii from "../../components/SideNavs/NavInformatii"
import { VscFilePdf } from "react-icons/vsc"

const Formulare = () => {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Formulare</h1>
        <div
          className="block"
          style={{ marginBottom: "2rem ", paddingBottom: "3rem" }}
        >
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>URBANISM</h2>
          <div className="list">
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-pentru-emiterea-autorizatiei-de-construire-desfiintare.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere pentru emiterea autorizației de construire/desființare
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-pentru-emiterea-certificatului-de-urbanism.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere pentru emiterea certificatului de urbanism
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-pentru-prelungirea-valabilitatii-certificatului-de-urbanism.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere pentru prelungirea valabilității certificatului de
                urbanism
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Autorizatie-de-construire-desfiintare.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Autorizație de construire/desființare
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Certificat-de-urbanism.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Certificat de urbanism
                <VscFilePdf style={style} />
              </div>
            </a>
          </div>
        </div>

        <div
          className="block"
          style={{ margin: "3rem 0", paddingBottom: "3rem" }}
        >
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
            ASISTENŢĂ SOCIALĂ
          </h2>
          <div className="list">
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-alocatie-stat-copii-1-18ani.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere alocație de stat pentru copii cu vârste cuprinse între 1
                și 18 ani
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-alocatie-stat-pentru-tineri-de-peste-18-ani.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere alocație de stat pentru tineri cu vârste de peste 18 ani
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-alocatie-suplimentara.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere alocație suplimentară
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-pentru-acordarea-indemnizatiei-de-crestere-a-copilului.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere pentru acordarea îndemnizatiei de creștere a copilului
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-pentru-ajutor-social.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere pentru ajutor social
                <VscFilePdf style={style} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="block"
          style={{ margin: "3rem 0", paddingBottom: "3rem" }}
        >
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
            REGISTRUL AGRICOL
          </h2>
          <div className="list">
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Deschiderea-pozitiei-de-rol-in-registrul-agricol.pdf"
              target="_blank"
              rel="noreferrer"
              className="pdf-link"
            >
              <div className="pdf">
                Deschiderea poziției de rol în registrul agricol
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/09/Cerere-eliberare-certificat-producator-Anexa-nr.2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Cerere eliberare certificat producător Anexa nr. 2
                <VscFilePdf style={style} />
              </div>
            </a>
          </div>
        </div>
      </main>
      <div className="sideNav">
        <NavInformatii />
      </div>
    </div>
  )
}

export default Formulare
