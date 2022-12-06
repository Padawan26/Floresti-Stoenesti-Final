import React from "react"
import Hero from "../components/Hero"
//import Newsfeed from "../components/Newsfeed"
import Primar from "../components/Primar"
import Harta from "../components/Harta"
import NoticeFeed from "../components/NoticeFeed"
import Seo from "../components/Seo"
import EventFeed from "../components/EventFeed"

export default function Home() {
  return (
    <>
      <Seo title="Acasă" />
      <Hero />
      <div className="siteWrapper">
        <Primar />
        <EventFeed />
        <NoticeFeed />
      </div>
      <Harta />
    </>
  )
}
