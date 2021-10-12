import React from "react"

export default function Navbar({props}) {

    const [firstLogo, secondLogo] = props.logoText.split(' ');

    return (
        <div>
            <div>
                <h1>{firstLogo}{secondLogo}</h1>
            </div>
            <div>
               {props.navItems.map((data) => {
                   return (
                       <button>
                           {data.title}
                       </button>
                   )
               })}
            </div>
            <div>
            {props.onboardingItems.map((data) => {
                   return (
                       <button>
                           {data.title}
                       </button>
                   )
               })}
            </div>
        </div>
    )
}