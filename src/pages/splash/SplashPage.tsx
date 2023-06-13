import { Container, LogoWrapper, Logo, Progress, Title, SubTitle, EncryptionIcon, Link } from "./styles";

type SplashPageProps = {
    progress: number;
  };

export default function SplashPage(props: SplashPageProps) {
  const { progress } = props;
  
  return (
    <Container>
      <LogoWrapper>
        <Logo id="whatsapp" />
      </LogoWrapper>
      <Progress progess={progress} />
      <Title>WhatsApp</Title>
      <SubTitle>
        <EncryptionIcon id="lock" /> End-to-end encrypted. Build by{" "}
        <Link href="https://github.com/nassipkaliv" target="_blank">
          Nassipkali Yernur
        </Link>{" "}
        ❤️.
      </SubTitle>
    </Container>
  );
}