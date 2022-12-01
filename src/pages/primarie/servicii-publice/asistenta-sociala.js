import React from "react"
import ActeAsistentaSociala from "../../../components/ActeAsistentaSociala"
import NavServicii from "../../../components/SideNavs/NavServicii"

const AsistentaSociala = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <ActeAsistentaSociala />
      </main>
      <div className="sideNav">
        <NavServicii />
      </div>
    </div>
  )
}

export default AsistentaSociala
