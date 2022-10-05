import React from "react";
import { expensesList as expenses } from "./components/utils";
import Expenses from "./components/Expenses";
import Card from "./components/Card";
import "./components/Expenses.css"

const App = () => {
  return (
    <Card className="expenses">
      <Expenses expenseData={expenses} />
    </Card>
  )
}

export default App;
