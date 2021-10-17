import React, {useState} from "react"
import DemoForm from "./utils/DemoForm"
import {makeStyles} from "@mui/styles"
import { Grid } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
    background: {
        background: theme.palette.primary.main,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        // height: "70%",
    } ,
    root: {
        width: "80%",
        height: "85vh",
   
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.up("md")]: {
            justifyContent: "space-evenly",
            padding: "30px 0",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
            flexDirection: "column",
            justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            height: "auto",
        }
    },
    textDiv: {
        [theme.breakpoints.up("md")]: {
            width: "48%",
            margin: "20px"

        },
        [theme.breakpoints.down("md")]: {
            // width: "80%",
            margin: "auto",
            marginBottom: "35px"
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
        margin: "12px 0"
        },
    formDiv: {
        [theme.breakpoints.up("md")]: {
            width: "280px",
        },
        [theme.breakpoints.down("md")]: {
            width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
    },
    contentDiv: {
        background: theme.palette.primary.secondary,
        borderRadius: "4px",
        padding: "10px",
        maxHeight: "400px",
        [theme.breakpoints.up("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("md")]: {
            margin: "auto",

            width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
    },
    labelBox: {
        display: "flex",
        marginBottom: "10px",
        marginTop: "10px",   
        width: "80%"
    },
    contentLabel: {
        color: theme.palette.primary.secondaryWhite,
        fontSize: "18px",
        display: "flex",
        justifyContent: "center",
    },
    contentAdd: {
        lineHeight: "1.2", 
        fontSize: "12px",
        color: "#9F0C64",
        display: "flex",
        justifyContent: "center",
    },
    img: { 
        margin: "auto",
        width: "100%",
        height: "300px",
    },
    transitDiv: {
        color: theme.palette.primary.bold,
        width: '100%',
        display: "flex",
        margin: "auto",
        justifyContent: "flex-end",
        flexDirection: "column",
        alignItems: "center",
        "&:hover": {
            transitionDelay: "60ms",
            color: "#c7107d",
            
        }
    },
    toggleDiv: {
        display: "flex", justifyContent: "center", margin: "auto", flexDirection: "column"
    },
    hiddenDiv: {
        display: "none"
    }
}))

export default function Hero({props}) {
    const classes = useStyles()
    const [hidden, setHidden] = useState(true)
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
                   {hidden ? <p onClick={() => setHidden(!hidden)} style={{color: "white", width: "50%", fontSize: "12px"}}>Click to toggle content</p> :  <div className={classes.contentDiv}> <div onClick={() => setHidden(!hidden)} className={classes.toggleDiv}>
                        <Grid container xs={12}className={classes.labelBox}>
                            <Grid item sm={12 } md={5} className={classes.contentLabel}>
                                <h3>{props.heroContent.label}</h3>
                            </Grid>
                            <Grid item sm={12} md={7} className={classes.contentAdd}>
                                <p>
                                    <span style={{fontWeight: "600"}} >{hook}</span>
                                    <br />
                                    {questions} <a href="/request-demo" style={{color: "#9F0C64"}} >
                                        {contact}
                                    </a>
                                </p>
                            </Grid>
                        </Grid>
                         <div style={{width: "90%", margin: "auto", display: "flex"}}>
                            <iframe className={classes.img} src={props.heroContent.embedLink} title="Grabbed from yt" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    </div>
                   }
                   
                
            </div>
              {/* Link to hyperlane */}
              <div className={classes.transitDiv}>
                    <div>
                        <a style={{fontWeight: "600", fontSize: "12px", textDecoration: "none", color: "inherit"}} href="#features">
                            Introducing Hyperlane
                        </a>
                    </div>
                    <div>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
        </div>
    
    )
}





