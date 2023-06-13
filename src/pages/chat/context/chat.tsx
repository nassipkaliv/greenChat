import React, { useState } from "react";
import { MessageStatus } from "../../../common/types/common.type";

type User = {
  name: string;
  image: string;
};

type Inbox = {
  id: string;
  name: string;
  image: string;
  lastMessage?: string;
  timestamp?: string;
  messageStatus?: MessageStatus;
  notificationsCount?: number;
  isPinned?: boolean;
  isOnline?: boolean;
};

type ChatContextProp = {
  user: User;
  inbox: Inbox[];
};

const initialValue: ChatContextProp = {
  user: { name: "Nassipkali Yernur", image: "/public/images/avatar.jpg" },
  inbox: [
    {
      id: "1",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "2",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "3",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "4",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "5",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "6",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "7",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
    },
    {
      id: "8",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
      isOnline: false,
    },
    {
      id: "9",
      name: "Nassipkali Yernur",
      image: "/public/images/avatar.jpg",
      lastMessage: "TOPG",
      notificationsCount: 5,
      messageStatus: "SENT",
      timestamp: "25:12",
      isPinned: true,
      isOnline: false,
    },
  ],
};

export const ChatContext = React.createContext<ChatContextProp>(initialValue);

export default function ChatProvider(props: { children: any }) {
  const { children } = props;

  const [user] = useState<User>(initialValue.user);
  const [inbox] = useState<Inbox[]>(initialValue.inbox);
  const chatData = React.useMemo(
    () => ({
      user,
      inbox,
    }),
    [user, inbox]
  );

  return <ChatContext.Provider value={chatData}>{children}</ChatContext.Provider>;
}

export const useChatContext = () => React.useContext(ChatContext);