import React, {createContext, useReducer, useEffect} from 'react'
import {BudgetReducer, ADD_EXPENSES,ADD_INCOME, REMOVE_TRANSACTION} from './BudgetReducer'
export const AppContext = createContext()

const initialState = {
    income :localStorage.getItem('income') ? JSON.parse(localStorage.getItem('income')) : [],
    expenses:localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
}

const BudgetProvider = ({children}) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState)

    useEffect(() => {
        localStorage.setItem('income', JSON.stringify(state.income))
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
        
    }, [state.income, state.expenses])

    const addexpenses = (item) => {
        dispatch({
            type:ADD_EXPENSES,
            payload:item
        })
    }
    const addincome = (item) => {
        dispatch({
            type:ADD_INCOME,
            payload:item
        })
    }

    const removeTransaction = (id) => {
        dispatch({
            type:REMOVE_TRANSACTION,
            payload:id
        })
    }
 
    return (
        <AppContext.Provider value={{
            ...state,
            addincome,
            removeTransaction,
            addexpenses,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default BudgetProvider
