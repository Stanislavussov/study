import './App.css'
import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEvent, eventSelector, firstEventSelector } from './features/tracker/trackerSlice'

function App() {
  const eventList = useSelector(eventSelector)
  const event = useSelector(firstEventSelector)
  const dispatch = useDispatch()
  const [eventName, setEventName] = useState('')
  console.log(event)
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="event name" onChange={e => setEventName(e.target.value)}/>
        <button onClick={() => dispatch(addEvent({name: eventName}))}>add</button>
        {eventList.map(event => {
          return <div>{event.name}</div>
        })}
      </header>
    </div>
  )
}

export default App
