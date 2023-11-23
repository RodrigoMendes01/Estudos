import { useState, useEffect, useCallback } from 'react';
import ToastMessage from '../ToastMessage/ToastMessage';
import { Container } from './styles';
import { toastEventManager } from '../../../utils/toast';

function Toast() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages(() => [
        {
          id: Math.random(),
          type,
          text,
        },
      ]);
    }

    toastEventManager.addEventListener('addtoast', handleAddToast);
    return () => {
      toastEventManager.removeEventListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => {
      prevState.filter((message) => message.id !== id);
    });
  }, []);

  return (
    <Container
      role="button"
      tabIndex={0}
    >
      {messages?.map((message) => (
        <ToastMessage
          key={message.id}
          id={message.id}
          text={message.text}
          type={message.type}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}

export default Toast;
