export const ADD_EXPENSES = 'ADD_EXPENSES'
export const ADD_INCOME = 'ADD_INCOME'
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'

export const BudgetReducer = (state, action) => {
    switch (action.type) {
        case ADD_EXPENSES:
            return{
                ...state,
                expenses:[ action.payload, ...state.expenses]
            }    
        case ADD_INCOME:
            return{
                ...state,
                income:[ action.payload, ...state.income]
            }
        case REMOVE_TRANSACTION:
            return{
                ...state,
                income:state.income.filter(item => item.id !== action.payload),
                expenses:state.expenses.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}