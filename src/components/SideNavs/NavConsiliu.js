import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"
export default function NavConsiliu() {
  return (
    <>
      <NavHeader />
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/consiliul-local/atributii"
            >
              Atribuții
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/consiliul-local/componenta"
            >
              Componența
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/consiliul-local/declaratii-de-avere"
            >
              Declarații de Avere
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/consiliul-local/declaratii-de-interese"
            >
              Declarații de Interese
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/consiliul-local/hotarari/"
            >
              Hotărâri
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
