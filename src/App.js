import ExpensesItem from "./components/ExpensesItem";
const expenses = [
  { id: "e1", title: "Car Insurance", amount: 94.12, date: new Date(2020, 7, 12) },
  { id: "e2", title: "New Desk", amount: 1004.56, date: new Date(2021, 21, 8) },
  { id: "e3", title: "TV", amount: 991.15, date: new Date(2019, 5, 10) },
  { id: "e4", title: "Toilet paper", amount: 14.12, date: new Date(2021, 8, 2) },
  { id: "e5", title: "Bike", amount: 450, date: new Date(20202, 17, 11) },
]

function App() {
  return (
    <div>
      <h1>Let's get started</h1>
      <ExpensesItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date} />
      <ExpensesItem title={expenses[1].title} price={expenses[1].amount} date={expenses[1].date} />
      <ExpensesItem title={expenses[3].title} price={expenses[3].amount} date={expenses[2].date} />
      <ExpensesItem title={expenses[2].title} price={expenses[2].amount} date={expenses[3].date} />
    </div>
  )
}

export default App;
