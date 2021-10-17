 import React, {useState} from "react"
 import {makeStyles} from "@mui/styles"
import { Grid } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 const useStyles = makeStyles(theme => ({
     root: {

     },
     whoItem: {
        padding: "15px",
        margin: "0 10px",
        color: theme.palette.primary.main,
        [theme.breakpoints.down("md")]:{
            height: "auto",
        },
     },
     caroBox: {
        background: "#f6f3f0",
        borderRadius: "3px",
        padding: "12px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "space-between",
        flexDirection: "column",
        [theme.breakpoints.down("md")]:{
            height: "auto",
            flexDirection: "column-reverse",
        },
     },
     endorseDiv: { 
       fontSize: "16px",
       height: "150px",
       padding: "10px 3px",
       [theme.breakpoints.down("md")]:{
        height: "auto",
        
       },
     },
     whoDiv: {
        fontSize: "12px",
    
        margin: "8px 0",
        [theme.breakpoints.down("md")]:{
            paddingBottom: "12px",
            borderBottom: "1px solid #d6d6d6",
           },

     },
     mainBox: {
        [theme.breakpoints.up("md")]:{

            borderBottom: "1px solid #d6d6d6",
           },

     }
     
 }))

export default function Carousel({props}) {
    const dataArr = [
        ...props.data
    ]
    
    const [showcase, setShowcase] = useState(0)
    const length = dataArr.length

    const handleForward = () => {
        setShowcase(showcase === length - 1 ? 0 : showcase + 1)
    }

    const handleBack = () => {
        setShowcase(showcase === 0 ? 0 : showcase - 1)
    }

    const classes = useStyles()

    return (
        <>
        <p style={{ width: "100%",
        textAlign: "center",
        color: "#343434",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "1.2",
        padding: "40px"
        }}>
        {props.title}
        </p>
        <Grid container xs={11} sm={10}  className={classes.caroBox}>  
                        <Grid item container xs={12} sm={12} md={12}>
                                <Grid item xs={12}>
                            {props.icon}
                            </Grid>
                        <Grid
                                    container item
                                    className={classes.mainBox}
                                    xs={12} sm={12} md={9}
                                    >
                                     
                            {dataArr.map((data, i) => {
                                return (
                                <>
                                            {i === showcase && (
                                                <>
                                                    <Grid item  className={classes.endorseDiv}>
                                                        {data.endorsement}
                                                    </Grid>
                                                </> 
                                            )}
                                    </>
                                )
                            })}
                        </Grid>
                        <Grid container item xs={12} sm={12} md={3} className={classes.whoDiv}>
                            {dataArr.map((data, i) => {
                                        return (
                                            <>
                                            {i === showcase && (
                                                <>
                                                    <Grid item  sm={4} md={12} xs={12} className={classes.whoItem}>
                                                    <p style={{fontWeight: "600"}}>Name</p>
                                                    {data.name}
                                                    </Grid>
                                                    <Grid item  sm={4} md={12} xs={12} className={classes.whoItem}>
                                                    <p style={{fontWeight: "600"}}>Employees</p>
                                                    {data.employee_count}
                                                    </Grid>
                                                    <Grid item  sm={4} md={12} xs={12} className={classes.whoItem}> 
                                                    <p style={{fontWeight: "600"}}>Company</p>
                                                    {data.company}
                                                    </Grid>
                                                    </>
                                            )}
                                            </>
                                        )})}
                        </Grid>
                        </Grid>
                        <Grid item item xs={12} sm={12} md={9} style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "65px"}}>
                                <div style={{fontSize: "12px", fontWeight: "600",}}>
                                    {showcase + 1} / {dataArr.length}
                                </div>
                                <div style={{display: "flex", flexDirection: "row"}}> 
                                    <button onClick={() => handleBack()} style={{background: "white", color: "#3E0E40", padding: "8px", marginRight: "10px", border: "none", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <ArrowBackIcon style={{ fontSize: 18 }}  />
                                    </button>
                                    <button onClick={() => handleForward()}  style={{background: "white", color: "#3E0E40", padding: "8px", border: "none", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <ArrowForwardIcon style={{ fontSize: 18 }} />
                                    </button>
                                </div>
                            </Grid>                                      
                    </Grid> 
        </>
    )
}