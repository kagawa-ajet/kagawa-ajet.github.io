import React, { useEffect } from 'react'
import { useEvents } from './calendar-api'
import './App.scss'

function Event (props) {
  const { summary, description, location } = props
  console.log(props)
  return (
    <div className='Event'>
      <h2 className='summary'>{ summary }</h2>
      <p className='description'>{ description }</p>
      <p className='location'>{ location }</p>
    </div>
  )
}

export default function App () {
  const events = useEvents(
    'gprr6e1so5bm32gjig3vf5ehk8@group.calendar.google.com',
    'AIzaSyAT6OXBzAOkHsAjt61M-MmQESV_DJOXeLs'
  )

  return (
    <div className='App'>
      {events.map(event => <Event key={event.id} {...event} />)}
    </div>
  )
}
