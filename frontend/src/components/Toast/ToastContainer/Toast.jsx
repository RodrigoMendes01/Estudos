import { useState } from 'react';
import ToastMessage from '../ToastMessage/ToastMessage';
import { Container } from './styles';

function Toast() {
  const [messages] = useState([
    {
      id: Math.random(),
      type: 'default',
      text: 'default text',
    },
    {
      id: Math.random(),
      type: 'success',
      text: 'success text',
    },
    {
      id: Math.random(),
      type: 'danger',
      text: 'danger text',
    },
  ]);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}

export default Toast;
