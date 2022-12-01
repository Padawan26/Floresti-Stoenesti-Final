import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import Header from "./Header"
import CookieConsent from "react-cookie-consent"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="siteContainer">{children}</div>
      <Footer />
      <CookieConsent location="top" buttonText="Am inteles!">
        Acest site foloseste Cookies. Vedeti
        <a href="http://localhost:8000/politica-de-confidentialitate">
          Politica de Confidentialitate
        </a>
      </CookieConsent>
    </>
  )
}

export default Layout
