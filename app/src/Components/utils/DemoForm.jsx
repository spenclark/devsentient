// This is the component that takes an email adress and other qualifying information - and in theory adds it to a crm (but wont here)
// to reduce bouce rates if button value length is "" redirect to /request-demo rather than calling submit action
// this is also the only contributed point of failure in this app we will be testing it and I made this more complex than neccissary but this would actually be a good implementation! Conditional render keeps data flow on back end clean.
import React, {useState, useEffect} from "react"
import {FormField} from "./FormField"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"

const formValuesLong = [
    {
        placeholder: "Full Name",
        hiddenLabel: true,
        type: "text",
        name: "name",
        multiline: false,
        data: [],
    },
    {
        placeholder: "Email Address",
        hiddenLabel: true,
        type: "text",
        data: [],
    },
    {
        placeholder: "Company Name",
        hiddenLabel: true,
         type: "text",
        data: [],
    },
    {

        label: "What best describes your organization?",
        select: true,
        variant: "filled",
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
        type: "text",
        data: [],
    },
    {
        label: "How did you hear about us?",
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
        type: "text",
        data: [],
    },
]

export default function DemoForm(type) {
    const [formType, setFormType] = useState([])

    const handleRender = ({type}) => {
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
        <Grid>
            {formType.map(data => {
                    return(
                        <FormField 
                            hiddenLabel={data.hiddenLabel}
                            label={data.label}
                            type={data.type}
                            name={data.name}
                            select={data.select}
                            data={data.data}
                            sm={data.sm}
                            placeholder={data.placeholder}
                            multiline={data.multiline}
                            variant={data.variant}
                            rows={data.rows}
                            InputLabelProps={true}
                            disableUnderline={true}
                            // value={props.value[props.name]}
                            // onChange={props.handleChanges}
                        />
                        )
                })}
                <Grid> 
                    <Button>
                        {type === true ? `See DevSentient` : `Schedule Demo`}
                    </Button>
                </Grid>
        </Grid>
       
    )
}
