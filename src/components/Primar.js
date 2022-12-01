import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/primar.module.css"
import { ImCircleRight } from "react-icons/im"
import { Link } from "gatsby"

const Primar = () => {
  return (
    <section className="homeBlock">
      <h1 className={styles.name}>Primar</h1>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <StaticImage
              className={styles.poza}
              src="../images/primar.png"
              placeholder="dominantColor"
              alt="poza primar"
              height={155}
              width={169}
              quality="100"
            />
          </div>
          <div className={styles.cardTitle}>
            <h3>Mesajul Primarului Dumitru Constantin</h3>
          </div>
        </div>
        <div className={styles.cardBody}>
          <p>
            Mă consider a fi un om norocos pentru că m-am născut și trăiesc in
            România și mă consider a fi cel mai norocos pentru că m-am născut și
            trăiesc în Florești-Stoenești-Palanca.
          </p>
        </div>
        <div className={styles.cardLink}>
          <Link to="/primar/mesajul-primarului">
            <ImCircleRight /> Vezi mai mult
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Primar
