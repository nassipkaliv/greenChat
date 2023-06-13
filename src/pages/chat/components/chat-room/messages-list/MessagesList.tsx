/* eslint-disable @typescript-eslint/ban-types */
import Icon from "../../../../../common/components/icons";
import { MessageStatus } from "../../../../../common/types/common.type";
import useScrollToBottom from "../../../hooks/useScrollToBottom";
import {
  ChatMessage,
  ChatMessageFiller,
  ChatMessageFooter,
  Container,
  Date,
  DateWrapper,
  EncryptionMessage,
  MessageGroup,
} from "./styles";
import { useEffect } from "react";

type Message = {
  id: string;
  body: string;
  date: string;
  timestamp: string;
  messageStatus: MessageStatus;
  isOpponent: boolean;
};

const messages: Message[] = [
  {
    id: "1",
    body: "Message here..",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "2",
    body: "Message here..",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "3",
    body: "Message here..",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "4",
    body: "What time should we meet?",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "5",
    body: "Can you send me that file?",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "6",
    body: "I'll be there in 10 minutes.",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "7",
    body: "Let's meet at the coffee shop.",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "8",
    body: "Sorry, I can't make it today.",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "9",
    body: "No problem, we can reschedule.",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "10",
    body: "Do you have any suggestions for dinner?",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "11",
    body: "How about that new Italian place?",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "12",
    body: "Sounds good to me.",
    date: "10/06/2023",
    timestamp: "25:12",
    messageStatus: "DELIVERED",
    isOpponent: false,
  },
];

type MessagesListProps = {
  onShowBottomIcon: Function;
  shouldScrollToBottom?: boolean;
};

export default function MessagesList(props: MessagesListProps) {
  const { onShowBottomIcon, shouldScrollToBottom } = props;
  const containerRef = useScrollToBottom(onShowBottomIcon, shouldScrollToBottom);
  return (
    <Container ref={containerRef}>
      <DateWrapper>
        <Date> 19/02/2023 </Date>
      </DateWrapper>
      <EncryptionMessage>
        <Icon id="lock" className="icon" />
        Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read
        or listen to them. Click to learn more.
      </EncryptionMessage>
      <MessageGroup>
        {messages.map((message) => (
          <SingleMessage key={message.id} message={message} />
        ))}
      </MessageGroup>
    </Container>
  );
}

function SingleMessage(props: { message: Message }) {
  const { message } = props;

  return (
    <ChatMessage
      key={message.id}
      className={message.isOpponent ? "chat__msg--received" : "chat__msg--sent"}
    >
      <span>{message.body}</span>
      <ChatMessageFiller />
      <ChatMessageFooter>
        <span>{message.timestamp}</span>
        {!message.isOpponent && (
          <Icon
            id={`${message.messageStatus === "SENT" ? "singleTick" : "doubleTick"}`}
            className={`chat__msg-status-icon ${
              message.messageStatus === "READ" ? "chat__msg-status-icon--blue" : ""
            }`}
          />
        )}
      </ChatMessageFooter>
    </ChatMessage>
  );
}