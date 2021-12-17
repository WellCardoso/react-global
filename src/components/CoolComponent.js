import React, {useContext} from 'react';
import { Context } from "./Store";

const CoolComponent = () => {
    const [state, setState ] = useContext(Context);

    const handleClick = async () => {
        const person = await (await fetch('http://uinames.com/api/?ext')).json();
        console.log(person)
    }

    return (
        <>
            <h2>I'm a cool component</h2>
            <p>Name: {state.name}</p>
            <p>Name: {state.email}</p>
            <button onClick={handleClick}>Click Me</button>
        </>

    )
}

export default CoolComponent;