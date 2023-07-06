import { useState, useRef, useEffect  } from 'react'
import socketIOClient from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:8080/";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        sender: message.senderId === socketRef.current.id ? "me" : "other",
      };

      setMessages((msgs) => [...msgs, incomingMessage]);

      return () => {
        socketRef.current.disconnect();
      }
    });

  }, [roomId]);


  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      hour: `${new Date().getHours()}:${new Date().getMinutes()}`,
      senderId: socketRef.current.id,
    });
  }

  return { messages, sendMessage };
}

export default useChat;
