import React from "react"
import Hero from "./Hero"
import Cards from "./Cards"
import Navbar from "./Navigation"
import Carousel from "./Carousel"
import {
    navigationText,
    heroText,
    cardElements,
    CarouselContent,
    BottomContent,
  } from "./utils/landingpagedata"
  



export default function Landing() {
    return (
        <div> 
            <Navbar props={navigationText}/>
            <Hero props={heroText} />
            <Cards props={cardElements} />
            <Carousel props={CarouselContent}/>
        </div>
    )
}