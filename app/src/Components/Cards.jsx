import { Grid, Typography } from "@mui/material"
import React from "react"

export default function Cards({props}) {
    return (
        <Grid container>
            <Grid container item xs={12}>
            {/* title div */}
                <Typography>
                    {props.title}
                </Typography>
                <Typography>
                    {props.subTitle}
                </Typography>
               <p>
                    {/* Toggle Test State button */}
                    {props.buttonLabel}
               </p>
            </Grid>
            <Grid container item xs={12}>
                {/* Card divs */}
                {/* defauly grid layout xs=12 sm={6} md={3 ? type leader} */}
                {props.cardData.map(data => {
                    return (
                        <Grid item key={data.cardTitle} xs={12} sm={6} md={props.md}>
                            <div style={{padding: "15px", fontSize: "14px"}}>
                                <div>
                                    {data.icon}
                                </div>
                                <p>
                                    {data.cardTitle}
                                </p>
                                <p>
                                    {data.cardText}
                                </p>
                            </div>
                        </Grid>
                )})}
            </Grid>
        </Grid>
    )
}