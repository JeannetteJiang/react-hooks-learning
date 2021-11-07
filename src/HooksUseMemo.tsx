import React, { useCallback, useState, useMemo } from "react";

interface Props {}
interface ReactFunction<T> extends React.FC<T> {
}

const HooksUseMemo: ReactFunction<Props> = (): JSX.Element => {
  const [date, setTime] = useState<Date|number | undefined>();
  const onClick = useCallback(async () => {
    setTime(new Date().getTime())
  }, []);

  const getNameWithoutUserMemo = (str: string) => { 
    console.log('No useMemo, will be triggered multiple times')
    return str;
  }

  const getNameWithUseMemo = useMemo(() => () => {
    console.log('With useMemo, it will not be triggered multiple times.')
    return 'With useMemo, it will not be triggered multiple times.';
  }, [])


  return (
    <div>
      <button onClick={onClick}>onClick</button>
      {getNameWithoutUserMemo('There is no useMemo')}
      {getNameWithUseMemo}
      {date}
    </div>
  );
};


export default HooksUseMemo;
