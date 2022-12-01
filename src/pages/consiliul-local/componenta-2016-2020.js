import React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"
import NavConsiliu from "../../components/SideNavs/NavConsiliu"

const Componenta20162020 = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Componența Consiliului Local 2016-2020</h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <th>Nr. crt.</th>
              <th>Nume şi prenume</th>
              <th>Denumirea partidului din care face parte</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Antonescu Gheorghe-Gioni</td>
              <td>Uniunea Nationala pentru Progresul Romaniei</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Buturugaru Petre</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ciurel Grigore</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Constantin Doinel</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Crîngea Ştefan</td>
              <td>Partidul Alianta Liberalilor si Democratilor</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Drăguşinoiu Constantin</td>
              <td>Partidul Alianta Liberalilor si Democratilor</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dumitru Vasile</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Cristea Narcis Adrian</td>
              <td>Partidul Alianta Liberalilor si Democratilor</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Lazar Constantin</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Panait Marius</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Pandele Maximilian</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Patrascu Constantin (Viceprimar)</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Sararu Simona</td>
              <td>Partidul Social Democrat</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Stancu Niculae</td>
              <td>Partidul Naţional Liberal</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Trifan Ionut</td>
              <td>Partidul Alianta Liberalilor si Democratilor</td>
            </tr>
          </tbody>
        </Table>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/consiliul-local/componenta">
            Componența Consiliul Local al Comunei Florești-Stoenești actuală
          </Link>
          <Link to="/consiliul-local/componenta-2012-2016">
            Componența Consiliul Local al Comunei Florești-Stoenești între anii
            2012-2016
          </Link>
        </div>
      </main>
      <div className="sideNav">
        <NavConsiliu />
      </div>
    </div>
  )
}

export default Componenta20162020
