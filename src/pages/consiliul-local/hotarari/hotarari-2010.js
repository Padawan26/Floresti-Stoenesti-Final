import React from "react"
import NavConsiliu from "../../../components/SideNavs/NavConsiliu"
import { VscFilePdf } from "react-icons/vsc"

export default function hotarari2010() {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Hotărâri 2010</h1>
        <div className="list">
          <a
            href="http://test.local/wp-content/uploads/2022/08/Hotarare-Nr58-06-12-2010.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              HOTĂRÂREA NR.58, privind aprobarea scutirii de la plata
              impozitelor si taxelor locale pe anul 2011 si acordarea
              bonificatiei pentru persoanele care se incadreaza in prevederile
              Legii nr. 571/2003 Codul Fiscal cu modificarile si completarile
              ulterioare.
              <VscFilePdf style={style} />
            </div>
          </a>
        </div>
      </main>
      <div className="sideNav">
        <NavConsiliu />
      </div>
    </div>
  )
}
