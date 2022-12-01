import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"
export default function NavServicii() {
  return (
    <>
      <NavHeader />
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/servicii-publice/asistenta-sociala"
            >
              Asistență Socială
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/servicii-publice/urbanism"
            >
              Urbanism
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/servicii-publice/taxe-impozite"
            >
              Taxe si Impozite
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/servicii-publice/svsu"
            >
              S.V.S.U
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
