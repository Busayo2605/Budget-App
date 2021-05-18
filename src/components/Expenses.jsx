import React, { useContext, useState } from "react";
import { AppContext } from "../context/BudgetContext";

const Expenses = () => {
  const { expenses, addexpenses,removeTransaction} = useContext(AppContext);

  const [expense, setexpense] = useState({
    Amount: "",
    ExpensesText: "",
  });

  const handleChangeExpense = (e) => {
    e.preventDefault();
    setexpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (expense.ExpensesText === "" || expense.Amount === "") {
      alert("Use the field");
    } else {
      const item = {
        id: (expense.ExpensesText.length * expense.Amount) / 15,
        ExpensesText: expense.ExpensesText,
        Amount: expense.Amount * 1,
      };
      addexpenses(item);
    }

    setexpense({
      Amount: "",
      ExpensesText: "",
    });
  };
  return (
    <div className="expense-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="ExpensesText"
          value={expense.ExpensesText}
          placeholder="Add Expenses"
          onChange={handleChangeExpense}
        />
        <input
          type="number"
          placeholder="Amount"
          name="Amount"
          value={expense.Amount}
          onChange={handleChangeExpense}
        />
        <button onClick={handleSubmit} className="Submit">
          Submit
        </button>
      </form>
      <h4>Transaction History</h4>
      <ul>
        {expenses.map((item) => (
          <li key={item.id}>
            <span className="transtion-info">
              <p>{item.ExpensesText}</p>
              <p>{item.Amount}</p>
            </span>
            <button onClick={()=>removeTransaction(item.id)} className="trash">
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
