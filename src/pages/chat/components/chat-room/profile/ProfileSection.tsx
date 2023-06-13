import Icon from "../../../../../common/components/icons";
import { Wrapper, PersonalInfo, AvatarWrapper, Avatar, ProfileName, HeadingWrapper, Heading, MediaButton, Section, MediaImagesWrapper, MediaImage, AboutItem, ActionSection, ActionText } from "./styles";


export default function ProfileSection() {
  return (
    <Wrapper>
      <PersonalInfo>
        <AvatarWrapper>
          <Avatar src="/assets/images/girl.jpeg" alt="User Profile" />
        </AvatarWrapper>
        <ProfileName>Nassipkali Yernur</ProfileName>
      </PersonalInfo>

      <Section>
        <HeadingWrapper>
          <Heading>Media, Links and Documents</Heading>
          <MediaButton>
            <Icon id="rightArrow" className="icon" />
          </MediaButton>
        </HeadingWrapper>
        <MediaImagesWrapper>
          <MediaImage src="/assets/images/placeholder.jpeg" alt="Media" />
          <MediaImage src="/assets/images/placeholder.jpeg" alt="Media" />
          <MediaImage src="/assets/images/placeholder.jpeg" alt="Media" />
        </MediaImagesWrapper>
      </Section>

      <Section>
        <HeadingWrapper>
          <Heading>About and phone number</Heading>
        </HeadingWrapper>
        <ul>
          <AboutItem>TOPG</AboutItem>
          <AboutItem>+77470467897</AboutItem>
        </ul>
      </Section>

      <ActionSection>
        <Icon id="block" className="icon" />
        <ActionText>Block</ActionText>
      </ActionSection>
      <ActionSection>
        <Icon id="thumbsDown" className="icon" />
        <ActionText>Report Contact</ActionText>
      </ActionSection>
      <ActionSection>
        <Icon id="delete" className="icon" />
        <ActionText>Delete Chat</ActionText>
      </ActionSection>
    </Wrapper>
  );
}