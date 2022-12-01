import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Harta = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC1MO0WHxlMViFJbzawmCS8-9eBVaBV8Cg",
    preventGoogleFontsLoading: true,
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div className="Last">
      <div className="weather">
        <h1 style={{ color: "#919191" }}>Vreme - Locație</h1>
        <a
          className="weatherwidget-io"
          href="https://forecast7.com/ro/44d5225d70/floresti-stoenesti/"
          data-label_1="FLOREȘTI-STOENEȘTI"
          data-label_2="Vreme"
          data-theme="original"
          target="_blank"
          rel="noreferrer"
        >
          FLOREȘTI-STOENEȘTI Vreme
        </a>
        {
          !(function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0]
            if (!d.getElementById(id)) {
              js = d.createElement(s)
              js.id = id
              js.src = "https://weatherwidget.io/js/widget.min.js"
              fjs.parentNode.insertBefore(js, fjs)
            }
          })(document, "script", "weatherwidget-io-js")
        }
      </div>
      <div className="map">
        <Map />
      </div>
      <div className="userway">
        {(function (d) {
          var s = d.createElement("script")
          /* uncomment the following line to override default position*/
          s.setAttribute("data-position", 3)
          /* uncomment the following line to override default size (values: small, large)*/
          /* s.setAttribute("data-size", "large");*/

          s.setAttribute("data-language", "ro")
          /* uncomment the following line to override color set via widget (e.g., #053f67)*/
          /* s.setAttribute("data-color", "#2d68ff");*/
          /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
          /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility";*/
          /* uncomment the following line to override support on mobile devices*/
          /* s.setAttribute("data-mobile", true);*/
          s.setAttribute("samesite", "lax")
          s.setAttribute("data-account", "xEz6x0ywoI")
          s.setAttribute("src", "https://cdn.userway.org/widget.js")
          ;(d.body || d.head).appendChild(s)
        })(document)}
      </div>
    </div>
  )
}
function Map() {
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 44.48829717512507, lng: 25.71086647914997 }}
      mapContainerClassName="harta"
    >
      <Marker position={{ lat: 44.48829717512507, lng: 25.71086647914997 }} />
    </GoogleMap>
  )
}

export default Harta
