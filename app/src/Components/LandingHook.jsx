import { Grid } from "@mui/material";
import React from "react"
// Bottom Components to pull user to a choice after scolling landing page


function LandingHook({props}) {
    return (
        <Grid container item xs={12} style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column-reverse", padding: "12px", margin: "auto", margin: "80px 0"}}>
            <Grid item container xs={10} style={{border: "1px dashed #3E0E40", background: "#eeeeee", padding: "40px", borderRadius: "5px"}}>
                <Grid item xs={12} style={{textAlign:"center", fontWeight: "600", fontSize: "24px", color: "#3E0E40"}}>
                    {props.title}
                </Grid>
                <Grid item xs={12} style={{textAlign:"center", color: "#343434"}}>
                    {props.subTitle}
                </Grid>
                <Grid item container xs={12} style={{display:"flex", justifyContent: "center"}}>
                    <Grid item xs={12} sm={3} style={{textAlign: "center", padding: "10px 18px", margin: "10px",  borderRadius: "3px", background: "#dba10d", display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <a href={props.LeftButton.to} style={{textDecoration: "none", fontWeight: "600", color: "white"}}>
                            {props.LeftButton.title}
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={3} style={{textAlign: "center", padding: "10px 18px", margin: "10px", border: "#dba10d 2px solid", borderRadius: "3px", display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <a href={props.RightButton.to} style={{textDecoration: "none", fontWeight: "600", color: "#dba10d"}}>
                            {props.RightButton.title}
                        </a>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={10} style={{marginBottom: "100px",}}>
                {/* IMG */}
                <p style={{fontWeight: "600", fontSize: "24px", paddingBottom: "6px"}} >
                    {props.img.title}
                </p>
                <img src={props.img.src} width="100%" height= "auto" alt={props.img.alt}></img>
            </Grid>
        </Grid>
    )
}

export default LandingHook