import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  margin: auto;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width:100vw;
  height:100vh
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1``
const Description = styled.p``
const Button = styled.button``

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://cdn.yourpng.com/uploads/preview/model-girls-png-images-11590815772a7t4xsjrek.png" />
          </ImageContainer>
          <InfoContainer>
              <Title></Title>
              <Description></Description>
              <Button></Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
