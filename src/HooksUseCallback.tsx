import React, {  useCallback, useState } from "react";
import China from './Child'

interface Props {}
interface ReactFunction<T> extends React.FC<T> {
}

const HooksUseCallback: ReactFunction<Props> = (): JSX.Element => {
  const [date, setTime] = useState<Date|number | undefined>();
  const onClick = useCallback(async () => {
    setTime(new Date().getTime())
  }, []);

  const onClickWithoutUseCallback = () => {
    console.log('No useCallback, will be triggered multiple times')
    return 'No useCallback, will be triggered multiple times'
  }


  const onClickWithUseCallback = useCallback(() => {
    console.log('With useCallback, it will not be triggered multiple times.')
    return 'With useCallback, it will not be triggered multiple times.'
  }, [])


  return (
    <div>
      <button onClick={onClick}>change time</button>
      <China  fatherFunctions={onClickWithoutUseCallback} type={'1'}>on click without `useCallback` </China>
        <br />
      <China fatherFunctions={onClickWithUseCallback} type={'2'}>on click with `useCallback`</China>
      {date}
    </div>
  );
};


export default HooksUseCallback;
