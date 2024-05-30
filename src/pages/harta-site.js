import React from "react"
import { Link } from "gatsby"
import { HiArrowNarrowRight } from "react-icons/hi"
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md"

const HartaSite = () => {
  return (
    <main className="pageContainer">
      <div style={{width:"100%"}}>
      <h1 className="titlu-Harta">Hartă Site</h1>
      <h2 className="descriere-Harta">Utilizând această secţiune, veţi avea acces mai uşor, la paginile site-ului.</h2>
      <p className="subtitlu-Harta">Navigare rapidă</p>
      <ul>
        <li className="main-category">
          <HiArrowNarrowRight size={25} />
          Primărie
          <ul>
            <li>
            <MdOutlineSubdirectoryArrowRight className="subarrow" size={25}/>
              <Link to="/primarie/cetateni">Cetățeni</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight className="subarrow" size={25} />
              <Link to="/primarie/conducere">Conducere</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight className="subarrow" size={25} />
              <Link to="/primarie/structura">Structura</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight className="subarrow" size={25} />
              <Link to="/primarie/organigrama">Organigrama</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight className="subarrow" size={25} />
              <Link to="/primarie/proiecte">Proiecte</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight className="subarrow" size={25} />
              <Link to="/primarie/registru">Registrul Agricol</Link>
            </li>
            <li className="ms">
              <HiArrowNarrowRight size={25} /> 
              Servicii Publice
              <ul>
                <li>
                <MdOutlineSubdirectoryArrowRight size={25} />
                  <Link to="/primarie/servicii-publice/asistenta-sociala">
                    Asistență Socială
                  </Link>
                </li>
                <li>
                <MdOutlineSubdirectoryArrowRight size={25} />
                  <Link to="/primarie/servicii-publice/urbanism">Urbanism</Link>
                </li>
                <li>
                <MdOutlineSubdirectoryArrowRight size={25} />
                  <Link to="/primarie/servicii-publice/taxe-impozite">
                    Taxe si Impozite
                  </Link>
                </li>
                <li>
                <MdOutlineSubdirectoryArrowRight size={25} />
                  <Link to="/primarie/servicii-publice/svsu">S.V.S.U</Link>
                </li>
              </ul>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/primarie/stare-civila">Starea civilă</Link>
            </li>
          </ul>
        </li>
        <li className="main-category">
        <HiArrowNarrowRight size={25} />
          Primar
          <ul>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/primar/atributii">Atribuții</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/primar/biografie">Biografie</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/primar/curriculum-vitae">Curriculum Vitae</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/primar/dispozitii">Dispozițiile Primarului</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/primar/mesajul-primarului">Mesajul Primarului</Link>
            </li>
          </ul>
        </li>
        <li className="main-category">
        <HiArrowNarrowRight size={25} />
          Despre Comună
          <ul>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/despre-comuna/atributii">Prezentare</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/despre-comuna/context-istoric">Context Istoric</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/despre-comuna/eroii-comunei">Eroii Comunei</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/despre-comuna/institutii">Instituții</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/despre-comuna/adrese-utile">Adrese Utile</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/despre-comuna/evenimente">Evenimente</Link>
            </li>
          </ul>
        </li>
        <li className="main-category">
        <HiArrowNarrowRight size={25} />
          Consiliul Local
          <ul>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/consiliul-local/atributii">Atribuții</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/consiliul-local/componenta">Componența</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/consiliul-local/hotarari">Hotărâri</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/consiliul-local/declaratii-de-avere">
                Declarații de Avere
              </Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/consiliul-local/declaratii-de-interese">
                Declarații de Interese
              </Link>
            </li>
          </ul>
        </li>
        <li className="main-category">
        <HiArrowNarrowRight size={25} />
          Informații
          <ul>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/acte-necesare">Acte Necesare</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/angajari">Angajări</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/anunturi">Anunțuri Publice</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/buget">Buget si Execuție Bugetară</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/formulare">Formulare Online</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/rapoarte">Rapoarte de Activitate</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/stiri">Știri</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/informatii/taxe-impozite">Taxe si Impozite</Link>
            </li>
          </ul>
        </li>
        <li className="main-category">
        <HiArrowNarrowRight size={25} />
          Servicii Online
          <ul>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <Link to="/plata-online">Plătește Online</Link>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <a
                href="https://florestistoenesti.regista.ro/formulare"
                target="_blank"
                rel="noreferrer"
              >
                Formulare Online
              </a>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <a
                href="https://florestistoenesti.regista.ro/sesizari"
                target="_blank"
                rel="noreferrer"
              >
                Sesizări Online
              </a>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <a
                href="https://florestistoenesti.regista.ro/"
                target="_blank"
                rel="noreferrer"
              >
                Verificare Cereri
              </a>
            </li>
            <li>
            <MdOutlineSubdirectoryArrowRight size={25} />
              <a href="https://florestistoenesti.regista.ro/monitorul-oficial-local">
                MOL Regista
              </a>
            </li>
          </ul>
        </li>
        <li className="soloLink">
        <HiArrowNarrowRight size={25} color="#d6794d" />
          <Link className="soloLink" to="/mol">MOL</Link>
        </li>
        <li className="soloLink">
        <HiArrowNarrowRight size={25} color="#d6794d" />
          <Link className="soloLink" to="/contact">Contact</Link>
        </li>
        <li className="soloLink">
        <HiArrowNarrowRight size={25} color="#d6794d" />
          <a className="soloLink"
            href="https://www.ghiseul.ro/ghiseul/public/"
            target="_blank"
            rel="noreferrer"
          >
          Ghișeul.ro
          </a>
        </li>
      </ul>
      </div>
    </main>
  )
}

export default HartaSite
