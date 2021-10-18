import React from "react"
import Hero from "./Hero"
import Cards from "./Cards"
import {Navbar, Footer} from "./Navigation"
import Carousel from "./Carousel"
import {
    navigationText,
    heroText,
    cardElements,
    carouselContent,
    bottomContent,
  } from "./utils/landingpagedata"
import LandingHook from "./LandingHook"
  



export default function Landing() {
    return (
        <div> 
            <Navbar props={navigationText}/>
            <Hero props={heroText} />
            <Cards props={cardElements} />
            <Carousel props={carouselContent}/>
            <LandingHook props={bottomContent}/>
            <Footer props={navigationText}/>
        </div>
    )
}