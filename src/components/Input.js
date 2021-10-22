function Input({ value, onChange }) {
  return (
    <input onChange={onChange} value={value} className="input" type="text" />
  )
}

export default Input
