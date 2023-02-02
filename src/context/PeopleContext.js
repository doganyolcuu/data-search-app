import { createContext, useReducer } from "react";
import React from 'react'
import mockData from '../data/mockData.json'
import { PeopleReducer } from "./PeopleReducer";

export const DataContext = createContext();
function PeopleContext({children}) {
    const {data} = mockData;
    
    const initialState = {
        data,
    }

    const [state, dispatch] = useReducer(PeopleReducer);

    return (
        <DataContext.Provider value={[{...state, data},dispatch]}>
            {children}
        </DataContext.Provider>
    )
}

export default PeopleContext