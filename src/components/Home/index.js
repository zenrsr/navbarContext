import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="home-container-dark">
          <Navbar />
          <div className="home-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              className="home"
              alt="home"
            />
            <h1 className="home-heading-dark">Home</h1>
          </div>
        </div>
      ) : (
        <div className="home-container">
          <Navbar />
          <div className="home-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              className="home"
              alt="home"
            />
            <h1 className="home-heading">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
