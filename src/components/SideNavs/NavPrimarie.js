import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"
export default function NavPrimarie() {
  return (
    <>
      <NavHeader />
      <nav className={styles.nav}>
        <ul className={styles.nav}>
        <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/conducere"
            >
              Conducere
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/structura"
            >
              Structura
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/organigrama"
            >
              Organigrama
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/registru"
            >
              Registrul Agricol
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/stare-civila"
            >
              Starea Civilă
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/cetateni"
            >
              Cetățeni de onoare
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primarie/proiecte"
            >
              Proiecte
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
