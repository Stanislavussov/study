import React from "react"
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addEvent } from './features/tracker/trackerSlice'

const Avatar = ({avatar}) => <img style={{width: "50px", height: "50px"}} alt={avatar.alt} src={avatar.src}/>

const HelloCom = ({user, isAuth, avatar}) => {
  const navigate = useNavigate()
  const events = useSelector(state => state.tracker.events)
  const dispatch = useDispatch()
  console.log(events)
  return (
    <>
      {isAuth && avatar && !avatar.isExpired && <Avatar avatar={avatar}/>}
      {isAuth ? <>
        <div>Greeting! {`${user.firstName} ${user.lastName}`}</div>
        <div>Welcome to our site!</div>
      </> : null
      }
      <nav>
        <button
          onClick={() => {
            navigate('/my-page')
            dispatch(addEvent({type: "Click", name: "To my page"}))
          }}>
          My page
        </button>
        <button onClick={() => {
          navigate('/settings')
          dispatch(addEvent({type: "Click", name: "To settings"}))
        }}>
          Settings
        </button>
        <button onClick={() => {
          navigate('/sign-out')
          dispatch(addEvent({type: "Click", name: "To exit"}))
        }}>
          Exit
        </button>
      </nav>
    </>
  )
}
export default HelloCom