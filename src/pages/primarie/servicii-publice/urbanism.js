import React from "react"
import ActeUrabnism from "../../../components/ActeUrabnism"
import NavServicii from "../../../components/SideNavs/NavServicii"

const Urbanism = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Urbanism(wordpress)</h1>
        <h2>Plan Urbanistic General Florești-Stoenești</h2>
        <ul>
          <li>
            Plan Urbanistic General Florești-Stoenești (Unități Teritoriale de
            Referință) Planșa 04.
          </li>
          <li>
            Plan Urbanistic General Florești-Stoenești - Regulament local de
            urbanism.
          </li>
        </ul>
        <ActeUrabnism />
      </main>
      <div className="sideNav">
        <NavServicii />
      </div>
    </div>
  )
}

export default Urbanism
