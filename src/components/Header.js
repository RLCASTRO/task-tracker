import Button from "./Button";
// you can destructure the props object by typing the props name inside curly brackets to
//  save some time and avoid using props.something in your code.

// you can define a default type for the propertie you're passing by adding the prop-types since JS does not need to define type in variable declaration.
//and adding Header.propTypes obj below
// import PropTypes from 'prop-types'
const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e);
    }
  return (
    <header className="header">
        {/* <h1 style={headingStyle}> */}
        <h1> {title} </h1>
        {/* here I'm callint the onClick function inside the Button component. */}
        {/* <Button onClick='onClick' color='green' text='Add'/> */}
        {/* The onClick event here is passing the onClick function as a parameter, se we need to catch this inside the button component */}
        <Button onClick={onClick} color='green' text='Add'/>
    </header>
  )
}

// you can define defaul values if toe apropriate value is not passed
Header.defaultProps = {
    title: 'Task Tracker',
}


//this will define the props default type
// Header.propTypes = {
//     title: PropTypes.string,
// }

// You can create a default css style, but we'll use an external css file to do this.
// const headingStyle = {
//     color:'red'
// }


export default Header