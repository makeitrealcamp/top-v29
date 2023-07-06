import PropTypes from 'prop-types'

const Message = ({ body, sender }) => {
  return(
    <li className={sender}>
      <p>{body}</p>
    </li>
  )
}

Message.propTypes = {
  body: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
}

export default Message
