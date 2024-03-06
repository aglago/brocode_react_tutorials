import { useState } from "react"


export default function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleSetColor(event) {
        setColor(event.target.value)
    }

    return (
        <div className="color_picker_container">
            <h1>Color Picker</h1>

            <div className="color_container" style={{backgroundColor: color}}>
                Selected Color: {color}
            </div>

            <input type="color" value={color} onChange={handleSetColor}/>
        </div>
    )
}