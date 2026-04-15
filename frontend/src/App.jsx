import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import { signIn, signUp } from './auth'

function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getUser()
  }, [])
  useEffect(() => {
  if (user) {
    getTransactions()
  }
}, [user])

  async function getUser() {
    const { data } = await supabase.auth.getUser()
    setUser(data.user)
  }

  async function handleSignUp() {
    const { error } = await signUp(email, password)
    if (error) return alert(error.message)
    alert('Usuario registrado')
  }

  async function handleSignIn() {
    const { error } = await signIn(email, password)
    if (error) return alert(error.message)
    alert('Sesión iniciada')
    getUser()
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (!user) {
    return (
      <div>
        <h1>Login</h1>

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

  return (
    <div>
      <h1>Bienvenido</h1>
      <p>{user.email}</p>
      <p>ID: {user.id}</p>

      <button onClick={handleLogout}>Cerrar sesión</button>
      <h2>Transacciones</h2>

{transactions.map((t) => (
  <div key={t.id}>
    {t.tipo} - {t.monto}
  </div>
))}
    </div>
  )
}

async function getTransactions() {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', user.id)

  if (error) {
    console.log(error)
  } else {
    setTransactions(data)
  }
}
export default App