import { useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

function App() {
  const [username, setUsername] = useState('Ash')

  return (
    <div>
      <Header username={username} />
      <Main username={username}/>
    </div>
  )
}

export default App
