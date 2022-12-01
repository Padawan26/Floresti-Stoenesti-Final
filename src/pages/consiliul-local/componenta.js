import React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"
import NavConsiliu from "../../components/SideNavs/NavConsiliu"

const Componenta = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Componența Consiliului Local</h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <th>Nr. crt.</th>
              <th>Nume şi prenume</th>
              <th>Denumirea partidului din care face parte</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Dumitrescu Marius-Iulian</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lazăr Constantin (Viceprimar)</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Antonescu Gheorghe-Gioni</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Voicu Doina-Dumitra</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vasile Florin-Orlando</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Cazacu Andrei-Daniel</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Crîngea Ștefan</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Răducu Florin</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Matache Andrei</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Pantazi Constantin</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Codreanu Nicolae</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Marin Florin-Valentin</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Croitoru Florin-Ionuț</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Oneață Florin</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Panait Liliana-Florentina</td>
              <td>Partidul Social Democrat</td>
            </tr>
          </tbody>
        </Table>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/consiliul-local/componenta-2012-2016">
            Componența Consiliul Local al Comunei Florești-Stoenești între anii
            2012-2016
          </Link>
          <Link to="/consiliul-local/componenta-2016-2020">
            Componența Consiliul Local al Comunei Florești-Stoenești între anii
            2016-2020
          </Link>
        </div>
      </main>
      <div className="sideNav">
        <NavConsiliu />
      </div>
    </div>
  )
}

export default Componenta
