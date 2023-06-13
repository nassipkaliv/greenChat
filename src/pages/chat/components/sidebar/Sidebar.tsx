import SidebarAlert from "./alert/SidebarAlert";
import InboxContact from "./contacts/InboxContact";
import OptionsMenu from "../option-menu/OptionsMenu";
import SearchField from "../search-field/SearchField";
import Icon from "../../../../common/components/icons";
import {
  Actions,
  Avatar,
  ContactContainer,
  Header,
  ImageWrapper,
  SidebarContainer,
} from "./styles";
import { useChatContext } from "../../context/chat";

// const inbox = [
//   {
//     image: "/public/images/avatar.jpg",
//     title: "Nassipkali Yernur",
//     subTitle: "TOPG ONLINE",
//     isPinned: false,
//     notificationCount: 0,
//     timestamp: "25:12",
//     messageStatus: "SENT" as const,
//   },
// ];

export default function Sidebar() {
  const chatCtx = useChatContext();

  return (
    <SidebarContainer>
      <Header>
        <ImageWrapper>
          <Avatar src="/public/images/avatar.jpg" />
        </ImageWrapper>
        <Actions>
          <button className="sidebar__action" aria-label="Status">
            <Icon id="status" className="icon" />
          </button>
          <button className="sidebar__action" aria-label="New chat">
            <Icon id="chat" className="icon" />
          </button>
          <OptionsMenu
            iconClassName="icon"
            className="icon"
            ariaLabel="Menu"
            iconId="menu"
            options={[
              "New group",
              "Create a room",
              "Profile",
              "Archived",
              "Starred",
              "Settings",
              "Log out",
            ]}
          />
        </Actions>
      </Header>
      <SidebarAlert />
      <SearchField />
      <ContactContainer>
        {chatCtx.inbox.map((inbox) => (
          <InboxContact key={inbox.id} inbox={inbox} />
        ))}
      </ContactContainer>
    </SidebarContainer>
  );
}