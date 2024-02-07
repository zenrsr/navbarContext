import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return isDarkTheme ? (
        <div className="navbar-container dark">
          <div className="logo-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              className="logo"
              alt="website logo"
            />
          </div>
          <ul type="none" className="navbar-items">
            <Link to="/">
              <li className="nav-heading-dark">Home</li>
            </Link>

            <Link to="/about">
              <li className="nav-heading-dark">About</li>
            </Link>
          </ul>
          <div className="theme-icon">
            <button type="button" className="button" data-testid="theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                onClick={toggleTheme}
                className="theme-icon"
                alt="theme"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar-container">
          <div className="logo-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              className="logo"
              alt="website logo"
            />
          </div>
          <ul type="none" className="navbar-items">
            <Link to="/">
              <li className="nav-heading">Home</li>
            </Link>

            <Link to="/about">
              <li className="nav-heading">About</li>
            </Link>
          </ul>
          <div className="theme-icon">
            <button type="button" className="button" data-testid="theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                onClick={toggleTheme}
                className="theme-icon"
                alt="theme"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
