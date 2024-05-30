import React from "react"
import * as styles from '../../../styles/informatii.aep.module.css'
import NavAlegeri from "../../../components/SideNavs/NavAlegeri"

const InformatieAEP = () => {
  const imageUrl = "https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/big_afis_aep_2024.jpg"; // Înlocuiește cu URL-ul tău real al imaginii
  const legislatieUrl = "https://locale2024.bec.ro/legislatie/"; // Înlocuiește cu URL-ul tău real

  return (
    <div className="pageContainer">
    <main className={styles.container}>
      <h1>Informații AEP</h1>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="Descrierea imaginii" className={styles.image} />
      </div>
      <div className={styles.buttonWrapper}>
      <a href={legislatieUrl} className={styles.legislationButton} target="_blank" rel="noopener noreferrer">Legislație</a>
      </div>
    </main>
    <div className="sideNav">
        <NavAlegeri />
      </div>
    </div>
  )
}

export default InformatieAEP