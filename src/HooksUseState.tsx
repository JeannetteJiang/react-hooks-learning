import React, { ReactEventHandler } from "react";

interface Props {}
const HooksUseState: React.FC<Props> = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleIncrement: ReactEventHandler<HTMLButtonElement> = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <input onChange={handleInputChange} /> {inputValue}
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default HooksUseState;
