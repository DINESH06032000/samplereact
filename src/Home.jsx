import { createContext, useContext, useState } from "react";
import Fetchdata from "./Fetchdata";

var Username = createContext();

function Home() {

    var [name1, ab] = useState("john");

    return (
        <>
        <p>hello</p>

            <h1>home page</h1>

            <Username.Provider value={name1}>
                <A1 />
            </Username.Provider>
            <Fetchdata/>

        </>
    )
}

export default Home;

function A1() {
       
    return (
        <>
            <A2 />
        </>
    )
}
function A2() {
    return (
        <>

            <A3 />
        </>
    )
}
function A3() {

    var user=useContext(Username);
    return (
        <>
            <p>hello world</p>
            <h1>Name is { user }</h1>
        </>
    )
}