import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
// functional imports
import Landing from "./Components/Landing"
import RequestDemo from "./Components/RequestDemo"

// the scope of the project is only 2 routes -- this router pattern is simplistic but effective for this person. If you want add subroutes just add a sub array!

export const routes = [
    {
        usage: Landing,
        exact: true,
        to: "/"
    }, 
    {
        usage: RequestDemo,
        exact: false,
        to: "/request-demo"
    }
]



export default function Routing({props}) {
  return (
    <Router>
        <div>
                {props.map((route) => {
                    return <Route 
                        key={route.to}
                        path={route.to}
                        exact={route.exact}
                        render={() => <route.usage />}
                        />
                })}
        </div> 
    </Router>
  )
}