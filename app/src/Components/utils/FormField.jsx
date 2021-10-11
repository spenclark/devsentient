import React from "react"
import {Grid, MenuItem, TextField} from "@material-ui/core";

export const TextFormField = props => {
    // reuseable form component
    return (
        <Grid item xs={props.xs} sm={props.sm}>
            <TextField
                fullWidth
                hiddenLabel={props.hiddenLabel}
                select={props.select}
                multiline={props.multiline}
                rows={props.rows}
                variant={props.variant}
                label={props.label}
                type={props.type}
                name={props.name}
                placeholder={props.label}
                InputLabelProps={props.inputLabel}
                value={props.value[props.name]}
                onChange={props.handleChanges}
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