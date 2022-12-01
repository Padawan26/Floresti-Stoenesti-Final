import React from "react"
import NavInformatii from "../../components/SideNavs/NavInformatii"
import { VscFilePdf } from "react-icons/vsc"

const Buget = () => {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Buget si Execuție Bugetară</h1>
        <div
          className="block"
          style={{ marginBottom: "2rem ", paddingBottom: "3rem" }}
        >
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>2022</h2>
          <div className="list">
            <a
              href="https://floresti-stoenesti.ro/wp-content/uploads/2022/01/Anunt-poiect-buget-2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Anunț organizare consultare publică pentru “Proiectul de
                hotărâre privind aprobarea bugetului local al comunei
                Florești-Stoenești pe anul 2022”.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="https://floresti-stoenesti.ro/wp-content/uploads/2022/01/PHCL02-2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Proiectul de hotărâre privind aprobarea bugetului local al
                comunei Florești-Stoenești pe anul 2022.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="https://floresti-stoenesti.ro/wp-content/uploads/2022/01/Anexa-buget-2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Anexa Proiectului de hotărâre privind aprobarea bugetului local
                al comunei Florești-Stoenești pe anul 2022.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="https://floresti-stoenesti.ro/wp-content/uploads/2022/01/Anexa-2-3-buget-2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Anexa 2 si 3 a Proiectului de hotărâre privind aprobarea
                bugetului local al comunei Florești-Stoenești pe anul 2022.
                <VscFilePdf style={style} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="block"
          style={{ padding: "2rem 1rem", margin: "3rem 0" }}
        >
          <div className="list">
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/12/Lista-investitiilor-pe-anul-2011.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Lista investitiilor pe anul 2011.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2013/04/Raport-privind-necesitatea-aprobarii-proiectului-de-buget-de-venituri-si-cheltuieli-pe-anul-2013.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Raport privind necesitatea aprobarii proiectului de buget de
                venituri si cheltuieli al Comunei Floresti-Stoenesti pe anul
                2013.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2013/04/Proiect-buget-venituri-si-cheltuieli-pe-anul-2013-si-estimarile-anilor-2014-2016.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Proiect buget venituri si cheltuieli al Comunei
                Floresti-Stoenesti pe anul 2013 si estimarile anilor 2014-2016.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2013/04/Lista-obiectivelor-de-investitii-pe-anul-2013-cu-finantare-partiala-sau-integrala-de-la-bugetul-local-repartizate-pentru-cheltuieli-de-capital.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Lista obiectivelor de investitii pe anul 2013 cu finantare
                partiala sau integrala de la bugetul local repartizate pentru
                cheltuieli de capital.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/12/Hotarare-Nr10-07.02.2014.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                Hotararea nr. 10 din 07.02.2014 privind aprobarea Bugetului de
                Venituri si Cheltuieli si a Listei de Investitii pentru anul
                2014.
                <VscFilePdf style={style} />
              </div>
            </a>
            <a
              href="http://floresti-stoenesti.ro/wp-content/uploads/2010/12/Hotarare-Nr1-09.02.2015.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pdf">
                HOTĂRÂREA NR.1, privind aprobarea Bugetului de venituri si
                cheltuieli pe anul 2015 si listei de investitii.
                <VscFilePdf style={style} />
              </div>
            </a>
          </div>
        </div>
      </main>
      <div className="sideNav">
        <NavInformatii />
      </div>
    </div>
  )
}

export default Buget
