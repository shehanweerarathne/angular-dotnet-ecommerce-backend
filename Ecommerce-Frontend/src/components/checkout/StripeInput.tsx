import React, {forwardRef, Ref, useImperativeHandle, useRef} from 'react';
import {InputBaseComponentProps} from "@material-ui/core";

interface Props extends InputBaseComponentProps {}

export const StripeInput = forwardRef(function StripeInput({component: Component, ...props}: Props, ref: Ref<unknown>){
    const elementRef = useRef<any>();

    useImperativeHandle(ref, () => ({
        focus: () => elementRef.current.focus
    }));
    return (
        <Component
            onReady={(element: any) => elementRef.current = element}
            {...props}
        />
    );
});


