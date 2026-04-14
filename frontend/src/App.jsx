import { useEffect } from 'react'
import { supabase } from './lib/supabase'

function App() {

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')

    console.log(data, error)
  }

  return <h1>Finanzas App</h1>
}

export default App