import React from "react"
import { MenuItem, Grid, TextField, InputBase, Select} from "@mui/material";

export const FormField = props => {
    // reuseable form component
    return (
        <>
            {props.select === true ? 
            <Select
                fullWidth
                className={props.class}
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
                InputLabelProps={props.inputProps}
                InputProps={{
                    className: props.inputClass,
                }}
                // value={props.value[props.name]}
                // onChange={props.handleChanges}
            >
                {props.data.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
           : 
           <InputBase
            fullWidth
            className={props.class}
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
            InputLabelProps={props.inputProps}
            InputProps={{
                className: props.inputClass,
            }}
           // value={props.value[props.name]}
           // onChange={props.handleChanges}
       >
           {props.data.map(option => (
               <MenuItem key={option.value} value={option.value}>
                   {option.label}
               </MenuItem>
           ))}
       </InputBase>
                    
           }
         </>
        
    )}
    ;