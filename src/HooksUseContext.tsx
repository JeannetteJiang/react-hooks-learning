import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

interface Props {}

export interface ContextType {
    username: string;
    handleChangeUserName: (username: string) => void;
}

export const GlobalContext = createContext<ContextType | null>(null);

const HooksUseContext = (_: Props): JSX.Element => {
    const [username, setUsername] = useState<string>('');

    const handleChangeUserName = (username: string) => {
        setUsername(username)
    }
    
    const sampleAppContext: ContextType =  {
        username,
        handleChangeUserName
    }

    return (
        <GlobalContext.Provider value={sampleAppContext}>
            <Login />
            <User/>
        </GlobalContext.Provider>
    ) 
}



export default HooksUseContext;