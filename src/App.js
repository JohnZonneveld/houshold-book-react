import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeSpendings } from './components/IncomeSpendings'
import { TransactionList} from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance / >
        <IncomeSpendings />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
