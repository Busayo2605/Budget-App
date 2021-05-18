import React, { useContext } from 'react'
import { AppContext } from '../context/BudgetContext'

const Balance = () => {
    const {expenses, income} = useContext(AppContext)

    const incomeTransaction = income.map(t=>t.IncomeAmount)
    const expenseTransaction = expenses.map(o=>o.Amount)

    const totalIncome = incomeTransaction.reduce((acc, item)=>(acc+=item),0).toFixed(2)
    const totalExpense= expenseTransaction.reduce((acc, item)=>(acc+=item),0).toFixed(2)

    return (
        <div className='balance'>
            <div className='total-balance'>
                <span>Your Balance</span>
                <span>${(totalIncome-totalExpense).toFixed(2)}</span>
            </div>
            <div className='income-expense'>
                <div className='income'>
                    <span>Income</span>
                    <span>+${totalIncome}</span>
                </div>
                <div className='expense'>
                    <span>Expenses</span>
                    <span>-${totalExpense}</span>
                </div>
            </div>
        </div>
    )
}

export default Balance
