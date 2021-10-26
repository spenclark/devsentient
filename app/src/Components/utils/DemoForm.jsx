// This is the component that takes an email adress and other qualifying information - and in theory adds it to a crm (but wont here)
// to reduce bouce rates if button value length is "" redirect to /request-demo rather than calling submit action
// this is also the only contributed point of failure in this app we will be testing it and I made this more complex than neccissary but this would actually be a good implementation! Conditional render keeps data flow on back end clean.
import React, {useState, useEffect} from "react"
import {FormField} from "./FormField"
import Grid from "@mui/material/Grid"
import {makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
    button: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.primaryGold} , ${theme.palette.primary.secondaryGold})`,
        color: theme.palette.primary.main, 
        fontSize: "14px",
        fontWeight: "600",
        width: "100%",
        border: "none",
        borderRadius: "2px",
        marginTop: "8px",
        height: "7vh",
        "&:hover": {
            opacity: ".9",
            transitionDelay: "80ms"
        }
    },
    shortRoot: {
        background: "#7A5A7B",
        borderRadius: "2px",
        height: "7vh",
        border: "1px solid #bfbfbf",
    },
    shortInput: {
       
    },
    grid: {
        padding: "8px",
    }
}))
const formValuesLong = [
    {
        placeholder: "Full Name",
        hiddenLabel: true,
        type: "text",
        name: "name",
        multiline: false,
        sm: 12,
        md: 12,
        data: [],
    },
    {
        placeholder: "Email Address",
        hiddenLabel: true,
        type: "text",
        sm: 12,
        md: 12,
        data: [],
    },
    {
        placeholder: "Company Name",
        hiddenLabel: true,
         type: "text",
         sm: 12,
         md: 12,
        data: [],
    },
    {

        label: "What best describes your organization?",
        select: true,
        variant: "filled",
        sm: 6,
        md: 6,
        data: [
            {
                value: "We are just getting started with AI",
                label: "We are just getting started with AI"
            },
            {
                value: "We use AI but need help with usage and/or development",
                label: "We use AI but need help with usage and/or development",
            },
            {
                value: "We have AI products with high usage",
                label: "We have AI products with high usage",
            },
        ],
    },
    {
        name: "phone_number",
        placeholder: "Phone Number",
        sm: 6,
        md: 6,
        type: "text",
        data: [],
    },
    {
        label: "How did you hear about us?",
        sm: 12,
        md: 12,
        value: "",
        name: "contact_moment",
        multiline: false,
        select: true,
        variant: "filled",

        data: [

                {
                    value: "Social Media",
                    label: "Social Media",
                },
                {
                    value: "Referral",
                    label: "Referral",
                },
                {
                    value: "Conference or Event",
                    label: "Conference or Event",
                },
                {
                    value: "Advertisement",
                    label: "Advertisement",
                },
                {
                    value: "Other",
                    label: "Other",
                },

        ],
        
    },

]

const formValuesShort = [
    {
        label: "Email Address",
        placeholder: "What’s your email?",
        variant: "filled",
        type: "email",
        sm: 12,
        data: [],
        inputProps: {
            shrink: true,  style: { color: 'white', fontWeight: "600", fontSize: "12px" },
        },
    },
]

export default function DemoForm({type}) {
    const classes = useStyles()
    const [formType, setFormType] = useState([])

    const handleRender = (type) => {
        if(type === true) {
            setFormType([...formValuesShort])
            
        } else {
            setFormType([...formValuesLong])
        }
    }

    useEffect(() => {
        handleRender(type)
    }, [type])

    return (
        <Grid container item xs={11} sm={8} md={5} style={{margin: "auto"}} >
            <Grid container item xs={12} >
            {formType.map(data => {
                    return(
                        <Grid item xs={data.sm} md={data.md} className={classes.grid}>
                            <FormField 
                                hiddenLabel={data.hiddenLabel}
                                label={data.label}
                                type={data.type}
                                name={data.name}
                                select={data.select}
                                data={data.data}
                                sm={data.sm}
                                md={data.md}
                                placeholder={data.placeholder}
                                multiline={data.multiline}
                                variant={data.variant}
                                rows={data.rows}
                                inputProps={data.inputProps}
                                disableUnderline={true}
                                class={classes.shortRoot}
                                inputClass={classes.shortInput}
                                // value={props.value[props.name]}
                                // onChange={props.handleChanges}
                            />
                        </Grid>
                        )
                })}
                </Grid>
                <Grid item xs={12} > 
                    <button className={classes.button}>
                        {type === false ? `Schedule Demo` : `See DevSentient`}
                    </button>
                </Grid>
        </Grid>
       
    )
}
