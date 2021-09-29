import { Link } from 'react-router-dom'

const LinkButton = ({ children, to }) => {
  return (
    <Link className="link-button" to={to}>
      {children}
    </Link>
  )
}

export default LinkButton
