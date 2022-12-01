import React from "react"
import NavComuna from "../../components/SideNavs/NavComuna"
import { FaMapMarkerAlt, FaPhoneAlt, FaFax } from "react-icons/fa"
import { RiExternalLinkLine } from "react-icons/ri"
import { GrMail } from "react-icons/gr"
const AdreseUtile = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Adrese Utile</h1>
        <div className="blocks">
          <section className="block">
            <h2 className="blockTitle">
              Agenția Județeană pentru Ocuparea Forței de Muncă
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  Șoseaua București bl. 202/5D, Mezanin
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246230613">0246/230.613</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246230740">0246/230.740 (Fax) </a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:primar@floresti-stoenesti.ro">
                  giurgiu@ajofm.anofm.ro
                </a>
              </li>
              <li>
                Persoana de contact: Petronela TURLEA
                <br /> Sef institutie: Adriana Adina IORGA
              </li>
              <li className="icon">
                <RiExternalLinkLine />
                <a
                  href="http://www.giurgiu.anofm.ro"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.giurgiu.anofm.ro
                </a>
              </li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Autoritatea Rutieră Română - Agenția Giurgiu
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide"> Șos. București, bl. 2C/1B, ap. 3</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246218265">0246/218.265</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246218265">0246/218.265 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:liliana@mailbox.ro">liliana@mailbox.ro</a>
              </li>
              <li> Persoana de contact: Crusmac Dumitru </li>
              <li> Șef instituție: Barascu Mihai</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Biblioteca Județeană I.A. Basarabescu
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  Str. Ștefan cel Mare nr. 14, Str. Mircea cel Batrân Șos.
                  București Bl.66
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246212346">0246/212.346</a>,{" "}
                  <a href="tel:+040246211929">0246/211.929</a>,{" "}
                  <a href="tel:+040246210762">0246/210.762</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246212346">0246/212.346 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:bibliotecagr.@pcnet.ro">
                  bibliotecagr.@pcnet.ro
                </a>
              </li>
              <li>
                Persoana de contact: Ion Mihai, Camelia Filip, Mihaela Dragnuta,
                Georgeta Iconaru, Raris Mihaela
              </li>
              <li> Sef institutie: Ion Mihai </li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Agenția Domeniilor Statului</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  {" "}
                  B-dul București, nr. 57, loc. Giurgiu, jud. Giurgiu (Cam.
                  Comerț, Ind. și Agricultură)
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216454">0246/216.454</a>,{" "}
                <a href="tel:+040730642366">0730.642.366</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246216454">0246/216.454 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:agentia@domeniilestatului.ro">
                  agentia@domeniilestatului.ro
                </a>
              </li>
              <li>Persoana de contact: Ceadîrgeanu Victor</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Biroul Județean de Metrologie Legală</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  {" "}
                  Str. Savin Popescu bl. MUV3, anexa D
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246213430">0246/213.430</a>
              </li>
              <li className="icon">
                <FaFax /> <a href="tel:+040246213430">0246/213.430 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:bjmlgr@giurgiu,pcnet.ro">
                  bjmlgr@giurgiu,pcnet.ro
                </a>
              </li>
              <li>Persoana de contact: Damian Simona</li>
              <li> Sef institutie: Damian Simona</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Casa Județeană de Asigurări de Sănătate
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  {" "}
                  Str. Vlad Țepeș, Bl. MUV 1, parter, Giurgiu
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216796">0246/216.796</a>,{" "}
                <a href="tel:+040246212807">0246/212.807</a>
              </li>
              <li className="icon">
                <FaFax /> <a href="tel:+040246216202">0246/216.202 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:casgr@infogrup.ro">casgr@infogrup.ro</a>
              </li>
              <li>Persoana de contact: Doaga Liliana</li>
              <li>Sef institutie: Ec. Florentina Popescu</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Casa Județeană de Pensii</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />{" "}
                <div className="wide">Str. Dorobanți nr. 21</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246212388">0246/212.388</a>,{" "}
                <a href="tel:+040246212381">0246/212.381</a>
              </li>
              <li className="icon">
                <FaFax /> <a href="tel:+040246212388">0246/212.388 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:casagr@lex.logicnet.ro">
                  casagr@lex.logicnet.ro
                </a>
              </li>
              <li> Persoana de contact: Draganescu Stefan </li>
              <li> Șef instituție: Iorga Ion</li>
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Mircea cel Batran nr.40</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246217698">0246/217.698</a>
              </li>
              <li className="icon">
                <FaFax /> <a href="tel:+040246215240">0246/215.240 (Fax)</a>
              </li>
              <li>Persoana de contact: Rodica Iusut, Titeica</li>
              <li>Mihaela Sef institutie: Rodica Iusut</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Tribunalul Judetean Giurgiu</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide"> Str. Portului nr. 13</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246212725">0246/212.725</a>,{" "}
                  <a href="tel:+040246215441">0246/215.441</a>,{" "}
                  <a href="tel:+040246215820">0246/215.820</a>,{" "}
                  <a href="tel:+040246216148">0246/216.148</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />{" "}
                <div className="wide">
                  {" "}
                  <a href="tel:+040246217492">0246/217.492 (Fax)</a> (Prim
                  Presedinte)
                </div>
              </li>
              <li>Persoana de contact: Elisabeta Lazureanu</li>
              <li>Sef institutie: Ecaterina Dobre</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Comandamentul Județean de Jandarmi</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide"> Str. București nr. 63-65</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246219631">0246/219.631</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246215539">0246/215.539 (Fax)</a>
              </li>
              <li>Persoana de contact: Col. Maiorescu Stefan</li>
              <li>Sef institutie: Lt.col. Gheorghiu Mihail</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Directia de Sanatate Publica</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide"> Sos. Bucuresti nr. 82</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040426214176">0426/214.176</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246217251">0246/217.251 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:dspgr@giurgiu.pcnet.ro">
                  dspgr@giurgiu.pcnet.ro
                </a>
              </li>
              <li>
                Persoana de contact: Paul Marinescu, Leontina Ghenu, Magdalena
                Saitoc
              </li>
              <li> Sef institutie: Marinescu Paul</li>
            </ul>
          </section>

          <section className="block">
            <h2 className="blockTitle">Inspectoratul de Concurenta</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide"> Str. Popescu Savin Bl. MUV 2</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246216338">0246/216.338</a>,{" "}
                  <a href="tel:+040214107135">0214/107.135</a>,{" "}
                  <a href="tel:+040214103067">0214/103.067</a>,{" "}
                  <a href="tel:+040214103593">0214/103.593</a>,{" "}
                  <a href="tel:+040213356960">0213/356.960</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246216338">0246/216.338 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:adrian_dodita@hotmail.ro">
                  adrian_dodita@hotmail.ro
                </a>
                ,{" "}
                <a href="mailto:maria_alexandru@oficiulconcurentei.ro">
                  maria_alexandru@oficiulconcurentei.ro
                </a>
                ,{" "}
                <a href="mailto:daniela_florea@oficiulconcurentei.ro">
                  daniela_florea@oficiulconcurentei.ro
                </a>
              </li>
              <li> Persoana de contact: Dindirica Mihai - Giurgiu</li>
              <li>Director de Cabinet - Adrian Dodita</li>
              <li>Director General Adjunct - Maria Alexandru</li>
              <li>Sef serviciu juridic si contencios - Daniela Florea</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia Generala a Finantelor Publice
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />{" "}
                <div className="wide">B-dul CFR, nr. 8, Giurgiu</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246213069">0246/213.069</a>,{" "}
                  <a href="tel:+040246212813">0246/212.813</a>,{" "}
                  <a href="tel:+040246213615">0246/213.615</a>,{" "}
                  <a href="tel:+040246213362">0246/213.362</a>,{" "}
                  <a href="tel:+040246215474">0246/215.474</a>,{" "}
                  <a href="tel:+040246213615">0246/213.615</a>,{" "}
                  <a href="tel:+040246216247">0246/216.247</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246218718">0246/218.718 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:sorin.musat.gr@mail.mfinante.gr.ro">
                  sorin.musat.gr@mail.mfinante.gr.ro
                </a>
              </li>
              <li>Persoana de contact: Musat Sorin, Petrescu Petruta</li>
              <li>Sef institutie: Velican V.</li>
              <li className="icon">
                <RiExternalLinkLine />
                <a
                  href="http://www.mfinante.ro"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.mfinante.ro
                </a>
              </li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia Generala de Munca si Solidaritate Sociala
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Independentei Bl. 106</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246215108">0246/215.108</a>,{" "}
                <a href="tel:+040246213316">0246/213.316</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246212872">0246/212.872 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:dgmss.gr@xnet.ro">dgmss.gr@xnet.ro</a>
              </li>
              <li>Persoana de contact: Popescu Jenica Cezarina</li>
              <li>Sef institutie: Cojocaru Vasilina</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia Generala Judeteana pentru Protectia Copilului
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Bd.Mihai Viteazu nr. 4</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246212164">0246/212.164</a>,{" "}
                <a href="tel:+040246219597">0246/219.597</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246214011">0246/214.011 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:DGJPDCGiurgiu@Home.ro">DGJPDCGiurgiu@Home.ro</a>
              </li>
              <li>Persoana de contact: Daniela Peicea</li>
              <li>Sef institutie: Viorica Stanciulescu</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Directia Fitosanitara</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Sos. Ghizdarului nr.2</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246211964">0246/211.964</a>
              </li>
              <li>Persoana de contact: Ochisor Petruta</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia Judeteana a Arhivelor Nationale
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                Str. C.F.R. nr. 7
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246213315">0246/213.315</a>
              </li>
              <li>Persoana de contact: Damian Ancu</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Directia Judeteana de Statistica</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                Str. Vlad Tepes bl. MUV 1
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246214914">0246/214.914</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246214914">0246/214.914 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:giurgiu@djs.insse.ro">giurgiu@djs.insse.ro</a>
              </li>
              <li>Persoana de contact: Ruse Georgeta, Ionete Luminita</li>
              <li>Sef institutie: Descultu Irina</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia Judeteana Pentru Agricultura si Industrie Alimentara
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                Sos.Ghizdarului nr. 2
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246212038">0246/212.038</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+04046211718">046/211.718 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:dadrgr@net.ro">dadrgr@net.ro</a>
              </li>
              <li>Persoana de contact: Cosoi Stelica</li>
              <li>Sef institutie: Ochisor Petra</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia Judeteana pentru Tineret si Sport
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  Str. Pacii nr. 60, Stadion Marin Anastasovici
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246211636">0246/211.636</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246211181">0246/211.181 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:DTSJGr@email.ro">DTSJGr@email.ro</a>
              </li>
              <li>Persoana de contact: Delea Monica, Marin Mirel</li>
              <li>Sef institutie: Dogaru Nicolae</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Directia pentru Cultura, Culte si Patrimoiul Cultural National
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Dobrogeanu Gherea nr. 3-5</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246215114">0246/215.114</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246213219">0246/213.219 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:patrimoniulgr@pcnet.ro">
                  patrimoniulgr@pcnet.ro
                </a>
              </li>
              <li>Persoana de contact: Cretu Mircea Alexandru </li>
              <li>Sef institutie: Cretu Mircea Alexandru</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Directia pentru Protectia Plantelor</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">B-dul Mihai Viteazu nr.</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246213040">0246/213.040</a>,{" "}
                <a href="tel:+040246215433">0246/215.433</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246213040">0246/213.040 (Fax)</a>
              </li>
              <li>Persoana de contact: Ing. Florian Bilcea </li>
              <li>Sef institutie: Ing. Florian Bilcea</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Directia Sanitar - Veterinara</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Podului nr. 1, CP 17</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246230531">0246/230.531</a>,{" "}
                <a href="tel:+040246230491">0246/230.491</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246221344">0246/221.344 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:dsvgr@digital.ro">dsvgr@digital.ro</a>
              </li>
              <li>Persoana de contact: Ciochir Nicoleta, Persu Ion</li>
              <li>Sef institutie: Nae Dumitru</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Grupul de Pompieri Judetean Vlasca</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Uzinei nr. 3</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246211212">0246/211.212</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246212229">0246/212.229 (Fax)</a>
              </li>
              <li>Persoana de contact: Scruba Gheorghe</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Inspectoratul de Protectie a Mediului
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Sos. Bucuresti bl. 111 sc. A+B</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216980">0246/216.980</a>,{" "}
                <a href="tel:+040246214760">0246/214.760</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246211410">0246/211.410 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:inspm@xnet.ro">inspm@xnet.ro</a>
              </li>
              <li>Persoana de contact: Lungu Niculina</li>
              <li>Sef institutie: Petrus Gabriela</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Inspectoratul de Stat Teritorial pentru Persoane cu Handicap
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Sos. Bucuresti nr. 76</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216232">0246/216.232</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246216232">0246/216.232 (Fax)</a>
              </li>
              <li>Persoana de contact: Musat Norina</li>
              <li>Sef institutie: Gemescu Mariana</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Inspectoratul in Constructii</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Ulicioara Ghiocelului nr. 2</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246215732">0246/215.732</a>,{" "}
                <a href="tel:+040246213206">0246/213.206</a>
              </li>
              <li className="icon">
                <FaFax />
                <div className="wide">
                  <a href="tel:+040246213206">0246/213.206 (Fax)</a>,{" "}
                  <a href="tel:+040246215732">0246/215.732 (Fax)</a>
                </div>
              </li>
              <li>Persoana de contact: Mihoci Iulia Carmela</li>
              <li>Sef institutie: Bardaune Petre</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Inspectoratul Judetean al Politiei de Frontiera
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Mircea cel Batran nr. 36</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246213229">0246/213.229</a>,{" "}
                  <a href="tel:+040246213640">0246/213.640</a>,{" "}
                  <a href="tel:+040246213641">0246/213.641</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246211785">0246/211.785 (Fax)</a>
              </li>
              <li>Persoana de contact: Comisar Mavrodineanu Marian</li>
              <li>Sef institutie: Comisar Bratu Ovidiu</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Inspectoratul Judetean de Politie</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Calugareni nr. 26</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246213212">0246/213.212</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246219754">0246/219.754 (Fax)</a>
              </li>
              <li>Persoana de contact: Mr. Gheta Mirela Lavinia</li>
              <li>Sef institutie: Dobrin N.</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Inspectoratul Judetean de Protectie Civila
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Dobrogeanu Gherea nr. 3-5</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246211708">0246/211.708</a>,{" "}
                  <a href="tel:+040246215451">0246/215.451</a>,{" "}
                  <a href="tel:+040246211228">0246/211.228</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246213923">0246/213.923 (Fax)</a>
              </li>
              <li>Persoana de contact: Ghimpeteanu Marin</li>
              <li>Sef institutie: Ghimpeteanu Marin</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Inspectoratul Scolar Judetean</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Portului nr. 17</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246214255">0246/214.255</a>,{" "}
                  <a href="tel:+040246214537">0246/214.537</a>,{" "}
                  <a href="tel:+040246214255">0246/214.255</a>,{" "}
                  <a href="tel:+040246214537">0246/214.537</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246213986">0246/213.986 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:drstefan@pcnet.ro">drstefan@pcnet.ro</a>
              </li>
              <li>
                Persoana de contact: Stefan Paun, Elena Boiangiu, Mariana Barda
              </li>
              <li>Sef institutie: Burgui I.</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Inspectoratul Teritorial de Munca</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  Str. CFR bl. 111, sc. C, parter + mezanin
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216747">0246/216.747</a>
              </li>
              <li className="icon">
                <FaFax />
                <div className="wide">
                  <a href="tel:+040246216747">0246/216.747 (Fax)</a>,{" "}
                  <a href="tel:+040246216789">0246/216.789 (Fax)</a>
                </div>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:itmgr@pcnet.ro">itmgr@pcnet.ro</a>
              </li>
              <li>Persoana de contact: Niculescu Florica Mihaela</li>
              <li>Sef institutie: Stefan Marin</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Inspectoratul Teritorial pentru Calitatea Semintelor si
              Materialului Saditor
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Sos. Ghizdarului nr. 2</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246219510">0246/219.510</a>,{" "}
                <a href="tel:+040246216650">0246/216.650</a>
              </li>
              <li className="icon">
                <FaFax />
                <div className="wide">
                  <a href="tel:+040246219510">0246/219.510 (Fax)</a>,{" "}
                  <a href="tel:+040246216650">0246/216.650 (Fax)</a>
                </div>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:ITCSMSGR@PCNET.RO">ITCSMSGR@PCNET.RO</a>
              </li>
              <li>Persoana de contact: Togoe Ecaterina</li>
              <li>Sef institutie: Ghincea Nicoleta Adriana</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Judecatoria Bolintin Vale</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Republicii nr. 5</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <div className="wide">
                  <a href="tel:+040246270584">0246/270.584</a>,{" "}
                  <a href="tel:+040246270650">0246/270.650</a>,{" "}
                  <a href="tel:+040246270867">0246/270.867</a>
                </div>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+04246270650">0246/270.650 (Fax)</a>
              </li>
              <li>Persoana de contact: Andreea Florescu</li>
              <li>Sef institutie: Gheorghe Tecoi</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Judecatoria Giurgiu</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Mihai Viteazu</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246217744">0246/217.744</a>,{" "}
                <a href="tel:+040246213307">0246/213.307</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246213307">0246/213.307 (Fax)</a>
              </li>
              <li>Persoana de contact: Florentina Rosioru</li>

              <li>Sef institutie: Tropcea Mihaela Carmen</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Oficiul Judetean de Cadastru, Geodezie si Cartografie
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Ghizdarului nr. 2</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216444">0246/216.444</a>,{" "}
                <a href="tel:+040246217210">0246/217.210</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246216444">0246/216.444 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:ojcgcgr@pcnet.ro">ojcgcgr@pcnet.ro</a>
              </li>
              <li>Persoana de contact: Maneci Viorel</li>
              <li>Sef institutie: Buzas Ionut</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Oficiul Judetean pentru Protectia Consumatorului
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">
                  Str. Savin Popescu bl. MUV 3, anexa D
                </div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246216402">0246/216.402</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246216402">0246/216.402 (Fax)</a>
              </li>
              <li className="icon">
                <GrMail />
                <a href="mailto:ojpcgiurgiu@anpc.ro">ojpcgiurgiu@anpc.ro</a>
              </li>
              <li>Persoana de contact: Sima Lucica </li>
              <li>Sef institutie: Craiciu Mihai</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Oficiul pentru Ameliorare si Reproductie in Zootehnie
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Sos. Ghizdarului nr.1</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246211259">0246/211.259</a>
              </li>
              <li>
                Persoana de contact: Sovarel Floare, Stanisteanu Mircea, Olteanu
                Traian
              </li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Parchetul de pe langa Judecatoria Bolintin Vale
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Republicii nr. 2</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246270830">0246/270.830</a>
              </li>
              <li>Persoana de contact: Madin Ion</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Parchetul de pe langa Judecatoria Giurgiu
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Mircea cel Batran nr. 30</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246214705">0246/214.705</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246214705">0246/214.705 (Fax)</a>
              </li>
              <li>Persoana de contact: Ionita Valentin</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">
              Parchetul de pe langa Tribunalul Giurgiu
            </h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. Mircea cel Batran nr. 30</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246211687">0246/211.687</a>,{" "}
                <a href="tel:+040247213119">0247/213.119</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246213889">0246/213.889 (Fax)</a>
              </li>
              <li>Persoana de contact: Stefanescu Silvia</li>
            </ul>
          </section>
          <section className="block">
            <h2 className="blockTitle">Centrul Militar Județean</h2>
            <ul className="blockBody">
              <li className="icon">
                <FaMapMarkerAlt />
                <div className="wide">Str. George Coșbuc nr. 63</div>
              </li>
              <li className="icon">
                <FaPhoneAlt />
                <a href="tel:+040246213095">0246/213.095</a>
              </li>
              <li className="icon">
                <FaFax />
                <a href="tel:+040246215589">0246/215.589 (Fax)</a>
              </li>
              <li>Persoana de contact: Boltinescu Ion</li>
            </ul>
          </section>
        </div>
      </main>
      <div className="sideNav">
        <NavComuna />
      </div>
    </div>
  )
}

export default AdreseUtile
