import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactions()
  }, [])

  async function getTransactions() {
    const { data } = await supabase
      .from('transactions')
      .select('*')

    setTransactions(data)
  }

  return (
    <div>
      <h1>Transacciones</h1>

      {transactions.map((t) => (
        <div key={t.id}>
          {t.tipo} - {t.monto}
        </div>
      ))}
    </div>
  )
}

export default App