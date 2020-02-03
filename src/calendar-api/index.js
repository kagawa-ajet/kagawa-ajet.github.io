import { useEffect, useState } from 'react'
import Calendar from './Calendar'

/**
 * A react hook for interacting with a calendar object through the API.
 * Currently supplies an object will all the events in the supplied calendar.
 *
 * @param {string} calendarId The calendar ID supplied by google.
 * @param {string} apiKey The App's API key supplied by the google developer
 * console.
 */
export function useEvents (calendarId, apiKey) {
  const [calendar, setCalendar] = useState()
  const [events, setEvents] = useState([])

  useEffect(() => {
    setCalendar(new Calendar(calendarId, apiKey))
  }, [calendarId, apiKey])

  useEffect(() => {
    if (calendar) {
      calendar.getAll().then(json => setEvents(json.items))
    }
  }, [calendar])

  return events
}
