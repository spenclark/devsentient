import React from "react"
import {makeStyles} from "@mui/styles"
import {Grid} from "@mui/material"
const useStyles = makeStyles(theme => ({
    navBar: {
        width: "100%",
        padding: "12px 0",
        background: theme.palette.primary.main
    },
    bar: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "auto",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        }
    },
    logoMain: {
        color: theme.palette.primary.primaryWhite,
        fontWeight: "600",
    },
    logoSpan: {
        color: theme.palette.primary.bold,
        fontWeight: "100",
        paddingLeft: "2px",
    },
    logoTag: {
        fontSize: "24px"
    },
    navItems: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        }
    },
    navItem: {
        color: theme.palette.primary.primaryWhite,
        fontSize: "14px",
        fontWeight: "600",
        background: "transparent",
        border: "transparent",
        padding: "10px 32px",
        [theme.breakpoints.down("xs")]: {
            padding: "10px",        }
    },
    onboardingDiv: {
        display: "flex",
        alignItems: "center",
        marginLeft: "18%",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            margin: "auto",
            width: "100%"
        },
    },
    baseButton: {
        display: "inline-block",
        whiteSpace: "nowrap",
        padding: "12px 32px",
        fontSize: "14px",
        fontWeight: "600",
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.primaryGold} , ${theme.palette.primary.secondaryGold})`,
        borderRadius: "2px",
        color: theme.palette.primary.contrastText,
        border: "none",
        "&:hover": {
            boxShadow: "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",

        },
    }
}))
export function Navbar({props}) {

    const classes = useStyles()
    const [firstLogo, secondLogo] = props.logoText.split(' ');

    return (
        <div className={classes.navBar}>
            <div className={classes.bar}>
                <div>
                    <h1 className={classes.logoTag}>
                        <span className={classes.logoMain}>
                            {firstLogo}
                        </span>
                        <span className={classes.logoSpan}>
                            {secondLogo}
                        </span>
                    </h1>
                </div>
                <div className={classes.navItems}>
                    <div style={{display: "flex", margin: "auto"}}>
                    {props.navItems.map((data) => {
                        return (
                            <button className={classes.navItem}>
                                {data.title}
                            </button>
                        )
                    })}
                    </div>
                    <div className={classes.onboardingDiv}>
                    {props.onboardingItems.map((data) => {
                        return (
                            <button className={classes.baseButton}>
                                {data.title}
                            </button>
                        )
                    })}
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export function Footer({props}) {
    const classes = useStyles()
    const [firstLogo, secondLogo] = props.logoText.split(' ');

    return (
        <Grid container className={classes.navBar}>
            <Grid item xs={12}>
                <div style={{textAlign: "center"}}>
                        <h1 className={classes.logoTag}>
                            <span className={classes.logoMain}>
                                {firstLogo}
                            </span>
                            <span className={classes.logoSpan}>
                                {secondLogo}
                            </span>
                        </h1>
                    </div>
            </Grid> 
            <Grid item xs={12} style={{fontSize: "12px", color: "white", fontWeight: "600", textAlign: "center"}}>
                © Copyright • DevSentient Inc. • <a href="/privacy-policy" style={{color: "inherit"}}>Privacy Policy</a>
            </Grid>
        </Grid>
    )
}
