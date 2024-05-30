import React from "react"
import * as styles from '../../../styles/informatii.module.css'
import NavAlegeri from "../../../components/SideNavs/NavAlegeri"

const Informatii = () => {
  return (
    <div className="pageContainer">
    <main className={styles.container}>
      <h1 className={styles.header}>Biroul Electoral de Circumscripție Comunală nr. 17 Florești-Stoenești</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Informații:</h2>
        <p className={styles.sectionContent}>Sediu: Str. 1 Decembrie 1918, nr. 123, Sat Stoenești (Com. Florești-Stoenești)</p>
        <p className={styles.sectionContent}>Date de contact: telefon/fax 0246265005</p>
        <p className={styles.sectionContent}>Adresă de e-mail: <a href="mailto:glrflorestisto​enesti@bec.ro" className={styles.link}>glrflorestisto​enesti@bec.ro</a></p>
        <p className={styles.sectionContent}>Program de lucru: zilnic între orele 09.00-17.00</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Componența:</h2>
        <p className={styles.sectionContent}>Președinte: Ionuț-Cosmin Necula, telefon 0749.237.325</p>
        <p className={styles.sectionContent}>Locțiitor: Gheorghe Roxana, telefon 0747.529.623</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Membri:</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>PARTIDUL SOCIAL DEMOCRAT - doamna CRIȘCOTĂ MIHAELA</li>
          <li className={styles.listItem}>PARTIDUL NAȚIONAL LIBERAL - domnul TRIFAN IONUȚ</li>
          <li className={styles.listItem}>UNIUNEA SALVAȚI ROMÂNIA - domnul MIHAI FLORIN-CĂTĂLIN</li>
          <li className={styles.listItem}>ALIANȚA PENTRU UNIREA ROMÂNILOR - doamna STATE ELENA</li>
          <li className={styles.listItem}>UNIUNEA DEMOCRATĂ MAGHIARĂ DIN ROMÂNIA - domnul BUNICA EUGEN-MARIUS</li>
          <li className={styles.listItem}>GRUPUL PARLAMENTAR AL MINORITĂȚILOR NAȚIONALE - doamna GHEORGHE MIHAELA-DANIELA</li>
          <li className={styles.listItem}>PARTIDUL MIȘCAREA POPULARĂ - domnul CÎRSTEA MARIN</li>
        </ul>
      </section>

      {/* Restul conținutului paginii aici */}
    </main>
    <div className="sideNav">
        <NavAlegeri />
      </div>
    </div>
  )
}

export default Informatii
