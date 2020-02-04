import React from 'react'
import { useEvents } from './calendar-api'
import Event from './components/Event'
import './App.scss'

export default function App () {
  const events = useEvents(
    'gprr6e1so5bm32gjig3vf5ehk8@group.calendar.google.com',
    'AIzaSyAT6OXBzAOkHsAjt61M-MmQESV_DJOXeLs'
  )

  return (
    <div className='App'>
      {events && events.map(event => <Event key={event.id} {...event} />)}
    </div>
  )
}
