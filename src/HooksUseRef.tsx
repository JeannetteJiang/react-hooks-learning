import React, { MouseEvent, useRef, useCallback } from 'react';

interface Props {}

interface ReactFunction<T> extends React.FC<T> {

}
const HooksUseRef:ReactFunction<Props> = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef2 =  useRef<HTMLInputElement>(null);
    const inputRef3 =  useRef<HTMLInputElement>(null);

    const handleFocus = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            inputRef?.current?.focus();
        },
        [inputRef],
    )

    const handleClear = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            if (inputRef2.current?.value) {
                inputRef2.current.value = ''
            }
        },
        [inputRef2],
    )

    const handleSelect = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            if (inputRef3.current?.select) {
                inputRef3.current.select()
            }
        },
        [inputRef3],
    )



    return (
        <div>
            <h1>HI</h1>
            <input ref={inputRef} type="text" name="input"  placeholder="Pls..."/>
            <button onClick={handleFocus}>on focus</button>
            <br />
            <input ref={inputRef2} type="text" name="input"  placeholder="Pls..."/>
            <button onClick={handleClear}>clear</button>
            <br />
            <input ref={inputRef3} type="text" name="input"  placeholder="Pls..."/>
            <button onClick={handleSelect}>select</button>
        </div>
    )
}

export default HooksUseRef