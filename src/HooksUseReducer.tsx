import React, { useReducer } from "react";

enum EAction {
  "IncrementAction" = "IncrementAction",
  "ToggleShowText" = "ToggleShowText",
}

interface StateType {
  count: number;
  showText: boolean;
}

const initState: StateType = {
  count: 0,
  showText: true,
};

type ActionTypes = {
  type: EAction;
  payload?: StateType;
};

interface ActionAbstraction {
  action: (state: StateType, action: ActionTypes) => StateType;
}

class IncrementAction implements ActionAbstraction {
  action(state: StateType, _: ActionTypes) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
}

class ToggleShowText implements ActionAbstraction {
  action(state: StateType, action: ActionTypes) {
    return {
      ...state,
      showText: !state.showText,
    };
  }
}

const actions: {
  [key: string]: ActionAbstraction;
} = {
  [EAction.IncrementAction]: new IncrementAction(),
  [EAction.ToggleShowText]: new ToggleShowText(),
};

const getReducer = (state: StateType, action: ActionTypes) => {
  return actions[action.type].action(state, action);
};
interface Props {}
const HooksUseReducer: React.FC<Props> = (): JSX.Element => {
  const [state, dispatch] = useReducer(getReducer, initState);
  const handleClick = () => {
    dispatch({ type: EAction.IncrementAction });
    dispatch({ type: EAction.ToggleShowText });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Click Here</button>
      {state.showText && <p> Show text </p>}
    </div>
  );
};

export default HooksUseReducer;
