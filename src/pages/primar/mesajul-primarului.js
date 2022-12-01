import React from "react"
import NavPrimar from "../../components/SideNavs/NavPrimar"
const MesajulPrimarului = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Mesajul Primarului</h1>
        <p style={{ fontSize: "1.3rem" }}>
          &emsp;&emsp;În fiecare dimineaţă constatăm că în toate parcurile din
          comună, staţiile de autobuz şi terenurile de sport apar distrugeri de
          bunuri. Vă reamintim că toate aceste bunuri sunt ale voastre şi vă
          rog, nu le mai distrugeţi! Pe băncile din parc se stă cu şezutul, nu
          cu picioarele. Coşurile de gunoi sunt utile pentru aruncarea
          gunoiului, nu pentru a le fi îndoite capacele metalice. Terenurile
          multisport din incintele şcolilor, sunt pentru activităţi sportive, nu
          pentru a le fi tăiate gardurile şi instalaţiile electrice.
        </p>
        <h2 style={{ textAlign: "center" }}>
          Ne adresăm cu rugămintea. Nu le mai distrugeţi! Sunt ale voastre!
        </h2>
      </main>
      <div className="sideNav">
        <NavPrimar />
      </div>
    </div>
  )
}

export default MesajulPrimarului
