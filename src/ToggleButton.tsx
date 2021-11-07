import React, { forwardRef, useState, useImperativeHandle } from 'react';

interface extendsRef {
    handleChange?: () => void;
}

interface Props {}

export type Ref = HTMLButtonElement & extendsRef;
const ToggleButton = (_: Props, ref: any): JSX.Element => {
    const [toggle, setToggle] = useState<boolean>(false);
   
    const handleChange = () => {
        setToggle(!toggle)
    }

    useImperativeHandle(ref, () => ({
        handleChange
    }));

    return (
        <div>
            state1: {toggle && <>ahh</>}
        </div>
    ) 
}



export default forwardRef(ToggleButton);