import React, { useContext, useState } from 'react'
import { AppContext } from '../context/BudgetContext'

const Inome = () => {
    const {income, addincome, removeTransaction} = useContext(AppContext)
    const [Income, setIncome] = useState({
        IncomeText:'',
        IncomeAmount:''
    })

    const handleChange= (e) => {
        setIncome({
            ...Income,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Income.ExpensesText === '' || Income.IncomeAmount=== '') {
            alert('Use the field')
        } else {
            const item = {
                id:Income.IncomeText.length * Income.IncomeAmount,
                IncomeText:Income.IncomeText,
                IncomeAmount:Income.IncomeAmount * 1,
            }
            addincome(item)
        }
        setIncome({
            IncomeText:'',
            IncomeAmount:''
        })
    }

    return (
        <div className='income-container'>
            <form onSubmit={handleSubmit}>
                <input
                 name="IncomeText"
                 value={Income.IncomeText}
                 onChange={handleChange}
                 type='text' placeholder='Add Income'/>

                <input
                 name="IncomeAmount"
                 value={Income.IncomeAmount}
                 onChange={handleChange}
                 type='number' placeholder='Amount'/>
                <button className='Submit'>Submit</button>
            </form>

            <div>
                <h4>Transaction History</h4>
                <ul>
                   {
                       income.map(item=>(
                           <li key={item.id}>
                               <span className='transtion-info'>

                                   <p>{item.IncomeText}</p>
                                   <p>{item.IncomeAmount}</p>
                               </span>
                               <button 
                               onClick={()=>removeTransaction(item.id)}className='trash'><i className='fas fa-trash'></i></button>
                           </li>
                       
                       ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Inome
