import React, { useReducer } from 'react';
import { initialState } from './Reducer/reducerStore';
import { reducer } from './Reducer/reducerStore';

export const ReducerContext = React.createContext();

export const ReducerContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const {data} = state;
    console.log(state);
    return(
        <ReducerContext.Provider value={{data}}>
            {children}
        </ReducerContext.Provider>
    )
}