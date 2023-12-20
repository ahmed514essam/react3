import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import InputWrapper from './components/InputWrapper'
import Results from './components/Results'


function App() {
  const [query, setQuery] = useState("")


  function calc(n1 , n2 , res){
    let sum = n1 + n2 ;
    res(sum)
  }
  calc(5 , 6 , function(res){
    console.log(res)
  });

  const updateQuery = useCallback((text) => {
    setQuery(text)
  }, [])



  const printCount = useCallback(() => {
    console.log("count: 5")
  }, [])

  useEffect(() => {
    console.log("App rerendered")
  })

  return (
    <div>
      <InputWrapper updateQuery={updateQuery} />
      <Counter printCount={printCount} />
      <Results query={query} />
      <h1>{
      }</h1>
    </div>
  )
}

export default App
