import React from "react"
import Hero from "./Hero"
import Cards from "./Cards"
import Navbar from "./Navigation"
import {
    navigationText,
    heroText,
    cardElements,
    CaroselContent,
    BottomContent,
  } from "./utils/landingpagedata"
  



export default function Landing() {
    return (
        <div> 
            <Navbar props={navigationText}/>
            <Hero props={heroText} />
            <Cards props={cardElements} />

        </div>
    )
}