import React from "react"
import NavComuna from "../../components/SideNavs/NavComuna"
import * as styles from "../../styles/acte.module.css"
const ContextIstoric = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <article className={styles.acte}>
          <h1>Contextul Istoric</h1>
          <p>
            &emsp;&emsp;Conform datelor furnizate de Comisia Naţională a
            Monumentelor şi Siturilor istorice, pe teritoriul comunei
            Floreşti-Stoeneşti există vestigii arheologice care demonstrază
            vechimea şi continuitatea locuirii acestor zone. Astfel, au fost
            descoperite aşezări din epoca neolitică pe teritoriul actual al
            satului: Stoeneşti, în zona Tangăru.
          </p>
          <h2>Monumente arhitecturale şi istorice:</h2>
          <ul>
            <li>
              satul Floreşti - Biserica Sfântu Nicolae - 1679-1715. Biserica a
              fost începută pe timpul domniei lui Serban Cantacuzino. Ctitorul
              bisericii a fost Stoian Comisul. Biserica a fost restaurată la
              1918.
            </li>
            <li>satul Palanca - Biserica Sfinţii Voievozi - 1800 - 1801,</li>
            <li>
              satul Palanca - casa Nicolae Marin începutul secolului XX (lângă
              biserica Sfinţii Voievozi),
            </li>
            <li>satul Palanca - Casa Mavrache - sec. XIX - azi Sericicola,</li>
            <li>
              satul Stoeneşti - Conacul Drugănescu, Târnoveanu-Stirbei - sec.
              XVIII- azi Muzeu de etnografie şi artă populară,
            </li>
            <li>
              satul Stoeneşti - Biserica Buna Vestire (Drugăneşti) - 1723.
            </li>
          </ul>
          <p>
            &emsp;&emsp;Aceste monumente şi situri sunt semnalate în piesele
            desenate nr. 3 şi 4, împreună cu zonele lor de protecţie şi se
            materializează pe teren în zone delimitate geografic şi
            administrativ în scopul conservării şi întreţinerii lor.
            Amplasamentele menţionate, cu vestigii arheologice şi cu monumente
            istorice sau de arhitectură vor fi constituite ca zone protejate, în
            cadrul cărora orice lucrări de construcţii vor fi avizate de către
            Comisia Naţională a Monumentelor, Ansablurilor şi Siturilor
            Istorice. Autorizarea lucrărilor de construcţie pe o rază de 100 m
            faţă de limita exterioară a monumentelor se va efectua numai în
            condiţiile prevederilor Legii 50/1991, art. 7, lit. a.
          </p>
          <p>
            &emsp;&emsp;Satul Floreşti este atestat documentar de la 1477, sub
            Basarab cel Bătrân, drept moşia Floreşti proprietatea lui Vintilă
            Florescu. Până în secolul XVII târgurile sau oraşele erau
            administrate de un judeţ (şoltuz în Moldova) cu un sfat de 12
            pârgari. In 1833, prin Regulamentul Organic s-a înfiinţat Sfatul
            Orăşenesc cu 4 sau 5 membri care era condus de un prezident de sfat.
            In vechime comunele rurale nu existau decât ca sate, în care un om
            al stăpânirii (pârcălab în Tara Românească sau vornic în Moldova)
            exercita un rol fiscal, poliţienesc şi judecătoresc. La 1864, prin
            Legea Comunală, s-a reglementat şi administraţia satelor, grupate în
            comune rurale. De atunci toate comunele (urbane şi rurale) sunt
            conduse de către un Consiliul Comunal ales, prezidat de un Primar.
          </p>
          <p>
            &emsp;&emsp;Din 1968 până în 1981 comuna a aparţinut de Judetul
            ILFOV. Din ianuarie 1981, comuna Floreşti-Stoeneşti a fost trecută
            la Judeţul Giurgiu.
          </p>
        </article>
      </main>
      <div className="sideNav">
        <NavComuna />
      </div>
    </div>
  )
}

export default ContextIstoric
