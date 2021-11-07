import React, { useRef } from 'react';
import ToggleButton, { Ref } from './ToggleButton';
import { Button, EButtonType } from './Button';

interface Props {}

interface ReactFunction<T> extends React.FC<T> {

}
const HooksUseImperativeHandle:ReactFunction<Props> = (): JSX.Element => {
    const buttonRef = useRef<Ref>();
    return (
        <div>
          <Button type={EButtonType.primary} onClick={() => { 
              if (buttonRef?.current?.handleChange) {
                buttonRef?.current?.handleChange()
              }
          }}>Change</Button>
            <br />
           <ToggleButton ref={buttonRef}/>
        </div>
    )
}

export default HooksUseImperativeHandle;