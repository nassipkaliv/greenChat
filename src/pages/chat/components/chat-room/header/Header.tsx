/* eslint-disable @typescript-eslint/ban-types */
import Icon from "../../../../../common/components/icons";
import OptionsMenu from "../../option-menu/OptionsMenu";
import { Container, AvatarWrapper, Avatar, ProfileWrapper, Name, Actions, Action, Subtitle, actionStyles  } from "./styles";

type HeaderProps = {
  onSearchClick: Function;
  onProfileClick: Function;
  title: string;
  image: string;
  subTitle: string;
};

export default function Header(props: HeaderProps) {
  const { title, subTitle, image, onProfileClick, onSearchClick } = props;

  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={image} />
      </AvatarWrapper>
      <ProfileWrapper onClick={onProfileClick}>
        <Name>{title}</Name>
        {subTitle && <Subtitle>{subTitle}</Subtitle>}
      </ProfileWrapper>
      <Actions>
        <Action onClick={onSearchClick}>
          <Icon id="search" className="icon search-icon" />
        </Action>
        <OptionsMenu
          styles={actionStyles}
          ariaLabel="Menu"
          iconId="menu"
          iconClassName="icon"
          options={[
            "Contact Info",
            "Select Messages",
            "Mute notifications",
            "Clear messages",
            "Delete chat",
          ]}
        />
      </Actions>
    </Container>
  );
}