import React, { useState, useEffect, useRef } from 'react';
import { Card, Container } from 'react-bootstrap';
import {
  CARD_STYLES,
  FOOTER_STYLES,
  MESSAGE_ICON,
  MODAL_STYLES,
  mODAL_STYLES,
  moDAL_STYLES,
} from './components/ChatbotStyles';

import Buttons from './components/Buttons';
import Message from './components/Message';
import Robot from './components/Robot';

const options = [
  'Return order',
  'Replace',
  'Nothing',
  'smtg',
  'amt',
  'sdfd',
  'gsgsdfg',
];

export default function Chatbot() {
  const [click, setClick] = useState(false);
  const [chats, setChats] = useState([
    { type: 'robot', message: 'Welcome to chatbot' },
  ]);

  const bottomRef = useRef();

  const handleClick = (option) => {
    setChats((c) => {
      return [...c, { type: 'message', message: `${option}` }];
    });
    setChats((c) => {
      return [...c, { type: 'robot', message: `Hi. i am robot` }];
    });
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behaviour: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <>
      <div style={moDAL_STYLES}>
        <Card
          style={{
            ...CARD_STYLES,
            display: `${click ? 'block' : 'none'}`,
          }}
        >
          <div
            className="mt-1"
            style={{ textAlign: 'end', cursor: 'pointer' }}
            onClick={() => setClick((cli) => !cli)}
          >
            <i
              className="far fa-times-circle"
              style={{ fontSize: '25px' }}
            />
          </div>
          <Container
            className="mt-2"
            style={{ height: '78%', overflowY: 'scroll' }}
          >
            {chats.map((chat, index) => {
              if (
                chat.type === 'message' &&
                index === chats.length - 1
              )
                return (
                  <Message
                    message={chat.message}
                    key={index}
                    bottom={bottomRef}
                  />
                );
              if (chat.type === 'robot' && index === chats.length - 1)
                return (
                  <Robot
                    message={chat.message}
                    key={index}
                    bottom={bottomRef}
                  />
                );
              if (chat.type === 'message')
                return (
                  <Message
                    message={chat.message}
                    key={index}
                    bottom={false}
                  />
                );
              if (chat.type === 'robot')
                return (
                  <Robot
                    message={chat.message}
                    key={index}
                    bottom={false}
                  />
                );
              return <></>;
            })}
          </Container>
          <div
            className="ml-2 mb-2"
            style={FOOTER_STYLES}
          >
            <small className="ml-2">
              Choose from one of the replies below
            </small>
            <br />
            <div
              style={{
                whiteSpace: 'nowrap',
                overflowX: 'scroll',
                width: '90%',
              }}
            >
              {options.map((option) => {
                return (
                  <Buttons
                    key={option}
                    option={option}
                    handleClick={handleClick}
                  />
                );
              })}
            </div>
          </div>
        </Card>
      </div>

      <div style={mODAL_STYLES}>
        <i
          className="fas fa-caret-down"
          style={{
            fontSize: '50px',
            margin: '0px',
            display: `${click ? 'block' : 'none'}`,
            color: 'rgb(236, 226, 226)',
          }}
        />
      </div>

      <div style={MODAL_STYLES}>
        <div>
          <div
            style={MESSAGE_ICON}
            onClick={() => setClick((cli) => !cli)}
          >
            <i
              className="far fa-comment-dots fa-2x"
              style={{ color: '#FFDFC3' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
