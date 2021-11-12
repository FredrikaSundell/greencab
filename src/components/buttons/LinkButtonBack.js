import { Link } from 'react-router-dom'

const LinkButtonBack = ({ children, to }) => {
  return (
    <>
      <Link to={to}>{children}</Link>
    </>
  )
}

export default LinkButtonBack
