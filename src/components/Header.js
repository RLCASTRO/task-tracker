// you can destructure the props object by typing the props name inside curly brackets to
//  save some time and avoid using props.something in your code.

// you can define a default type for the propertie you're passing by adding the prop-types since JS does not need to define type in variable declaration.
//and adding Header.propTypes obj below
import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header>
        <h1>
            {title} from header
        </h1>
    </header>
  )
}

// you can define defaul values if toe apropriate value is not passed
Header.defaultProps = {
    title: 'Rodrigo',
}


Header.propTypes = {
    title: PropTypes.string,
}

export default Header