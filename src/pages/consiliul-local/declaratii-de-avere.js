import React from "react"
import NavConsiliu from "../../components/SideNavs/NavConsiliu"
import { VscFilePdf } from "react-icons/vsc"

const DeclaratiiAvere = () => {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Declarații de Avere</h1>
        <div className="list">
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Ni%C8%9Bescu-Marius-Lili2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Nițescu Marius-Lili
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-P%c4%83tra%c8%99cu-Constantin2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Pătrașcu Constantin
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Antonescu-Gheorghe-Gioni2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Antonescu Gheorghe Gioni
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Buturugaru-Petre2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Buturugaru Petre
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Ciurel-Grigore2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Ciurel Grigore
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Constantin-Doinel2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Constantin Doinel
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Cristea-Narcis-Adrian2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Cristea Narcis Adrian
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Cr%C3%AEngea-%C8%98tefan2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Crîngea Ștefan
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Dr%C4%83gu%C8%99inoiu-Constantin2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Drăgușinoiu Constantin
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Dumitru-Vasile2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Dumitru Vasile
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Laz%C4%83r-Constantin2016.04Cons.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Lazăr Constantin
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Panait-Marius2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Panait Marius
              <VscFilePdf style={style} />
            </div>
          </a>

          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Pandele-Maximilian2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Pandele Maximilian
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-S%c4%83raru-Simona2018.06.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Săraru Simona
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://staging.floresti-stoenesti.ro/wp-content/uploads/2010/12/Declaratie-de-avere-Stancu-Niculae2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Stancu Niculae
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://staging.floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-avere-Trifan-Ionu%C8%9B2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Trifan Ionuț
              <VscFilePdf style={style} />
            </div>
          </a>
        </div>
      </main>
      <div className="sideNav">
        <NavConsiliu />
      </div>
    </div>
  )
}

export default DeclaratiiAvere
