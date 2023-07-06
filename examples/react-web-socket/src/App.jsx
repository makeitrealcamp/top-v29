import Messages from './components/Messages'
import Form from './components/Form'
import useChat from './hooks/useChat'

import './App.css'

function App() {
  const { messages, sendMessage } = useChat('top-v29')

  return (
    <div>
      <Messages messages={messages} />
      <Form onHandleMessage={sendMessage} />
    </div>
  )
}

export default App
