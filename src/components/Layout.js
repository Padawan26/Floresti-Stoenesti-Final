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
      Acest website folosește cookie-uri proprii cât și cookie-uri adăugate de terti, 
      pentru a furniza vizitatorilor o experientă mult mai bună de navigare și servicii 
      adaptate nevoilor și interesului fiecăruia.
        <a href="https://floresti-stoenesti.ro/politica-de-confidentialitate">
          Politica de Confidentialitate
        </a>
      </CookieConsent>
    </>
  )
}

export default Layout
