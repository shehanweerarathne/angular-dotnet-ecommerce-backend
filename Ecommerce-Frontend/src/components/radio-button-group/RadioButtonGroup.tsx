import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

interface Props{
    options: any[];
    onChange: (event:any) => void;
    selectedValue: string;
}

const RadioButtonGroup = ({options,onChange,selectedValue}:Props) => {
    return (
        <FormControl>
            <RadioGroup  onChange={onChange} value={selectedValue}>
                {options.map(({value,lable})=>(
                    <FormControlLabel key={value} value={value} control={<Radio />} label={lable} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioButtonGroup;
