import ChatLayout from "../layouts/ChatLayout";
import Icon from "../../../common/components/icons";
import { Container, ImageWrapper, Title, IconWrapper, Link, Image, Text } from "./styles";

export default function UnSelectedChatPage() {
  return (
    <ChatLayout>
      <Container>
        <ImageWrapper>
          <Image src="/public/images/entry-image.webp" />
        </ImageWrapper>
        <Title> WhatsApp Web </Title>
        <Text>
          Send and receive messages without keeping your phone online. <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Text>
        <Text>
          <span>Built by</span>{" "}
          <Link target="_blank" href="https://github.com/nassipkaliv">
            Nassipkali Yernur
          </Link>
          <IconWrapper>
            <Icon id="heart" />
          </IconWrapper>
        </Text>
      </Container>
    </ChatLayout>
  );
}