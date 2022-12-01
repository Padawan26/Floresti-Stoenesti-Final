import React from "react"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
import * as styles from "../../styles/conducere.module.css"
import { CgProfile } from "react-icons/cg"

const Registru = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Registru Agricol</h1>
        <h2>Atribuțiile Registrului Agricol</h2>
        <ul className={styles.list}>
          <li>
            redactarea răspunsurilor la cererile adresate Compartimentului
            Agricol;
          </li>
          <li>
            transcrierea şi completarea pe anul în curs în noile registre
            agricole a poziţiilor din vechile registre reprezentând gospodăriile
            populaţiei deţinătoare de terenuri agricole şi animale;
          </li>
          <li>
            deschiderea de noi poziţii în registrul agricol la solicitarea
            proprietarilor de terenuri sau deţinători de animale;
          </li>
          <li>
            operarea modificărilor în Registrul Agricol ca urmare a
            vânzărilor-cumpărărilor, moştenirii, donaţii, schimbări ale
            categoriilor de folosinţă a terenurilor;
          </li>
          <li>
            ţine evidenţa gospodăriilor populaţiei deţinătoare de terenuri
            agricole şi animale;
          </li>
          <li>
            înscrierea titlurilor de proprietate ca urmare a reconstituirii
            dreptului de proprietate în conformitate cu Legea Fondului Funciar
            şi legea 10/2001;
          </li>
          <li>
            eliberează adeverinţe de proprietate cu situaţia existentă în
            registrul agricol;
          </li>
          <li>
            întocmeşte şi eliberează certificate de producător (pentru vânzări
            de produse agricole), potrivit evidenţelor pe care le deţin după o
            prealabilă verificare în teren;
          </li>
          <li>
            întocmeşte procesele verbale şi vizează trimestrial certificatele de
            producător;
          </li>
          <li>
            verifică în teren reclamaţiile şi sesizările privind registrul
            agricol;
          </li>
          <li>
            conduce evidenţa asociaţiilor agricole cu personalitate juridică,
            verificări în teren a veridicităţii datelor declarate în registru
            agricol;
          </li>
          <li>centralizează toate datele înscrise în registrul agricol;</li>
          <li>
            întocmirea proceselor-verbale de predare-primire pentru arhivarea
            documentelor din cadrul compartimentului;
          </li>
          <li>
            relaţii cu publicul zilnic privind Registrul Agricol; actualizează
            zilnic baza de date privind evidenţele de Registru Agricol;
          </li>
          <li>
            îndeplinirea oricăror altor sarcini, care nu sunt cuprinse în fişa
            postului, în funcţie de solicitările conducerii primăriei sau ale
            şefului său direct, participând şi la rezolvarea unor cereri venite
            de la alte compartimente din cadrul instituţiei privind sesizări,
            verificări, reclamaţii, proiecte;
          </li>
        </ul>
        <h2 style={{ marginBottom: "1rem", textAlign: "left" }}>
          Componența Registrului Agricol
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <CgProfile />
            <div>
              <p style={{ fontSize: "1.3rem" }}>Ivaşcu Constantina</p>
              <p>Referent superior</p>
              <p>agricol@floresti-stoenesti.ro</p>
            </div>
          </div>
          <div className={styles.card}>
            <CgProfile />
            <div>
              <p style={{ fontSize: "1.3rem" }}>Mirica Mihaela</p>
              <p>Referent superior</p>
              <p>agricol@floresti-stoenesti.ro</p>
            </div>
          </div>
        </div>
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default Registru
