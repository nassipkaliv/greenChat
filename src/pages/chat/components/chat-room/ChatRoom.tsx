import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/SidebarCR";
import ProfileSection from "./profile/ProfileSection";
import Icon from "../../../../common/components/icons";
import MessagesList from "./messages-list/MessagesList";
import SearchSection from "./search-section/SearchSection";
import { Container, Body, Background, FooterContainer, ScrollButton } from "./styles";
import useChatRoom from "../../hooks/useChatRoom";

export default function ChatRoom() {
  
  const {
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

  return (
    <Container>
      <Body>
        <Background />
        <Header
          title="Nassipkali Yernur"
          subTitle="TOPG Online"
          image="/public/images/avatar.jpg"
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
      <Sidebar title="Contact Info" isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
        <ProfileSection />
      </Sidebar>
    </Container>
  );
}