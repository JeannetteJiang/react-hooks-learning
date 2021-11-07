import React from "react"

interface Props {
    name: string;
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


// interface Item {
//     name: string;
//     someNumber?: number;
// }


const initialState = {
    height: 0,
    text: 123123
}

type ActionTypes = {
        type: 'jump';
        payload: typeof initialState;
    } 
    | 
    {
        type: 'land';
        payload: typeof initialState;
    }

const reducer = (state: typeof initialState, action: ActionTypes) => {
    switch(action.type) {
        case 'jump':
            return { height: state.height + action.payload.height, text: 123}
        case 'land':
            return {height: 0, text: 123123}
        default: 
            throw new Error();
    }
}

export const MyComponent = ({name, text}: Props): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    console.log(state)
    // state.]
    dispatch({
        type: 'jump',
        payload: {
            height: 1,
            text: 1
        }
    })
    // const [item, setItem] = React.useState<Item | null>(null);

 
    const handleClick = (event: React.SyntheticEvent) => {
        
    }


    
    const handleChangeInput: React.ChangeEventHandler<HTMLInputElement>  = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.
    }
    return (<div>
        {name} - {text}
        <button
            onClick={handleClick}>
            onClick
        </button>
        <input onChange={handleChangeInput} />
    </div>)
}

MyComponent.defaultProps = {
    text: 'defalut text'
}