import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/navigation.module.css"

export default function Navigation() {
  return (
    <div className="navContainer">
      <Navbar collapseOnSelect expand="xxl">
        <Navbar.Brand as={Link} to="/" className={styles.logo}>
          <StaticImage
            src="../images/logo.jpg"
            alt="Logo"
            width={100}
            quality={100}
            className={styles.poza}
          />
          <p className={styles.text}>
            Primăria
            <br /> Florești
            <br />
            Stoenești
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />

        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul">
            <NavDropdown as="li" title="Primărie">
              <NavDropdown.Item as={Link} eventKey="1.1" to="/primarie/cetateni">
                Cetațeni de Onoare
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.2" to="/primarie/conducere">
                Conducere
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.3" to="/primarie/structura">
                Structura
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.4" to="/primarie/organigrama">
                Organigrama
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.5" to="/primarie/proiecte">
                Proiecte
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.6" to="/primarie/registru">
                Registru Agricol
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.7" to="/primarie/servicii-publice">
                Servicii Publice
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="1.8" to="/primarie/stare-civila">
                Starea Civilă
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown as="li" title="Primar">
              <NavDropdown.Item as={Link} eventKey="2.1" to="/primar/atributii">
                Atribuții
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/primar/biografie">
                Biografie
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item as={Link} to="/primar/curriculum-vitae">
                Curriculum Vitae
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} eventKey="2.2" to="/primar/dispozitii">
                Dispozițiile Primarului
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="2.3" to="/primar/mesajul-primarului">
                Mesajul Primarului
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown as="li" title="Despre Comună">
              <NavDropdown.Item as={Link} eventKey="3.1" to="/despre-comuna/prezentare">
                Prezentare
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="3.2" to="/despre-comuna/context-istoric">
                Context Istoric
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="3.3" to="/despre-comuna/eroii-comunei">
                Eroii Comunei
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="3.4" to="/despre-comuna/institutii">
                Instituții
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="3.5" to="/despre-comuna/adrese-utile">
                Adrese Utile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="3.6" to="/despre-comuna/evenimente">
                Evenimente
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown as="li" title="Consiliul Local">
              <NavDropdown.Item as={Link} eventKey="4.1" to="/consiliul-local/atributii">
                Atribuții
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="4.2" to="/consiliul-local/componenta">
                Componența
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="4.3" to="/consiliul-local/hotarari/">
                Hotărâri
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="4.4"
                as={Link}
                to="/consiliul-local/declaratii-de-avere"
              >
                Declarații de Avere
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="4.5"
                as={Link}
                to="/consiliul-local/declaratii-de-interese"
              >
                Declarații de Interese
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown as="li" title="Informații">
              <NavDropdown.Item as={Link} eventKey="5.1" to="/informatii/acte-necesare">
                Acte Necesare
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="5.2" to="/informatii/angajari">
                Angajări
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="5.3" to="/informatii/anunturi">
                Anunțuri Publice
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="5.4" to="/informatii/buget">
                Buget si execuție bugetară
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="5.5" to="/informatii/fiscalitate">
                Fiscalitate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="5.6" to="/informatii/formulare">
                Formulare Online
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown as="li" title="Servicii Online">
              <NavDropdown.Item as={Link} eventKey="6.1" to="/plata-online">
                Plătește online
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://florestistoenesti.regista.ro/formulare"
                target="_blank"
                rel="noreferrer"
              >
                Formulare online
              </NavDropdown.Item>
              <NavDropdown.Item
                active={false}
                href="https://florestistoenesti.regista.ro/sesizari"
                target="_blank"
                rel="noreferrer"
              >
                Sesizări Online
              </NavDropdown.Item>
              <NavDropdown.Item
                active={false}
                href="https://florestistoenesti.regista.ro/"
                target="_blank"
                rel="noreferrer"
              >
                Verificare Cereri
              </NavDropdown.Item>
              <NavDropdown.Item
                active={false}
                href=" https://florestistoenesti.regista.ro/monitorul-oficial-local"
                target="_blank"
                rel="noreferrer"
              >
                Monitorul Oficial Local Regista
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} eventKey="7" to="/mol">
              Monitorul Oficial Local
            </Nav.Link>
            <Nav.Link as={Link} eventKey="8" to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link
              eventKey="9"
              active={false}
              href="https://www.ghiseul.ro/ghiseul/public/"
              target="_blank"
            >
              Ghișeul.ro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
