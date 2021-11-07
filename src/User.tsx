import React, { useContext } from 'react';
import { GlobalContext } from './HooksUseContext'

const User = ():JSX.Element => {
    const appContext  = useContext(GlobalContext);
    return (
        <>
            <h1>
                User: {appContext?.username}
            </h1>
        </>
    )
}

export default User