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
            <h2>Registratură</h2>
            <article>
              <p>Programare audiențe: <br />Luni-Vineri: 09:00-16:00</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 1</a>
              </div>
            </article>
          </div>
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
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:00-16:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Secretarul general al comunei</h2>
            <article>
              <p>Secretar General (cu exercitare): Matache Alexandru </p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 8</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:secretar@floresti-stoenesti.ro">
                  secretar@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:00-16:00
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
                <a href="tel:0246256258">Telefon: 0246.256.258</a>
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
            <h2>Compartiment relații cu publicul</h2>
            <article>
              <p>
                Consilier relații cu publicul: Grigoruță Iuliana
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
            <h2>Compartiment cadastru și urbanism</h2>
            <article>
              <p>Șef serviciu: Trifan Ionuț </p>
              <p>Inspector superior: Matache Alexandru</p>
              <p> Consilier principal: Mihai Florin-Cătălin</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 6</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:cadastru@floresti-stoenesti.ro">
                  cadastru@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 08:00-12:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment stare civilă</h2>
            <article>
              <p>Consilier superior: Maluspărteanu Mariana</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 4</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:starecivila@floresti-stoenesti.ro">
                  starecivila@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 10:00-14:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment Evidența Persoanelor</h2>
            <article>
              <p>Referent principal: Tudose Adriana, Cristea Valentina-Olimpia</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0346.801.763">Telefon: 0346.801.763</a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Joi: 8:30 - 16:30
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment asistenţă socială</h2>
            <article>
              <p>Consilier superior: Preda Elena</p>
              <p>Consilier principal: Popa Cristina</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 3</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:social@floresti-stoenesti.ro">
                  social@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:00-14:00{" "}
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment impozite și taxe</h2>
            <article>
              <p>Consilier superior: Popescu Elena, Dănăilă Petruța</p>
              <p>Consilier asistenţ: Codreanu Steluţa, 	Ilie Elena</p>
              <p>Referent superior: Drugea Cristian, Drugea Eugenia</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 2</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:taxe@floresti-stoenesti.ro">taxe@floresti-stoenesti.ro</a>
              </div>
              <p>
                <b>Program de lucru cu publicul:</b> <br /> <b>IMPOZITE ȘI TAXE:</b><br /> Luni-Joi: 8:00 - 16:00 <br /><b>CASIERIE:</b><br />Luni-Vineri: 8:00 - 16:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment contabilitate</h2>
            <article>
              <p>Consilier superior: Panait Ionela-Roxana </p>
              <p> Administrator financiar: Popa Marinela </p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 7</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:contabilitate@floresti-stoenesti.ro">
                  contabilitate@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment registru agricol</h2>
            <article>
              <p>
                Referent superior: Ivașcu Constantina, Mirică Mihaela
              </p>
              <p>Consilier asistent: Panait-Gîngea Andreea, Achim Andra-Maria</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 5</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:agricol@floresti-stoenesti.ro ">
                  agricol@floresti-stoenesti.ro
                </a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:00-16:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment achiziţii publice</h2>
            <article>
              <p>Consilier achiziţii publice superior: Bunica Marius-Eugen </p>
              <p>Consilier achiziţii publice asistent: Neagu Marius-Theodor</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 0/3</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:achizitii@floresti-stoenesti.ro">
                  achizitii@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment resurse umane</h2>
            <article>
              <p>Consilier principal: State Elena</p>
              <p>Consilier asistent: Mustățea Valentina Daiana </p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 0/4</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:resurseumane@floresti-stoenesti.ro">resurseumane@floresti-stoenesti.ro</a>
              </div>
              <p>
                Program de lucru cu publicul: <br /> Luni-Vineri: 8:00-14:00
              </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment protecția mediului</h2>
            <article>
              <p>Consilier protecția mediului: Stanciu Elena</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 9</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:mediu@floresti-stoenesti.ro">mediu@floresti-stoenesti.ro</a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Serviciul voluntar pentru situaţii de urgență</h2>
            <article>
              <p>Șef serviciu SVSU: Crăciun Monica-Mioara</p>
              <p> Cadru tehnic PSI: Tănase Mihaela </p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 0/1</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:urgenta@floresti-stoenesti.ro">
                  urgenta@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Societate de administrare a domeniului public</h2>
            <article>
              <p>Administrator: Negoi Dumitru</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 0/2</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:sadpflorestistoenesti@gmail.com">sadpflorestistoenesti@gmail.com</a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Bibliotecă</h2>
            <article>
              <p>Bibliotecar: Crăciun Vasilica-Silvia</p>
              <p>Bibliotecar asistent: Petrescu George-Valentin</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0763623020">Telefon: 0763623020</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:bcflorestistoenesti@yahoo.com">bcflorestistoenesti@yahoo.com</a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment IT</h2>
            <article>
              <p>Administrator rețea calculatoare: Barbu Nicolae</p>
              <p>Tehnician în informatică și comunicații: Dina Constantin-Victor</p>
              <div className={styles.mail}>
                <FaPhoneAlt />
                <a href="tel:0246256258">Telefon: 0246.256.258 interior 0/5</a>
              </div>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:it@floresti-stoenesti.ro">
                  it@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Compartiment drumuri și poduri</h2>
            <article>
              <p>Administrator drumuri: Coman Eugen-Daniel </p>
              <p>Șofer buldoexcavatorist: Popescu Nicușor </p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Consilier Primar</h2>
            <article>
              <p>Consilier: Popa George</p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Șofer</h2>
            <article>
              <p>Șofer: Popescu Mirel</p>
            </article>
          </div>
          <div className={styles.box}>
            <h2>Responsabil SMAM</h2>
            <article>
              <p>Responsabil: </p>
              <div className={styles.mail}>
                <GrMail />
                <a href="mailto:smam@floresti-stoenesti.ro">
                  smam@floresti-stoenesti.ro
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}

export default contact
