import Icon from "../../../../common/components/icons";
import { Container, ImageWrapper, Title, Text, Image, Link, IconWrapper,  } from "./styles";


export default function UnSelectedChat() {
  return (
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
        <span>Created by</span>{" "}
        <Link target="_blank" href="https://github.com/nassipkaliv">
          Nassipkali Yernur
        </Link>
        <IconWrapper>
          <Icon id="heart" />
        </IconWrapper>
      </Text>
    </Container>
  );
}