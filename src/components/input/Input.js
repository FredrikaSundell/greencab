function Input({ value, onChange, placeHolder }) {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
      className="input"
      type="text"
    />
  )
}

export default Input
