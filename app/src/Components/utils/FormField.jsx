import React from "react"
import { MenuItem, Grid, TextField} from "@mui/material";

import {makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
    input: {
        background: "rgba(255,255,255, 0.3)",
        opacity: "1",
        borderRadius: "2px",
        border: "1px solid white",
        color: theme.palette.primary.main,
          "&:focus .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.primaryGold
          },
    }
}))

export const FormField = props => {
    const classes = useStyles()
    // reuseable form component
    return (
        <Grid item >
            <TextField
                fullWidth
                className={classes.input}
                hiddenLabel={props.hiddenLabel}
                placeholder={props.placeholder}
                label={props.label}
                type={props.type}
                name={props.name}
                select={props.select}
                data={props.data}
                sm={props.sm}
                inputLabel={props.inputLabel}
                multiline={props.multiline}
                variant={props.variant}
                rows={props.rows}
                InputLabelProps={{shrink: true,  style: { color: '#ffffff', fontWeight: "600", fontSize: "12px" },}}
                // value={props.value[props.name]}
                // onChange={props.handleChanges}
            >
                {props.data.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
         </Grid>
        
    )}
    ;