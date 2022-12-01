import React from "react"
import Layout from "./src/components/Layout"

import "bootstrap/dist/css/bootstrap.css"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
