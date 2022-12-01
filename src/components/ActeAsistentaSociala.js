import React from "react"
import * as styles from "../styles/acte.module.css"
import { Table } from "react-bootstrap"

const ActeAsistentaSociala = () => {
  return (
    <article className={styles.acte}>
      <h1>Asistență Socială</h1>
      <h2>Acte necesare depunerii dosarului pentru Alocaţia de Stat</h2>
      <ul>
        <li>Copie certificat nastere copil</li>
        <li>Copii de buletin ale parintilor</li>
        <li>1 dosar</li>
      </ul>
      <h2>Acte necesare depunerii dosarului pentru Alocaţia de Susţinere</h2>
      <ul>
        <li>Buletine de identitate (copie);</li>
        <li>
          Certificate de naştere pentru copiii mai mici de 14 ani (copie);
        </li>
        <li>Certificat de căsătorie (copie);</li>
        <li>Livret de familie (copie);</li>
        <li>
          Hotărâre judecătorească de divorţ sau de încredunţare a minorilor
          (dacă este cazul - copie);
        </li>
        <li>Adeverinţă de salariat (pentru cei care lucrează angajaţi);</li>
        <li>
          Adeverinţă privind veniturile impozabile de la Trezoreria
          Bolintin-Vale;
        </li>
        <li>Adeverinţă de elev pentru copiii de vârstă şcolară;</li>
        <li>Talon de pensie (pentru pensionari);</li>
        <li>Talon de alocaţie de stat;</li>
        <li>
          Orice act doveditor al veniturilor (indemnizaţie de şomaj,
          indemnizaţie de maternitate, pensie de handicap, etc.);
        </li>
        <li>Două dosare.</li>
      </ul>
      <h2>Cine poate să primească şi în ce condiţii:</h2>
      <ul>
        <li>
          se acordă familiilor sau pesoanelor singure cu media veniturilor mai
          mică de 370 lei, care au copii mai mici de 18 ani;
        </li>
        <li>
          copiii de vârstă şcolară trebuie să frecventeze cu regularitate
          şcoala;
        </li>
        <li>
          nu vor beneficia de alocaţie de susţinere familiile care au unul din
          următoarele bunuri: mai mult de o casă, camera video, amplificator
          audio, copiator, obiecte de mare valoare (tablouri şi obiecte de artă,
          bijuterii şi monede din metale preţioase, etc.), autoturisme cu
          vechime mai mică de 10 ani, autoutilitară, autocamion, autobuz,
          microbuz, tractor, combină, moară de cereale, gater, depozite bancare
          mai mari de 3000 lei, teren intravilan mai mare de 2000 mp, teren
          extravilan mai mare de 2 ha, mai mult de 3 vaci, mai mult de 5 porci,
          mai mult de 20 oi, mai mult de 2 cai, mai mult de 50 iepuri de casă,
          mai mult de 100 păsări, mai mult de 15 familii de albine.
        </li>
      </ul>
      <h2>Sume acordate:</h2>
      <h3
        style={{
          textDecoration: "underline",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Familiile cu doi părinţi (şi cei aflaţi in concubinaj), cu o medie a
        veniturilor de până la 200 lei
      </h3>
      <ul>
        <li>30 lei pt. un copil,</li>
        <li>60 lei pt. 2 copii,</li>
        <li>90 lei pt. 3 copii, 120 lei pt. 4 copii şi mai mulţi.</li>
      </ul>
      <h3
        style={{
          textDecoration: "underline",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Familiile cu doi părinţi (şi cei aflaţi in concubinaj), cu o medie a
        veniturilor intre 201-370 lei
      </h3>
      <ul>
        <li>25 lei pt. un copil,</li>
        <li>50 lei pt. 2 copii,</li>
        <li>75 lei pt. 3 copii, 100 lei pt. 4 copii şi mai mulţi.</li>
      </ul>
      <h3
        style={{
          textDecoration: "underline",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Familiile cu un părinte, cu o medie a veniturilor de până la 200 le
      </h3>
      <ul>
        <li>50 lei pt. un copil,</li>
        <li>100 lei pt. 2 copii,</li>
        <li>150 lei pt. 3 copii, 200 lei pt. 4 copii şi mai mulţi.</li>
      </ul>
      <h3
        style={{
          textDecoration: "underline",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Familiile cu un părinte, cu o medie a veniturilor intre 201-370 lei
      </h3>
      <ul>
        <li>45 lei pt. un copil,</li>
        <li>90 lei pt. 2 copii,</li>
        <li>135 lei pt. 3 copii, 180 lei pt. 4 copii şi mai mulţi.</li>
      </ul>
      <h2>Acte necesare pentru Ajutor Social (Legea 416/2001)</h2>
      <ul>
        <li>
          Adeverinţă lunară conform căreia persoanele apte de muncă sunt luate
          în evidenţa Oficiului Forţelor de Muncă (Şomaj) Bolintin-Vale
        </li>
        <li>
          Adeverinţă privind veniturile impozabile de la Trezoreria
          Bolintin-Vale;
        </li>
      </ul>
      <h2>Cine poate să primească şi în ce condiţii:</h2>
      <ul>
        <li>Ajutorul social se acordă pe familie.</li>
        <li>
          În contul ajutorului social se efectuează ore de prestaţie de către
          persoanele adulte. Din această categorie fac parte persoanele cu
          vârsta cuprinsă între 18 ani şi vârsta de pensionare (60 ani femeile
          şi 65 de ani bărbaţii) au obligaţia sa fie luate în evidenţă la
          Oficiul Forţelor de Muncă (Şomaj) Bolintin-Vale şi să facă dovada
          acestui fapt lunar prin adeverinţă.
        </li>
      </ul>
      <h2>
        Sunt scutite de la orele de prestaţie următoarele categorii de persoane:
      </h2>
      <ul>
        <li>Copiii</li>
        <li>Femeile care au în îngrijire copii cu vârstă mai mică de 7 ani;</li>
        <li>
          Persoanele bolnave care fac dovada acestui fapt prin certificat
          medical de constatare a incapacităţii de muncă emis de către medicul
          expert al asigurărilor sociale (medic Bănică Mădălina -
          Bolintin-Vale);
        </li>
        <li>Pensionarii sau persoanele aflate peste vârsta de pensionare.</li>
      </ul>
      <h2>Sume acordate:</h2>
      <Table striped bordered>
        <tbody>
          <tr>
            <th>Tipul familiei </th>
            <th>Nivel venit minim garantat (lei) </th>
          </tr>
          <tr>
            <td> Persoană singură</td>
            <td> 125</td>
          </tr>
          <tr>
            <td> Familii două persoane</td>
            <td> 225</td>
          </tr>
          <tr>
            <td> Familii trei persoane</td>
            <td> 313</td>
          </tr>
          <tr>
            <td> Familii patru persoane</td>
            <td> 390</td>
          </tr>
          <tr>
            <td>Familii cinci persoane </td>
            <td> 462</td>
          </tr>
          <tr>
            <td> Pentru fiecare persoană peste cinci</td>
            <td> 31</td>
          </tr>
        </tbody>
      </Table>
    </article>
  )
}

export default ActeAsistentaSociala
