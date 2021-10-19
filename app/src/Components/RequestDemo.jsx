import { Grid } from "@mui/material"
import React from "react"
import { Navbar, Footer } from "./Navigation"
import DemoForm from "./utils/DemoForm"
import { navigationText } from "./utils/landingpagedata"

export default function RequestDemo({}) {
    return (
        <>
        <Navbar props={navigationText}/>
        <div>
            <div style={{background: "#3E0E40", height: "90vh"}}> 
                    <div style={{textAlign: "center", padding: "30px"}}>
                        <p style={{fontWeight: "600", fontSize: "32px", color: "white", padding: "2px 0"}}>Learn how DevSentient can boost your business</p>
                        <p style={{ fontSize: "14px", color: "#eeeeee"}}>Schedule a 30-minute product demo with expert Q&A.</p>
                    </div>
                    <Grid container >
                        <Grid item xs={12}>
                            <Grid xs={10} sm={8} md={6} style={{margin: "auto"}}>
                                <DemoForm type={false} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
        </div>
        <Footer props={navigationText}/>

        </>
    )
}