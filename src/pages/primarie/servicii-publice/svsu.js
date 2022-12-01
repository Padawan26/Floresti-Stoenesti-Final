import React from "react"
import NavServicii from "../../../components/SideNavs/NavServicii"
import { Table } from "react-bootstrap"

const Svsu = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>
          Serviciul Voluntar pentru Situații de Urgență al Comunei
          Florești-Stoenești
        </h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <th> DOMENIUL</th>
              <th> PERIOADA DE ACTUALIZARE</th>
            </tr>
            <tr>
              <td> 1. Fisa S.V.S.U.</td>
              <td> Vezi fisa alaturata (fisa Floresti-Stoenesti)</td>
            </tr>
            <tr>
              <td>
                2. Planificarea exercitiilor : <br /> - exercitiul condus de
                catre ISU ,,Vlasca” Giurgiu impreuna cu SVSU Floresti-Stoenesti
              </td>
              <td>
                Prin planificarea facuta de catre ISU ,,Vlasca” Giurgiu impreuna
                cu SVSU Floresti-Stoenesti, probabil in luna septembrie 2012.
              </td>
            </tr>
            <tr>
              <td>
                3. Planificarea controalelor preventive: <br /> - la
                gospodariile populatiei, de doua ori pe an, de regula primavara;{" "}
                <br /> - la unitatile de invatamant, premergator inceperii
                anului scolar; <br /> - la institutiile publice din subordinea
                Consiliului Local
              </td>
              <td>
                - primavara = martie, aprilie; <br /> - toamna = septembrie,
                octombrie; <br />- august, septembrie; <br /> - mai, iunie,
                iulie;{" "}
              </td>
            </tr>
            <tr>
              <td>
                4. Planul de pregatire in domeniul situatiilor de urgenta.{" "}
              </td>
              <td>
                Intocmirea Planului de pregatire in domeniul situatiilor de
                urgenta pe anul 2012 conform planificarii si aprobarii ISU
                ,,Vlasca” Giurgiu.
              </td>
            </tr>
            <tr>
              <td>
                5. Interventii (data, ora, cauza probabila, scurta descriere)
              </td>
              <td>
                Dupa fiecare interventie se intocmeste Raportul de interventie
                pentru situatii de urganta si Procesul verbal ce se aduc la
                cunostinta Presedintelui C.L.S.U. (Primarul comunei) si
                Centrului operational al ISU ,,Vlasca” Giurgiu, documente in
                care sunt mentionate data, ora, cauza probabila si o scurta
                descriere a situatiei de urgenta.
              </td>
            </tr>
            <tr>
              <td>
                6. Masuri preventive, conform tipurilor de pericole cuprinse in
                Planul de Analiza si Acoperire a Riscurilor identificate la
                nivelul localitatii.
              </td>
              <td> Ori de cate ori situatia o impune.</td>
            </tr>
            <tr>
              <td>
                7. Registrul istoric al Serviciului Voluntar pentru Situatii de
                Urgenta al comunei Floresti-Stoenesti.
              </td>
              <td> Este intocmit si va fi actualizat anual</td>
            </tr>
            <tr>
              <td>8. Recrutare personal voluntar. </td>
              <td>
                - trimestrial; <br /> - ori de cate ori este nevoie se vor face
                rezilieri de contracte de voluntariat, respectiv se vor incheia
                contracte noi;
              </td>
            </tr>
            <tr>
              <td>
                9. Multimedia (foto/video) din timpul interventiilor,
                exercitiilor, activitatilor preventive, exercitiilor,
                concursurilor, campaniilor, precum si a altor activitati unde
                participa voluntarii.
              </td>
              <td>
                Dupa fiecare activitate desfasurata de Serviciul Voluntar pentru
                Situatii de Urgenta al comunei Floresti-Stoenesti.
              </td>
            </tr>
          </tbody>
        </Table>
      </main>
      <div className="sideNav">
        <NavServicii />
      </div>
    </div>
  )
}

export default Svsu
