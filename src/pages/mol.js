import React from "react"
import { Link } from "gatsby"
const Mol = () => {
  return (
    <div className="mol">
      <main>
        <h1>Monitorul Oficial Local</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div className="block" style={{ width: "70%", margin: "0 auto" }}>
            <a
              href="https://floresti-stoenesti.ro/wp-content/uploads/2010/12/HCL93-31.10.2017.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="block-link">
                Statutul Unitatii Administrativ-Teritoriale
              </h2>
            </a>
          </div>
          <div className="block" style={{ width: "70%", margin: "0 auto" }}>
            <Link to="/consiliul-local/hotarari">
              <h2 className="block-link">
                Regulamentele privind procedurile administrative
              </h2>
            </Link>
          </div>
          <div className="block" style={{ width: "70%", margin: "0 auto" }}>
            <Link to="/consiliul-local/hotarari">
              <h2 className="block-link">
                Hotărârile autorității deliberative
              </h2>
            </Link>
          </div>
          <div className="block" style={{ width: "70%", margin: "0 auto" }}>
            <Link to="/primar/dispozitii">
              <h2 className="block-link">Dispozitiile Autoritatii Executive</h2>
            </Link>
          </div>
          <div className="block" style={{ width: "70%", margin: "0 auto" }}>
            <Link to="/informatii/buget">
              <h2 className="block-link">Documente si informatii Financiare</h2>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Mol
