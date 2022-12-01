import React from "react"
import NavPrimarie from "../../components/SideNavs/NavPrimarie"
const Proiecte = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Proiecte Realizate</h1>
        <ul>
          <li>
            Executarea cartării stradale a denumirii străzilor, precum şi o nouă
            numerotare
          </li>
          <li> Revitalizarea serviciilor Primăriei </li>
          <li>
            Construirea acoperişului Căminului Cultural Floreşti şi a sistemului
            de încălzire centrală
          </li>
          <li>Reparaţia generală a DC 148 şi a DC 156</li>
          <li>Executarea Centrului de permanenţă medicală Floreşti</li>
          <li>
            Executarea bazei sportive Avântul Floreşti, modernizarea bazei
            sportive Progresul Palanca şi construirea unei baze noi la
            Stoeneşti, pe fosta groapă de gunoi
          </li>
          <li>
            Construirea sălii de festivităţi la Şcoala Stoeneşti şi modernizarea
            Grădiniţei Stoeneşti
          </li>
          <li>
            Modernizarea Căminului Cultural Stoeneşti şi transformarea acestuia
            în Sală de Consiliu şi Casă de Căsătorii
          </li>
          <li>
            Depunerea AFM a proiectului privind construirea reţelei de
            canalizare şi alimentare cu apă, staţie de epurare şi staţie de
            pompare
          </li>
          <li>
            Proiectul PNDI pentru astfaltarea a 25,6 km de drumuri comunale şi
            de interes local
          </li>
          <li>
            Extinderea reţelei de alimentare cu gaze cu încă 700 m în Palanca,
            strada Domnească, strada Luncii
          </li>
          <li>
            Dotarea Primăriei cu birotică şi calculatoare, pe relaţia cu
            ministerele
          </li>
          <li>
            Realizarea contractului de transport subvenţionat al elevilor
            cursanţi la licee din Bucureşti
          </li>
          <li>Lungimea sectorului de drum, cu reţea de gaze extinsă…</li>
        </ul>
      </main>
      <div className="sideNav">
        <NavPrimarie />
      </div>
    </div>
  )
}

export default Proiecte
