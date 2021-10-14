import { Grid, Typography } from "@mui/material"
import {makeStyles} from "@mui/styles"
import React, { useEffect } from "react"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        background: "#EEEEEE",
        margin: "auto"
    },
    titleDiv: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "25px",
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: theme.palette.primary.contrastText,
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "1.2"
    },
    subTitle: {
        width: "100%",
        textAlign: "center",
        color: theme.palette.primary.mainContrast,
        padding: "10px 0"
    },
    button: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.primaryGold} , ${theme.palette.primary.secondaryGold})`,
        padding: "10px 14px",
        margin: "auto",
        borderRadius: "2px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600"
    },
    cardDiv: {
        background: theme.palette.primary.primaryWhite,
        margin: "10px",
        
    },
}))
export default function Cards({props}) {
    const classes = useStyles()
    const [splicedTitle, brokenTitle] = props.title.split("~")
    const [splicedSubTitle, brokenSubTitle] = props.subTitle.split("~")

    return (
        <Grid container xs={12} className={classes.root}>
            <Grid container item xs={12} className={classes.titleDiv}>
            {/* title div */}
                <div className={classes.title}>
                    {splicedTitle}
                    <br />
                    {brokenTitle}
                </div>
                <div className={classes.subTitle}>
                        {splicedSubTitle}
                        <br />
                        {brokenSubTitle}
                </div>
               <p className={classes.button}>
                    {/* Toggle Test State button */}
                    {props.buttonLabel}
               </p>
            </Grid>
            <Grid container item xs={10} style={{margin: "auto", padding: "10px"}}>
                {/* Card divs */}
                {/* defauly grid layout xs=12 sm={6} md={3 ? type leader} */}
               
                {props.cardData.map((data) => {  
                    return (
                        <Grid className={classes.cardDiv} item key={data.cardTitle} xs={12} sm={6} md={3}>
                            <div style={{padding: "15px", fontSize: "12px"}}>
                                <div style={{ color: "#dba10d"}}>
                                    {data.icon}
                                </div>
                                <p style={{fontWeight: "600", color: "#3D0540"}}> 
                                    {data.cardTitle}
                                </p>
                                <p>
                                    {data.cardText}
                                </p>
                            </div>
                        </Grid>
                )})}
                <Grid className={classes.cardDiv} item xs={12} sm={6} md={6}>
                    <div style={{margin: "15px", fontSize: "12px"}}>
                        <div style={{ color: "#dba10d"}}>
                            {props.featuredCard.icon}
                        </div>
                         <p style={{fontWeight: "600", color: "#3D0540"}}> 
                            {props.featuredCard.cardTitle}
                        </p>
                        <p>
                            {props.featuredCard.cardText}
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}