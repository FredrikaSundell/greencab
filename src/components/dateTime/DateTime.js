import { useState } from 'react'
import { DateTimePicker } from '@material-ui/pickers'

function DateTime() {
  const [selectedDate, handleDateChange] = useState(new Date())
  return (
    <DateTimePicker
      className="datepicker"
      ampm={false}
      value={selectedDate}
      onChange={handleDateChange}
    />
  )
}

export default DateTime
