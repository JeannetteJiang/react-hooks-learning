import React, { useEffect , useLayoutEffect, useRef } from 'react';

interface Props {}

interface ReactFunction<T> extends React.FC<T> {

}
const HooksUseLayoutEffect:ReactFunction<Props> = (): JSX.Element => {
    // const [state, setstate] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        console.log(inputRef?.current?.value)
    }, [])

    useEffect(() => {
        if (inputRef?.current?.value) {
            inputRef.current.value = "useEffect";
        }
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} value="defalut" />
        </div>
    )
}

export default HooksUseLayoutEffect