import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from '@material-ui/core';
import React from 'react';
import {useController, UseControllerProps} from "react-hook-form";

interface Props extends UseControllerProps{
    label:string;
    items:string[];
}

const AppSelectList = (props:Props) => {
    const {fieldState,field} = useController({...props,defaultValue:''})
    return (
        <div>
            <FormControl fullWidth error={!!fieldState.error}>
                <InputLabel>{props.label}</InputLabel>
                <Select

                    value={field.value}
                    label={props.label}
                    onChange={field.onChange}
                >
                    {props.items.map((item,index)=>(
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
        </div>
    );
};

export default AppSelectList;
