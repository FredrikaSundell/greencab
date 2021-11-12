import { Link } from 'react-router-dom'

const CancelButton = ({ children, to }) => {
  return (
    <>
      <Link className="cancel-button" to={to}>
        {children}
      </Link>
    </>
  )
}

export default CancelButton
