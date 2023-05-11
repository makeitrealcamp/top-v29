import PropTypes from 'prop-types'

const Button = ({ children, onHadleClick }) => {
  return(
    <div onClick={onHadleClick}>
      {children}
    </div>
  )
}


Button.propTypes = {
  children: PropTypes.node.isRequired,
  onHadleClick: PropTypes.func.isRequired,
}

export default Button
