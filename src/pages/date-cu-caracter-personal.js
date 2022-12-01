import React from "react"
import * as styles from "../styles/plata.module.css"
import { Link } from "gatsby"

const DateCuCaracterPersonal = () => {
  return (
    <main className="pageContainer">
      <div className={styles.plata}>
        <article>
          <h1>
            Notă de informare privind implementarea prevederilor Regulamentului
            (UE) 2016/679
          </h1>
          <p>
            Primăria Comunei Florești-Stoenești, județul Giurgiu, în contextul
            GDPR, este Operator de date cu caracter personal, asigurând
            implementarea prevederilor Regulamentului (UE) 2016/679 privind
            protecţia persoanelor fizice în ceea ce priveşte prelucrarea datelor
            cu caracter personal şi privind libera circulaţie a acestor date şi
            de abrogare a Directivei 95/46/CE (Regulamentul general privind
            protecţia datelor), intrat în vigoare la 25 mai 2018.
          </p>
          <p>
            Primăria prelucrează date cu caracter personal numai în temeiul
            legii, pentru îndeplinirea unei sarcini care servește unui interes
            public.
          </p>
          <p>
            Primăria a desemnat Responsabilul cu protecția datelor cu caracter
            personal, pe care îl puteți contacta la Tel:{" "}
            <a href="tel:+040246256258">0246.256.258</a>,{" "}
            <a href="tel:+040246256005">0246.256.005</a>, E-mail:{" "}
            <a href="mailto:primarie@floresti-stoenesti.ro">
              primarie@floresti-stoenesti.ro
            </a>{" "}
            pentru orice întrebări sau nelămuriri în legătură cu protecția
            datelor dvs. personale.
          </p>
          <p>
            Drepturile persoanei vizate prevăzute de Regulamentul (UE) 679/2016:
          </p>
          <ul>
            <li style={{ listStyleType: "none" }}>
              1. dreptul la informare (art. 13 și art. 14);
            </li>
            <li style={{ listStyleType: "none" }}>
              2. dreptul de acces (art. 15);
            </li>
            <li style={{ listStyleType: "none" }}>
              3. dreptul la rectificare (art. 16);
            </li>
            <li style={{ listStyleType: "none" }}>
              4. dreptul la ștergere („dreptul de a fi uitat” - art. 17);
            </li>
            <li style={{ listStyleType: "none" }}>
              5. dreptul la restricționarea prelucrării (art. 18);
            </li>
            <li style={{ listStyleType: "none" }}>
              6. dreptul la portabilitatea datelor (art. 20);
            </li>
            <li style={{ listStyleType: "none" }}>
              7. dreptul la opoziție (art. 21);
            </li>
            <li style={{ listStyleType: "none" }}>
              8. dreptul de a nu face obiectul unei decizii bazate exclusiv pe
              prelucrarea automată (art. 22);
            </li>
            <li style={{ listStyleType: "none" }}>
              9. dreptul de a fi informată cu privire la încălcarea securității
              datelor cu caracter personal (art. 34);
            </li>
            <li style={{ listStyleType: "none" }}>
              10. dreptul de a depune o plângere la o autoritate de supraveghere
              (art. 77);
            </li>
            <li style={{ listStyleType: "none" }}>
              11. dreptul la o cale de atac judiciară eficientă împotriva unei
              autorități de supraveghere sau a unui operator ori a unei persoane
              împuternicite de operator (art. 78 și art. 79).
            </li>
          </ul>
          <p>
            Pentru detalii privind protecția datelor cu caracter personal în
            cadrul Primăriei Comunei Florești-Stoenești, județul Giurgiu,
            accesați{" "}
            <Link to="/politica-de-confidentialitate">
              Politica noastră de confidențialitate
            </Link>
            .
          </p>
        </article>
      </div>
    </main>
  )
}

export default DateCuCaracterPersonal
