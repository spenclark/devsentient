import React from "react"
import DemoForm from "./utils/DemoForm"
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles(theme => ({
    background: {
        background: theme.palette.primary.main,
        width: "100%",
        height: "100vh",
    } ,
    root: {
        maxWidth: "1000px",
        padding: "3% 0",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            width: "80%",
            flexDirection: "column",
            justifyContent: "flex-start",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        }
    },
    textDiv: {
        [theme.breakpoints.up("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
    },
    textParent: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
    },
    title: {
        lineHeight: "1.2",
        color: theme.palette.primary.primaryWhite,
        fontSize: "34px",
        fontWeight: "600",
    },
    brTitle: {
        [theme.breakpoints.down("lg")]: {
            display: "none"
        },
    },
    subTitle: {
        lineHeight: "1.3",
        color: theme.palette.primary.secondaryWhite,
        fontSize: "18px",
        margin: "8px 0"
        },
    formDiv: {
        [theme.breakpoints.up("md")]: {
            width: "350px",
        },
        [theme.breakpoints.down("md")]: {
            width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
    },
    contentDiv: {

    },
}))

export default function Hero({props}) {
    const classes = useStyles()
    const [title, titleBr] = props.title.split('~');
    const [subTitle, subTitleBr] = props.subTitle.split("~")
    const [hook, questions, contact] = props.heroContent.pricingBenifit.split("~")

    return (
        <div className={classes.background}>
            <div className={classes.root}>
                <div className={classes.textDiv}>
                    <div className={classes.textParent} >
                        <h1 className={classes.title}>
                            {title}
                            <br className={classes.brTitle}/> {" "}
                            
                            {titleBr}
                        </h1>
                        <p className={classes.subTitle}>
                            {subTitle}
                            <br className={classes.brTitle}/> {" "}
                            {subTitleBr}
                        </p>    
                    </div>
                    <div className={classes.formDiv}>
                        {/* I made form conditional, the single line email input and the /request-demo form are the same component, defined by this boolean prop */}
                        <DemoForm type={true}/>
                    </div>
                </div>
                <div className={classes.contentDiv}>
                    <div>
                        <div>
                        <h3>{props.heroContent.label}</h3>
                        <p>
                            <span>{hook}</span>
                            <br />
                            {questions} <a href="/request-demo">{contact}</a>

                        </p>
                        </div>
                        <div>
                        <iframe maxWidth="560" height="auto" src={props.heroContent.embedLink} title="Grabbed from yt" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





