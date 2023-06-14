import { useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

import SidebarAlert from "./alert/SidebarAlert";
import InboxContact from "./contacts/InboxContact";
import OptionsMenu from "../option-menu/OptionsMenu";
import SearchField from "../search-field/SearchField";
import Icon from "../../../../common/components/icons";
import { useAppTheme } from "../../../../common/theme";
import { Inbox } from "../../../../common/types/common.type";
import { useChatContext } from "../../context/chat";
import {
  Actions,
  Avatar,
  ContactContainer,
  Header,
  ImageWrapper,
  SidebarContainer,
  ThemeIconContainer,
} from "./styles";

export default function Sidebar() {
  const theme = useAppTheme();
  const navigate = useNavigate();
  const chatCtx = useChatContext();

  const handleChangeThemeMode = () => {
    theme.onChangeThemeMode();
  };

  const handleChangeChat = (chat: Inbox) => {
    chatCtx.onChangeChat(chat);
    navigate("/" + chat.id);
  };

  return (
    <SidebarContainer>
      <Header>
        <ImageWrapper>
          <Avatar src="/public/images/avatar.jpg" />
        </ImageWrapper>
        <Actions>
          <ThemeIconContainer onClick={handleChangeThemeMode}>
            {theme.mode === "light" ? <BsMoon /> : <BsFillMoonFill />}
          </ThemeIconContainer>
          <button aria-label="Status">
            <Icon id="status" className="icon" />
          </button>
          <button aria-label="New chat">
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
          <InboxContact
            key={inbox.id}
            inbox={inbox}
            isActive={inbox.id === chatCtx.activeChat?.id}
            onChangeChat={handleChangeChat}
          />
        ))}
      </ContactContainer>
    </SidebarContainer>
  );
}
