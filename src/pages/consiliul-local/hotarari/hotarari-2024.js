import React from "react"
import NavConsiliu from "../../../components/SideNavs/NavConsiliu"
import { VscFilePdf } from "react-icons/vsc"

export default function hotarari2024() {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Hotărâri 2024</h1>
        <div className="list">
        <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/03/HCL01-05.01.2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
            HOTĂRÂREA NR.01, privind aprobarea organizării rețelei școlare la nivelul comunei Florești-Stoenești pentru anul școlar 2024-2025.
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/03/HCL02-05.01.2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
            HOTĂRÂREA NR.02, privind acoperirea definitivă din excedentul bugetului local a deficitului secțiunii de dezvoltare.
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/03/PVS-05.01.2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
            Proces Verbal, încheiat astăzi 05.01.2024, în ședința extraordinară cu convocare de îndată a Consiliului Local Florești-Stoenești, județul Giurgiu.
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/03/HCL03-15.01.2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
            HOTĂRÂREA NR.03, privind participarea Comunei FLOREȘTI-STOENEȘTI la "Programul-cheie 1: Surse regenerabile de energie și stocare energie - Sprijinirea investițiilor în noi capacități de producere a energiei electrice produsă din surse regenerabile pentru autoconsum pentru entități publice".
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/03/PVS-15.01.2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
            Proces Verbal, încheiat astăzi 15.01.2024, în ședința extraordinară  a Consiliului Local Florești-Stoenești, județul Giurgiu.
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