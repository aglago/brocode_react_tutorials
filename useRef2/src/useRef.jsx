import { useEffect } from "react";
import { useRef } from "react"


export default function UseRef() {

    let inputRef = useRef(0); // returns an object

    useEffect(() => {
        console.log("I re-rendered");
    })

    function handleInputRef() {
        const htmlInput = inputRef.current;
        htmlInput.focus();
        htmlInput.style.backgroundColor = "yellow"
    }

    return (
        <>
            <button onClick={handleInputRef}>Click Me</button>
            <input type="text" ref={inputRef} />
        </>
    )
}