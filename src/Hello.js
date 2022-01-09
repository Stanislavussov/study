import React, {useMemo, memo} from "react"
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addEvent } from './features/tracker/trackerSlice'

const Avatar = ({avatar}) => <img style={{width: "50px", height: "50px"}} alt={avatar.alt} src={avatar.src}/>


const HelloFacade = ({user, isAuth, avatar}) => {
  const showAvatar = useMemo(() => isAuth && avatar && !avatar.isExpired, [isAuth, avatar])

  return (
    <>
      {showAvatar && <Avatar avatar={avatar}/>}
      {isAuth && <Greetings firstName={user.firstName} lastName={user.lastName} />}
      <Navigate />
    </>
  )
}
export default HelloFacade


const Navigate = memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const events = () => useSelector(state => state.tracker.events)

  const onClickHandler = (url, event) => {
    return () => {
      navigate(url)
      dispatch(addEvent(event))
    }
  }

  return (
      <nav>
        <button
            onClick={onClickHandler("/my-page", {type: "Click",  name: "To my page"})}>
          My page
        </button>
        <button onClick={onClickHandler("/my-settings", {type: "Click",  name: "To my settings"})}>
          Settings
        </button>
        <button onClick={onClickHandler("/exit", {type: "Click",  name: "Sign out"})}>
          Exit
        </button>
      </nav>
  )
})

const Greetings = ({firstName, lastName}) => {

  return (
      <>
        <div>Greeting! {`${firstName} ${lastName}`}</div>
        <div>Welcome to our site!</div>
      </>
  )
}