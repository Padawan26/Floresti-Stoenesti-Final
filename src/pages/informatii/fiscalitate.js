import React from "react"
import NavInformatii from "../../components/SideNavs/NavInformatii"
import { VscFilePdf } from "react-icons/vsc"

const Fiscalitate = () => {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Fiscalitate</h1>
        <div className="block" style={{ padding: "2rem 1rem" }}>
          <div className="list">
            <a
              href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Hotarare-Nr08-30-03-2010.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                HOTĂRÂRE Nr.8, privind aprobarea taxelor şi impozitelor locale
                începând cu data de 01.04.2010.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Anexa1-la-Hotarare-Nr08-30-03-2010.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Anexa1 la HOTĂRÂRE Nr.08 30-03-2010
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Anexa2-la-Hotarare-Nr08-30-03-2010.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Anexa2 la HOTĂRÂRE Nr.08 30-03-2010
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/referat-taxe-si-impozite-2010.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                REFERAT privind stabilirea impozitelor si taxelor locale pentru
                anul 2010 în comuna Floreşti-Stoeneşti, judeţul Giurgiu.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Hotarare-Nr29-25-06-2010.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                HOTĂRÂRE NR.19, privind stabilirea taxei pentru fiecare
                gospodărie şi societăţi comerciale pentru serviciul de pază a
                bunurilor din com. Floreşti-Stoeneşti, jud. Giurgiu.
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

export default Fiscalitate
