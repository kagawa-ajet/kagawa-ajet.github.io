import React, { useEffect, useState } from 'react'
import { useCalendar } from './calendar-api'
import Event from './components/Event'
import './App.scss'

export default function App () {
  const calendar = useCalendar(
    'gprr6e1so5bm32gjig3vf5ehk8@group.calendar.google.com',
    'AIzaSyAT6OXBzAOkHsAjt61M-MmQESV_DJOXeLs'
  )

  const [nextEvent, setNext] = useState()

  useEffect(() => {
    if (!calendar) return

    /**
     * Will be changed to false when this effect goes out of scope (the calendar
     * changes), and will cause the promise to do nothing.
     */
    let valid = true
    calendar.getNext()
      .then(res => {
        if (!valid) return

        // get the event
        if (res.items.length > 0) setNext(res.items[0])
        else {
          // or there are no future events.
          setNext({
            summary: 'Oh dear....',
            description: 'There are no future events.'
          })
        }
      })
    return () => { valid = false }
  }, [calendar])

  return (
    <div className='App'>
      {nextEvent && <Event {...nextEvent} />}
    </div>
  )
}
