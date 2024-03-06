import { useState } from "react"


export default function Cars() {
    const [cars, setCars] = useState([]);

    /* Stateful variables for each input element */
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    function handleSetYear(event) {
        setYear(event.target.value);
    }

    function handleSetMake(event) {
        setMake(event.target.value);
    }

    function handleSetModel(event) {
        setModel(event.target.value);
    }

    function handleAddCar() {
        const newCar = {
            y: year,
            mk: make,
            mdl: model
        }

        setCars([...cars, newCar]);
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => {
            return i !== index
        }))
    }

    return (
        <>
            <h1>List of Cars Objects</h1>

            <ul>
                {
                    cars.map(
                        (car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                            {car.y} {car.mk} {car.mdl}
                        </li>
                    )
                }
            </ul>

            <input type="number" value="2024" onChange={handleSetYear} /><br />
            <input type="text" placeholder="make of car" onChange={handleSetMake} /> <br />
            <input type="text" placeholder="model of car" onChange={handleSetModel} /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </>
    )
}