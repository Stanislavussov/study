import './App.css'
import React from "react"
import HelloCom from './Hello'

const mockHello = (() => ({
  avatar: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amateur-made_Na%27vi.jpg/1200px-Amateur-made_Na%27vi.jpg",
    alt: "avatar avatar",
    isExpired: false
  },
  user: {firstName: "Mike", lastName: "Jonson"},
  isAuth: true
}))()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloCom {...mockHello}/>
      </header>
    </div>
  )
}

export default App
