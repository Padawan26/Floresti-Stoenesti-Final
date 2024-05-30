import React from "react"
import * as styles from "../styles/acte.module.css"
const ActeUrabnism = () => {
  return (
    <article className={styles.acte}>
      <h2>Acte necesare emiterii Certificatului de Urbanism</h2>
      <ul>
        <li>
          Cerere-tip pentru emiterea Certificatului de Urbanism completata cu
          elementele de identificare ale solicitantului si imobilului, cu
          precizarea scopului solicitarii actului;
        </li>
        <li>
          Plan de situatie, elaborat pe suport tipografic - vizat de Oficiul
          judetean de cadastru, geodezie si cartografie - la scarile 1:5000 pana
          la 1:500;
        </li>
        <li>
          Titlu imobil sau alt act care sa ateste dreptul de proprietate
          (copie);
        </li>
        <li>
          Extrasul de Carte funciara (pana la introducerea cadastrului general
          in unitatea adeministrativ-teritoriala respectiva) pentru imobilele
          proprietate privata, numai in cazul solicitarii certificatului de
          urbanism pentru instrainari;
        </li>
        <li>
          Documentul de plata a taxei de eliberare a Certificatului de Urbanism
          (copie).
        </li>
      </ul>
      <p>
        &emsp;&emsp; Conform precizarilor privind completarea formularului
        “Cererea pentru emiterea cerificatului de urbanism”, elementul principal
        de identificare al imobilului este adresa postala, completata cu planul
        topografic sau, dupa caz, cu alte elemente de identificare mentionate in
        precizarile la cerere. Certificatul de Urbanism nu tine loc de
        autorizatie de construire/desfiintare si nu confera dreptul de a executa
        lucrari de constructii. Avizele din Certificatul de Urbanism se cer
        pentru a obtine Autorizatia de constructie a casei.
      </p>
      <h2>Acte necesare emiterii Autorizatiei de Construire </h2>
      <p>
        Dosarul se intocmeste conform legilor 50/1991 - Legea privind
        autorizarea lucrarilor in constructii si 453/18.07.2001 (lege care
        completeaza si aduce modificari legii 50/1991) si va cuprinde:
      </p>
      <ul>
        <li>Cererea de eliberare a autorizatiei de construire;</li>
        <li>Anexa la cererea completata;</li>
        <li>
          Chitanta de achitare taxei de eliberare a autorizatie de
          construire/desfiintare;
        </li>
        <li>Planul de amplasare a terenului in zona (planurile cadastrale);</li>
        <li>Certificatul de urbanism;</li>
        <li>Toate avizele solicitate prin certificatul de urbanism;</li>
        <li>Acte notariale (la nevoie);</li>
        <li>
          Memoriu tehnic (cuprinde memoriul de arhitectura, rezistenta,
          instalatii);
        </li>
        <li>Referatele verificatorilor de specialitate;</li>
        <li>Referatele expertilor tehnici (la nevoie);</li>
        <li>Actele de proprietate asupra terenului</li>
        <li>Proiectul pentru autorizare - acesta este compus din:</li>
        <ul>
          <li>Planul de situatie (cum se amplaseaza casa in teren);</li>
          <li>Planul fundatiei elaborat de inginerul de rezistenta;</li>
          <li>Planuri de arhitectura pentru toate nivelele constructiei</li>
          <li>Planul de invelitoare</li>
          <li>Sectiune caracteristica</li>
          <li>Toate fatadele</li>
        </ul>
      </ul>
      <p>
        &emsp;&emsp;Autorizatia de constructie este eliberata de Primarie -
        Serviciul de Urbanism din localitatea / sectorul in care se afla
        terenul. Taxa de eliberare a autorizatiei de constructie reprezinta
        procent (0.5% si 1%) din valoarea constructiei stabilita pe baza
        declaratiei dvs. si in functie de suprafata desfasurata a constructiei
        si de zona de contruire. Valoarea declarata nu va putea fi mai mica
        decat valoarea determinata potrivit prevederilor legale in vigoare
        privind impozitele si taxele locale.
      </p>
    </article>
  )
}

export default ActeUrabnism
