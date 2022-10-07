import React from "react";
import { expensesList as expensesListData } from "./components/Utils/utils";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css"
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("Data:", expense);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <Expenses expenseData={expensesListData} />
      </Card>
    </>
  )
}

export default App;
