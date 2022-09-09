
import  {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import React from 'react';
import {useController, UseControllerProps} from "react-hook-form";
import {FormControl, FormHelperText, Typography} from "@material-ui/core";
import {UploadFile} from "@mui/icons-material";

interface Props extends UseControllerProps{

}

const AppDropzone = (props:Props) => {
    const {fieldState,field} = useController({...props, defaultValue:null});
    const dzStyles = {
        display:'flex',
        border:'dashed 3px #eee',
        borderColor:'#eee',
        borderRadius:'5px',
        paddingTop:'30px',
        alignItems:'center',
        height:200,
        width:500
    }
    const dzActive = {
        borderColor: 'green'
    }
    // @ts-ignore
    const onDrop = useCallback(acceptedFiles => {
    acceptedFiles[0] = Object.assign(acceptedFiles[0],{preview: URL.createObjectURL(acceptedFiles[0])});
    field.onChange(acceptedFiles[0]);
    }, [field])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <FormControl style={isDragActive ? {...dzStyles,...dzActive}: dzStyles}>
                <input {...getInputProps()}/>
                <UploadFile sx={{fontSize:'100px'}}/>
                Drop Image Here
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
        </div>
    );
};

export default AppDropzone;
