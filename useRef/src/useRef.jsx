import { useEffect } from "react";
import { useRef } from "react"


export default function UseRef() {

    let ref = useRef(0); // returns an object

    useEffect(() => {
        console.log("I re-rendered");
    })

    function handleRefIncrease() {
        ref.current++;
        console.log(ref.current);
    }

    return (
        <>
            <button onClick={handleRefIncrease}>Click Me</button>
        </>
    )
}