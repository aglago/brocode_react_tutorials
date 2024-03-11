import ComponentB from "./componentB";
import { createContext, useState } from "react";

export const UserContext = createContext();



export default function ComponentA() {

    const [user, setUser] = useState("Samuella");

    function handleSetUser() {
        setUser("Woman Dev");
    }

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2 onClick={handleSetUser}>Hello, {user}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    )
}