import React from "react"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
import * as styles from "../../styles/conducere.module.css"
import { CgProfile } from "react-icons/cg"
const Conducere = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Conducerea Primăriei Florești-Stoenești</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <CgProfile />
            <div>
              <h2>Primar</h2>
              <p style={{ fontSize: "1.3rem" }}>Dumitru Constantin</p>
              <p>
                primar@floresti-stoenesti.ro <br />
                primar.dumitru@floresti-stoenesti.ro
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <CgProfile />
            <div>
              <h2>Viceprimar</h2>
              <p style={{ fontSize: "1.3rem" }}>Lazăr Constantin</p>
              <p>
                viceprimar@floresti-stoenesti.ro <br />
                viceprimar.lazar@floresti-stoenesti.ro
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <CgProfile />
            <div>
              <h2>Secretar General (delegat)</h2>
              <p style={{ fontSize: "1.3rem" }}> Matache Alexandru</p>
              <p>secretar@floresti-stoenesti.ro </p>
            </div>
          </div>
        </div>
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default Conducere
