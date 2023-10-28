import './App.css';
import Transactions from './components/Transactions';
import React , {useEffect, useState} from 'react';
import Newtransaction from './components/addTransaction';
import Search from './components/search';
function App() {
  const [transactions, setTransactions] = useState([])
  const[search,setSearch]=useState('') 
  useEffect(()=> {
    fetch('http://localhost:3000/transactions')
    .then(resp => resp.json())
    .then(transact => setTransactions(transact))
  },[])
  
  function handleFormUpdate(newTransaction){
    //add the form data to the table
    setTransactions(transactions=>[...transactions,newTransaction])
    // post to the server the new data
    fetch('http://localhost:3000/transactions',{
      method:'POST',
      headers:{
        'Content-Type':'Application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res=>res.json())
    .then(newData => console.log(newData))
  }
  const SearchList = transactions.filter((transaction) => {
    return transaction.description.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div>
      <div className='App-header'>
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      <Search setSearch={setSearch} search={search} />
      <Newtransaction onSubmission={handleFormUpdate}/>
      <Transactions transactions={SearchList}/>
    </div>
  )
}

export default App;
