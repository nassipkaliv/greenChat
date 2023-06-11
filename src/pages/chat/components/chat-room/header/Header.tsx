import Icon from "../../../../../common/components/icons";
import styled, { css } from "styled-components";
import OptionsMenu from "../../option-menu/OptionsMenu"; 

const Container = styled.div`
  background: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  min-height: 60px;
  z-index: 10;

  .icon {
    color: rgb(145, 145, 145);
  }

  .search-icon {
    width: 30px;
    height: 30px;
  }
`;

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor:pointer;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProfileWrapper = styled.div`
  flex: 1;
  cursor: pointer;
`;

const profileStyles = css`
  overflow: hidden;
  white-space; nowrap;
  text-overflow: ellipsis;
`;

const Name = styled.h2`
  color: #000000;
  font-size: 1rem;
  margin-bottom: 2px;

  ${profileStyles}
`;

const Subtitle = styled.p`
  color: #00000099;
  font-size: 0.75rem;

  ${profileStyles}
  `;

  const Actions = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;

    .action-menus-wrapper {
      z-index: 20;
    }
  `;

  const actionStyles = css`
    margin-left: 25px;
    cursor: pointer;
  `;

  const Action = styled.button`
    ${actionStyles}
  `;

  export default function Header() {
    return (
      <Container>
        <AvatarWrapper>
          <Avatar src="/public/images/avatar2.jpg" />
        </AvatarWrapper>
        <ProfileWrapper>
          <Name>Yernu Nassipkali</Name>
          <Subtitle>Future TOPG is online</Subtitle>
        </ProfileWrapper>
        <Actions>
          <Action>
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
    )
  }