import React from "react"
import NavConsiliu from "../../components/SideNavs/NavConsiliu"
import { VscFilePdf } from "react-icons/vsc"

const DeclaratiiInterese = () => {
  const style = { color: "red", fontSize: "2.5rem" }
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Declarații de Interese</h1>
        <div className="list">
          <a
            href="https://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Ni%c8%9bescu-Marius-Lili2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Nițescu Marius-Lili
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-P%c4%83tra%c8%99cu-Constantin2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Pătrașcu Constantin
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Antonescu-Gheorghe-Gioni2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Antonescu Gheorghe Gioni
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Buturugaru-Petre2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Buturugaru Petre
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Ciurel-Grigore2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Ciurel Grigore
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="https://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Constantin-Doinel2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Constantin Doinel
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Cristea-Narcis-Adrian2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Cristea Narcis Adrian
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Cr%C3%AEngea-%C8%98tefan2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Crîngea Ștefan
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2011/01/Declaratie-de-interese-Dr%C4%83gu%C8%99inoiu-Constantin2016.04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Drăgușinoiu Constantin
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Dumitru-Vasile2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Dumitru Vasile
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Laz%C4%83r-Constantin2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Lazăr Constantin
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Panait-Marius2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Panait Marius
              <VscFilePdf style={style} />
            </div>
          </a>

          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Pandele-Maximilian2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Pandele Maximilian
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-S%C4%83raru-Simona2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Săraru Simona
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Stancu-Niculae2018.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pdf">
              Stancu Niculae
              <VscFilePdf style={style} />
            </div>
          </a>
          <a
            href="http://floresti-stoenesti.ro/wp-content/uploads/2018/02/Declaratie-de-interese-Trifan-Ionu%C8%9B2018.pdf"
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

export default DeclaratiiInterese
