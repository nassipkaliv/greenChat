import ChatLayout from "../layouts/ChatLayout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Icon from "../../../common/components/icons";
import useChatRoom from "./hooks/useChatRoom";
import ProfileSection from "./components/profile/Profile";
import MessagesList from "./components/messages-list/MessagesList";
import SearchSection from "./components/search-section/SearchSection";
import useNavigateToChat from "./hooks/useNavigateToChat";
import { Container, Body, Background, FooterContainer, ScrollButton } from "./styles";

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
