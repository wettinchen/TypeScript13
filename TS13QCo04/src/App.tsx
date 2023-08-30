import { useState } from 'react'

interface User {
  id: number
  username: string
}

function App() {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)
  // useState Example
  // const [count, setCount] = useState<number | null>(null)
  // const [count, setCount] = useState<User | null>(null)
  // const [count, setCount] = useState<User[] | null>(null)
  // const [count, setCount] = useState<User[]>([])

  return (
    <div className='App'>
        
    </div>
  )
}

export default App
