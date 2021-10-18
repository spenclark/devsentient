import { Grid } from "@mui/material";
import React from "react"
// Bottom Components to pull user to a choice after scolling landing page


function LandingHook({props}) {
    return (
        <Grid container item xs={12} style={{display: "flex", justifyContent: "center", width: "50%"}}>
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    {props.title}
                </Grid>
                <Grid item xs={12}>
                    {props.subTitle}
                </Grid>
                <Grid>
                    <a href={props.LeftButton.to} >
                        {props.LeftButton.title}
                    </a>
                </Grid>
                <Grid>
                    <a href={props.RightButton.to}>
                        {props.RightButton.title}
                    </a>
                </Grid>

            </Grid>
            <Grid item xs={12}>
                {/* IMG */}
                <p>
                    {props.img.title}
                </p>
                <img src={props.img.src} width="100%" height= "auto" alt={props.img.alt}></img>
            </Grid>
        </Grid>
    )
}

export default LandingHook