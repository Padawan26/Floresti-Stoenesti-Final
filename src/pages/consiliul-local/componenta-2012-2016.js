import React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"
import NavConsiliu from "../../components/SideNavs/NavConsiliu"

const Componenta20122016 = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Componența Consiliului Local 2012-2016</h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <th>Nr. crt.</th>
              <th>Nume şi prenume</th>
              <th>Denumirea partidului din care face parte</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Drugea Vasilica</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paraschiv Mihaela</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Antonescu Gheorghe-Gioni</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Caloian Gheorghe</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Crîngea Ştefan </td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Drăguşinoiu Constantin</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Lazăr Constantin (Viceprimar)</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Maluspărteanu Florin</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Marin Florin Valentin</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Niţescu Marius Lili</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Săraru Vasile</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>12</td>
              <td>State Corneliu</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Ciurel Grigore</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Pandele Maximilian</td>
              <td>Partidul Social Democrat</td>
            </tr>
          </tbody>
        </Table>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/consiliul-local/componenta">
            Componența Consiliul Local al Comunei Florești-Stoenești actuală
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

export default Componenta20122016
