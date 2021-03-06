import { Grid } from "@mui/material"
import {makeStyles} from "@mui/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        background: "#f6f3f0",
        margin: "auto"
    },
    titleDiv: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "25px",
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
        borderRadius: "3px",
        padding: "12px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "space-between",
        height: "92%",
        flexDirection: "column",
        margin: "7px"
        
    },
    parentDiv: {
        display: "flex",
        padding: `50px ${theme.spacing(12)}`,
        [theme.breakpoints.down("md")]: {
            padding: `0 ${theme.spacing(6)}`
        },
        [theme.breakpoints.down("xs")]: {
            padding: `0 ${theme.spacing(2)}`
        },
    },
    cardFeatureDiv: {
        background: theme.palette.primary.primaryWhite,
        borderRadius: "3px",
        padding: "12px",
        fontSize: "12px",
        display: "flex",
        height: "92%",
        flexDirection: "column",
        margin: "7px",
        justifyContent: "space-between",
    },
    link: {
        fontSize: "12px", textDecoration: "underline", textDecorationColor: theme.palette.primary.primaryGold, color: theme.palette.primary.contrast, fontWeight: "600"
    }
}))
export default function Cards({props}) {
    const classes = useStyles()
    const [splicedTitle, brokenTitle] = props.title.split("~")
    const [splicedSubTitle, brokenSubTitle] = props.subTitle.split("~")

    return (
        <Grid container xs={12} className={classes.root}>
            <Grid className={classes.titleDiv} container item xs={12} >
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
            <Grid container item xs={12} className={classes.parentDiv}>
                {/* Card divs */}
                {/* defauly grid layout xs=12 sm={6} md={3 ? type leader} */}
               
                {props.cardData.map((data) => {  
                    return (
                        <Grid item key={data.cardTitle} xs={12} sm={6} md={3}>
                            <div className={classes.cardDiv}>
                   
                                    <div style={{ color: "#dba10d"}}>
                                        {data.icon}
                                    </div>
                                    <div style={{fontWeight: "600", color: "#3D0540"}}> 
                                        {data.cardTitle}
                                    </div>
                                    <div>
                                        {data.cardText}
                                    </div>
                         
                                <div className={classes.link}>
                                    {data.linkName}
                                </div>
                            </div>
                        </Grid>
                )})}
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.cardFeatureDiv} id="features">
                        <div>
                        <div style={{ color: "#dba10d"}}>
                            {props.featuredCard.icon}
                        </div>
                         <div style={{fontWeight: "600", color: "#3D0540"}}> 
                            {props.featuredCard.cardTitle}
                            </div>
                       <div>
                            {props.featuredCard.cardText}
                        </div>
                        </div>
                            <div className={classes.link}>
                                    {props.featuredCard.linkName}
                            </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}