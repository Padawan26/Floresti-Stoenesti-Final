import React from "react"
import ActeUrabnism from "../../../components/ActeUrabnism"
import NavServicii from "../../../components/SideNavs/NavServicii"

const Urbanism = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Urbanism</h1>
        <h2>Plan Urbanistic General Florești-Stoenești</h2>
        <div style={{marginLeft:`2rem`}}>
        <ul>
          <li>
          <a href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/PL-4-U.T.R._6v.pdf">Plan Urbanistic General Florești-Stoenești (Unități Teritoriale de
             Referință) Planșa 04.</a>
          </li>
          <li>
          <a href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/RLU.pdf">Plan Urbanistic General Florești-Stoenești - Regulament local de urbanism.</a> + <a href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/ANEXA-RLU.pdf">Anexa RLU.</a>
          </li>
        </ul>
        </div>
        <ActeUrabnism />
      </main>
      <div className="sideNav">
        <NavServicii />
      </div>
    </div>
  )
}

export default Urbanism
