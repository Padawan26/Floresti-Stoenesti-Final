import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/footer.module.css"
import { BsHouseFill, BsTelephoneFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { HiArrowNarrowRight } from "react-icons/hi"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <p className={styles.contactInfo}>
          <BsHouseFill />
          : Primăria Comunei Florești-Stoenești <br />
          Sat Stoenești, Str. 1 Decembrie 1918, Nr. 123, Cod poștal 087075
          <br />
          <BsTelephoneFill />
          : 0246.256.258 si 0246.256.005
          <br />
          <GrMail />: primarie@floresti-stoenesti.ro
        </p>
      </div>
      <div className={styles.harta}>
        <h3>Hartă Site</h3>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.link} to="/primarie">
                <HiArrowNarrowRight />
                Primărie
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/primar">
                <HiArrowNarrowRight />
                Primar
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/despre-comuna">
                <HiArrowNarrowRight />
                Despre Comună
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/consiliul-local">
                <HiArrowNarrowRight />
                Consiliul Local
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/informatii">
                <HiArrowNarrowRight />
                Informații
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/mol">
                <HiArrowNarrowRight />
                Monitorul Oficial Local
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/contact">
                <HiArrowNarrowRight />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.info}>
        <h3>Informații</h3>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.link} to="/termeni-si-conditii">
                <HiArrowNarrowRight />
                Termeni si Condiții
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/politica-de-confidentialitate">
                <HiArrowNarrowRight />
                Politica de Confidențialitate
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/date-cu-caracter-personal">
                <HiArrowNarrowRight />
                Date cu Caracter Personal
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/harta-site">
                <HiArrowNarrowRight />
                Hartă Site
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
