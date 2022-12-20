import PropTypes from 'prop-types'
const Button = ({ color, text, onClick }) => {
    // const onClick = (e) => {
    //     // console.log(e)
    // }
    return (
        <button
            style={{ backgroundColor: color }} 
            className="btn"
            onClick = {onClick}
            
        >{text} 
        
        </button>

    )
}


//Defining default color
Button.defaultProps = {
    color: 'steelBlue'
}

//defining default type
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,

}

export default Button