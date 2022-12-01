import React from "react"
import * as styles from "../styles/contact.module.css"
import { GrMail } from "react-icons/gr"
import { FaPhoneAlt, FaFax } from "react-icons/fa"

const contact = () => {
  return (
    <main className="pageContainer">
      <div>
        <h1>Contact - Primăria Comunei Floresti-Stoenesti</h1>
        <p
          style={{
            textAlign: "justify",
            fontSize: "1.3rem",
            margin: "0 2rem",
            marginBottom: "2.5rem",
          }}
        >
          &emsp;&emsp;Pentru a intra în contact direct cu Primăria Comunei
          Floresti-Stoenesti, această secțiune pune la dispoziția dumneavoastră
          numere de telefon, adrese de email precum si adresele sediilor
          Primăriei Comunei Floresti-Stoenesti.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>Primarul comunei</h2>
            <article>
              <p>DUMITRU CONSTANTIN</p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:primar@floresti-stoenesti.ro">
                  primar@floresti-stoenesti.ro
                </a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:primar.dumitru@floresti-stoenesti.ro">
                    primar.dumitru@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <p>
                Program de audiențe: <br /> Luni: 10:00-12:00 <br /> Miercuri:
                10:00-12:00 <br />
                Vineri: 10:00-12:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Viceprimarul comunei</h2>
            <article>
              <p>LAZĂR CONSTANTIN</p>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:viceprimar@floresti-stoenesti.ro">
                    viceprimar@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:viceprimar.lazar@floresti-stoenesti.ro">
                    viceprimar.lazar@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <p>
                Program de audiențe: <br /> Marti: 10:00-12:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Secretarul general al comunei</h2>
            <article>
              <p>Secretar General (delegat): Mihai Florin-Cătălin </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:secretar@floresti-stoenesti.ro">
                  secretar@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-16:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Administrator public</h2>
            <article>
              <p>Administrator public: Matei Cătălin</p>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:administrator@floresti-stoenesti.ro">
                    administrator@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:administrator.matei@floresti-stoenesti.ro">
                    administrator.matei@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-16:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Administrator public</h2>
            <article>
              <p>Administrator public: Matei Cătălin </p>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:administrator.matei@floresti-stoenesti.ro">
                    administrator@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:administrator.matei@floresti-stoenesti.ro">
                    administrator.matei@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-16:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Relații cu publicul</h2>
            <article>
              <p>
                Consilier asistent relații cu publicul: Codreanu Adrian Codruț
              </p>
              <div className={styles.mail}>
                <GrMail />
                <div className="wide">
                  <a href="mailto:relatiicupublicul@floresti-stoenesti.ro">
                    relatiicupublicul@floresti-stoenesti.ro
                  </a>
                </div>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-16:30
              </p>
              <p>
                Program de audiențe: <br /> Joi: 10:00 - 12:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Serviciul cadastru și urbanism</h2>
            <article>
              <p>Șef serviciu: Trifan Ionuț </p>
              <p>Inspector cadastru: Matache Alexandru</p>
              <p> Consilier cadastru: Mihai Florin Cătălin</p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:cadastru@floresti-stoenesti.ro">
                  cadastru@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 08:30-12:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Serviciul taxe și impozite locale</h2>
            <article>
              <p>Operatori rol: Popescu Elena, Codreanu Steluța </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:taxe@floresti-stoenesti.ro">
                  taxe@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni - Vineri: 8:30-14:30
              </p>
              <p>Casieri: Drugea Cristian, Drugea Eugenia, Ilie Elena</p>
              <p>
                Program de lucru cu publicul: <br /> Luni - Vineri: 8:30-16:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Consiliul Local al Comunei Florești-Stoenești</h2>
            <article>
              <p>
                Adresa: Str. 1 Decembrie 1918, nr. 123, comuna
                Florești-Stoenești, județul Giurgiu
              </p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Tel: 0246.256.258</a>
              </div>
              <div className={styles.mail}>
                <FaFax />
                <a href="tel:0246256005">Fax: 0246.256.005</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:primarie@floresti-stoenesti.ro">
                  primarie@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Birou registru agricol</h2>
            <article>
              <p>
                Referenti agricoli: Duță Aneta, Ivașcu Constantina, Mirică
                Mihaela
              </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:agricol@floresti-stoenesti.ro ">
                  agricol@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-16:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment IT</h2>
            <article>
              <p>Administrator rețea calculatoare: Barbu Nicolae</p>
              <p>Tehnician în informatică și comunicații: Dina Constantin</p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:it@floresti-stoenesti.ro">
                  it@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Asistenţă socială</h2>
            <article>
              <p>Referenti: Preda Elena, Popa Cristina</p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:social@floresti-stoenesti.ro">
                  social@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-14:30{" "}
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Contabilitate </h2>
            <article>
              <p>Contabil: Panait Ionela-Roxana </p>
              <p> Administrator financiar: Popa Marinela </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:contabilitate@floresti-stoenesti.ro">
                  contabilitate@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Birou stare civilă</h2>
            <article>
              <p>Referent superior: Maluspărteanu Mariana </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:starecivila@floresti-stoenesti.ro">
                  starecivila@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 10:30-14:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Situaţii de urgenţă</h2>
            <article>
              <p>Șef serviciu SVSU: Monica Crăciun </p>
              <p> Cadru tehnic PSI: Tănase Mihaela </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:urgenta@floresti-stoenesti.ro">
                  urgenta@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment drumuri și poduri</h2>
            <article>
              <p>Administrator drumuri: Coman Eugen Daniel </p>
              <p>Șofer buldoexcavatorist: Popescu Nicușor </p>
            </article>
          </div>

          <div className={styles.box}>
            <h2>Biroul de resurse umane</h2>
            <article>
              <p>Consilier: State Elena </p>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:30-14:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Achiziţii publice</h2>
            <article>
              <p>Inspector: Bunica Marius Eugen </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:achizitii@floresti-stoenesti.ro">
                  achizitii@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Consilier Primar</h2>
            <article>
              <p>Consilier: Bunica Marius-Eugen</p>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}

export default contact
