import { Link } from "react-router-dom"

const Header = () => {

  return (
    <nav className="header">
      <Link to="/">
        <h1>Food recipes</h1>
      </Link>
    </nav>
  )
}

export default Header;
