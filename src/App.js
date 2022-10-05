import React from "react";
import { expensesList as expensesListData } from "./components/Utils/utils";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css"

const App = () => {
  // JSX
  // return (
  //   React.createElement(Card, { className: "expenses" }, React.createElement(Expenses, { expenseData: expensesListData }))
  // )
  return (
    <Card className="expenses">
      <Expenses expenseData={expensesListData} />
    </Card>
  )
}

export default App;
