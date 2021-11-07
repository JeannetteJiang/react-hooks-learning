import React, { useEffect, useMemo } from "react";

interface Props {
    fatherFunctions: () => string;
    type: string;
}
interface ReactFunction<T> extends React.FC<T> {
}

const Child: ReactFunction<Props> = ({ fatherFunctions, type }: Props): JSX.Element => {

  useEffect(() => {
    console.log()
    console.log(type + 'Re-rendering');
  }, [fatherFunctions, type])

  const data = useMemo(() =>  fatherFunctions() , [fatherFunctions])

  return (
   <div>
       {
        data
       }
   </div>
  );
};


export default Child;
