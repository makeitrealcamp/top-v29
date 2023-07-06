import PropTypes from 'prop-types'

import Message from './Message'

const Messages = ({ messages = [] }) => {
  return(
    <ul id="messages">
      {messages.map((message, i) => (
        <Message key={i} {...message} />
      ))}
    </ul>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      hour: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
    })
  ),
}

export default Messages
