import React, { useReducer } from "react"

const initialState = 0;

function reducer(state, action){
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        default:
            return state
    }

}
const MyUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch("Increment")}>Increment</button>
            <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        </>
    )
}

export default MyUseReducer;