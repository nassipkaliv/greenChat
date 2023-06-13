import Sidebar from "./components/sidebar/Sidebar";
import ChatRoom from "./components/chat-room/ChatRoom";
import UnSelectedChat from "./components/unselected-chat/UnSelectedChat";
import { App, Content, Message } from "./styles";
import { useChatContext } from "./context/chat";


export default function ChatPage() {
  const chatCtx = useChatContext();

  return (
    <App>
      <Message> Currently Only available on desktop or large devices 😊. </Message>
      <Content>
        <Sidebar />
        {chatCtx.activeChat ? <ChatRoom /> : <UnSelectedChat />} 
      </Content>
    </App>
  );
}