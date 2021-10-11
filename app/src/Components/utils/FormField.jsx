import React from "react"
import { MenuItem, Grid, TextField} from "@mui/material";

export const FormField = props => {
    // reuseable form component
    return (
        <Grid item >
            <TextField
                fullWidth
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
                InputLabelProps={{shrink: true}}
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