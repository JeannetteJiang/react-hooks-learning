import React, { ChangeEvent, useContext } from 'react';
import { GlobalContext } from './HooksUseContext'

const Login = ():JSX.Element => {
    const appContext = useContext(GlobalContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        appContext?.handleChangeUserName(e.target.value)
    }

    return (
        <>
            <input type="text" onChange={handleChange}/>
        </>
    )
}

export default Login