import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"
export default function NavInformatii() {
  return (
    <>
      <NavHeader />
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/informatii/acte-necesare"
            >
              Acte Necesare
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/informatii/angajari"
            >
              Angajări
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/informatii/anunturi"
            >
              Anunțuri Publice
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/informatii/buget"
            >
              Buget
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/informatii/fiscalitate"
            >
              Fiscalitate
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/informatii/formulare"
            >
              Formulare
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
