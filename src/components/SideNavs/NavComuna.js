import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"

export default function NavComuna() {
  return (
    <>
      <NavHeader />

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/despre-comuna/adrese-utile"
            >
              Adrese Utile
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/despre-comuna/context-istoric"
            >
              Context Istoric
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/despre-comuna/eroii-comunei"
            >
              Eroii Comunei
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/despre-comuna/evenimente"
            >
              Evenimente
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/despre-comuna/institutii"
            >
              Instituții
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/despre-comuna/prezentare"
            >
              Prezentare
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
