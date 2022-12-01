import React from "react"
import ActeUrabnism from "../../components/ActeUrabnism"
import ActeAsistentaSociala from "../../components/ActeAsistentaSociala"
import NavInformatii from "../../components/SideNavs/NavInformatii"
const ActeNecesare = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <ActeUrabnism />
        <ActeAsistentaSociala />
      </main>
      <div className="sideNav">
        <NavInformatii />
      </div>
    </div>
  )
}

export default ActeNecesare
