import React, { useState } from "react";
import { expensesList as expensesListData } from "./components/Utils/utils";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css"
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = () => {
  const [expenses, setExpenses] = useState(expensesListData);
  const addExpenseHandler = expense => {
    if (expense) {
      expense.date = new Date(expense.date);
      setExpenses((prev) => [expense, ...prev]);
    }
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <Expenses expenseData={expenses} />
      </Card>
    </>
  )
}

export default App;
