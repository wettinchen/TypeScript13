import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent } from 'react'

interface User {
  id: number
  username: string
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log("mounting")
    console.log("Users: ", users)

    return () => console.log("unmounting")
  }, [users])

  const addTwo = useCallback((event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), [])

  return (
    <div className='App'>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(prev => prev + 1)}>Add</button> */}
      <button onClick={addTwo}>Add</button>
    </div>
  )
}

export default App
