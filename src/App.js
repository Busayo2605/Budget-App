import React from 'react'
import Balance from './components/Balance'
import Inome from './components/Inome'
import Expenses from './components/Expenses'
import BudgetProvider from './context/BudgetContext'

const App = () => {
    return (
        <BudgetProvider>
            <div className='container'>
                <div className='app-wrapper'>
                {/* <h3 className='heading'>BUDGET APP</h3> */}
                    <Inome/>
                    <Expenses />
                    <Balance/>
                </div>
            </div>
        </BudgetProvider>
    )
}

export default App
