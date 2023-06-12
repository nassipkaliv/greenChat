import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: rgb(237, 237, 237);
  padding-bottom: 2pc;
`;

const profileSectionStyles = css`
  background: white;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
  padding: 10px 20px;
`;

const PersonalInfo = styled.div`
  ${profileSectionStyles}

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;;
  width: 100%;
  object-fit: cover;
`;

const ProfileName = styled.h2`
  flex: 1;
  color: #000000;
  font-size: 1.2rem;
  align-self: flex-start;
`;

export default function ProfileSection() {
  return (
    <Wrapper>
      <PersonalInfo>
        <AvatarWrapper>
          <Avatar src="/public/images/avatar3.png" alt="User Profile" />
        </AvatarWrapper>
        <ProfileName>Yernur Nassipkali</ProfileName>
      </PersonalInfo>
    </Wrapper>
  );
}