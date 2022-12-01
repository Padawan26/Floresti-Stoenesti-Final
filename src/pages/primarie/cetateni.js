import React from "react"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
const Cetateni = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Cetățeni de onoare</h1>
        <p>
          Sâmbătă 8 Decembrie 2008 în sala de Conferinţe a Sanatoriului din
          Floreşti (actualmente desfiinţat), Consiliul Local al comunei Floreşti
          -Stoeneşti a acordat titlul de “Cetăţean de Onoare” al Comunei,
          domnilor:
        </p>
        <ul style={{ paddingLeft: "1rem", listStyle: "inside" }}>
          <li>
            Florentin Dumitru (fotbalist la echipa Steaua Bucureşti şi la Echipa
            Naţională a României)
          </li>
          <li>
            Gheorge Viziru (fost jucător de tenis şi antrenor al echipei române
            de Cupa Davis)
          </li>
        </ul>
        <p>
          ca semn de recunoaştere a talentului sportiv şi a contribuţiei aduse
          la sporirea prestigiului comunei.
        </p>
        {/* <div className="imagini-cetateni">Poze grid</div> */}
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default Cetateni
