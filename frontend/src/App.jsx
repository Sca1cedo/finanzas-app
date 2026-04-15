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

import { useState } from 'react'
import { signUp, signIn } from './auth'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignUp() {
    const { error } = await signUp(email, password)
    if (error) return alert(error.message)
    alert('Usuario registrado')
  }

  async function handleSignIn() {
    const { error } = await signIn(email, password)
    if (error) return alert(error.message)
    alert('Sesión iniciada')
  }

  return (
    <div>
      <h1>Autenticación</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignUp}>Registrarse</button>
      <button onClick={handleSignIn}>Iniciar sesión</button>
    </div>
  )
}

export default App