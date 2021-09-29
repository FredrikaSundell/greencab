import { Link } from 'react-router-dom'

const LinkButtonBack = ({ children, to }) => {
  return (
    <Link className="link-button-back" to={to}>
      {children}
    </Link>
  )
}

export default LinkButtonBack
