import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/SidebarCR";
import ProfileSection from "./profile/ProfileSection";
import Icon from "../../../../common/components/icons";
import MessagesList from "./messages-list/MessagesList";
import SearchSection from "./search-section/SearchSection";
import { Container, Body, Background, FooterContainer, ScrollButton } from "./styles";
import ChatLayout from "../../layouts/ChatLayout";
import useChatRoom from "../../hooks/useChatRoom";
import useNavigateToChat from "../../hooks/useNavigateToChat";

export default function ChatRoomPage() {
  const {
    activeInbox,
    handleMenuOpen,
    handleShowIcon,
    isProfileOpen,
    isSearchOpen,
    isShowIcon,
    setIsProfileOpen,
    setIsSearchOpen,
    setShouldScrollToBottom,
    shouldScrollToBottom,
  } = useChatRoom();
  useNavigateToChat(activeInbox);
  
  return (
    <ChatLayout>
      <Container>
        <Body>
          <Background />
          <Header
            title={activeInbox?.name ?? ""}
            image={activeInbox?.image ?? ""}
            subTitle={activeInbox?.isOnline ? "Online" : ""}
            onSearchClick={() => handleMenuOpen("search")}
            onProfileClick={() => handleMenuOpen("profile")}
          />
          <MessagesList
            onShowBottomIcon={handleShowIcon}
            shouldScrollToBottom={shouldScrollToBottom}
          />
          <FooterContainer>
            {isShowIcon && (
              <ScrollButton onClick={() => setShouldScrollToBottom(true)}>
                <Icon id="downArrow" />
              </ScrollButton>
            )}
            <Footer />
          </FooterContainer>
        </Body>
        <Sidebar title="Search" isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
          <SearchSection />
        </Sidebar>
        <Sidebar
          title="Contact Info"
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        >
          <ProfileSection name={activeInbox?.name ?? ""} image={activeInbox?.image ?? ""} />
        </Sidebar>
      </Container>
    </ChatLayout>
  );
}