import React from "react"
import NavPrimar from "../../components/SideNavs/NavPrimar"
import { VscFilePdf } from "react-icons/vsc"

const Dispozitii = () => {
  const style = { color: "red", fontSize: "2.5rem" }

  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Dispozițiile Primarului</h1>
        <div className="list">
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2020/03/Dispozitia-primarului-nr-0100-2020.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Dispoziția primarului nr.100/2020
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/03/Dispozitia-primarului-nr-0095-2022.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Dispozitia primarului nr.0095/2022
              <VscFilePdf style={style} />
            </div>
          </a>
        </div>
      </main>
      <div className="sideNav">
        <NavPrimar />
      </div>
    </div>
  )
}

export default Dispozitii
