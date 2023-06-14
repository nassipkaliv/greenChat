import Sidebar from "../components/sidebar/Sidebar";
import { App, Content, Message } from "./styles";

export default function ChatLayout(props: { children: any }) {
  return (
    <App>
      <Message>Currently Only available on desktop or large devices 😊.</Message>
      <Content>
        <Sidebar />
        {props.children}
      </Content>
    </App>
  );
}
