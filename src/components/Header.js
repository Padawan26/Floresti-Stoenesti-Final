import React from "react"
import { GrFacebook } from "react-icons/gr"
import { HiPhone } from "react-icons/hi"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a
          href="tel:0246256258"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <div className="phone">
            <HiPhone />
            0246256258
          </div>
        </a>
        <a
          href="https://www.facebook.com/FlorestiStoenesti"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <div className="facebook">
            <GrFacebook />
            Facebook
          </div>
        </a>
      </div>
    </header>
  )
}
