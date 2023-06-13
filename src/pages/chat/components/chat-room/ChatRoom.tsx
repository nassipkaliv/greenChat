import { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/SidebarCR";
import ProfileSection from "./profile/ProfileSection";
import Icon from "../../../../common/components/icons";
import MessagesList from "./messages-list/MessagesList";
import SearchSection from "./search-section/SearchSection";
import { Container, Body, Background, FooterContainer, ScrollButton } from "./styles";

export default function ChatRoom() {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleOpen = (menu: "search" | "profile") => {
    setIsSearchOpen(menu === "search" ? true : false);
    setIsProfileOpen(menu === "profile" ? true : false);
  };

  const handleShowIcon = (state: boolean) => {
    setIsShowIcon(state);
  };

  return (
    <Container>
      <Body>
        <Background />
        <Header
          title="Nassipkali Yernur"
          subTitle="TOPG Online"
          image="/public/images/avatar.jpg"
          onSearchClick={() => handleOpen("search")}
          onProfileClick={() => handleOpen("profile")}
        />
        <MessagesList onShowBottomIcon={handleShowIcon} />
        <FooterContainer>
          {isShowIcon && (
            <ScrollButton>
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