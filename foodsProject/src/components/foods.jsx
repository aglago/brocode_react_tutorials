import { useState } from "react"


export default function Foods() {

    const [foods, setFoods] = useState(["Rice", "Juice", "Biscuits"]);

    function handleAddFood() {

        const newFood = document.getElementById("food").value;
        document.getElementById("food").value = "";
        console.log("the new food is: ", newFood)
        setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <>
            <h1>Foods Available</h1>
            <ul>
                {
                    foods.map((food, index) =>
                        <li
                            key={index}
                            onClick={() => handleRemoveFood(index)}
                        >
                            {food}
                        </li>)
                }
            </ul>
            <input type="text" id="food" placeholder="add food" /><br />
            <button onClick={handleAddFood}>Add</button>
        </>
    )
}