import { useState } from "react"


export default function ToDoList() {

    const [list, setList] = useState(["Hello"]);

    function handleDeleteList(index) {
        setList(l => l.filter((_, i) => {
            return i !== index
        }))
    }

    function handleAddList() {
        const newTask = document.getElementById("task").value;
        if (newTask.trim() !== "") {
            setList(l => [...l, newTask]);
            document.getElementById("task").value = "";
        }
    }

    return (
        <div className="to_do">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" id="task" placeholder="Enter a task..." />
                <button onClick={handleAddList}>Add</button>

            </div>
            <ul>
                {
                    list.map((todo, index) => {
                        return <li key={index}>
                            <div className="list">
                                <h3>{todo}</h3>
                                <div>
                                    <button
                                        onClick={() => handleDeleteList(index)}
                                        className="delete">Delete
                                    </button>
                                    <button className="move">👇🏽</button>
                                    <button className="move">👆🏽</button>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}