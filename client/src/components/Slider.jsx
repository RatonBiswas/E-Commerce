import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    const handleClick = (direction) => {

    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg='f5fafd'>
          <ImgContainer>
            <Image src="https://cdn.yourpng.com/uploads/preview/model-girls-png-images-11590815772a7t4xsjrek.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>It was an easy ride</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fbf0f4'>
          <ImgContainer>
            <Image src="https://cdn.yourpng.com/uploads/preview/model-girls-png-images-11590815772a7t4xsjrek.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Morning Sale</Title>
            <Desc>It was an easy ride</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fcf1ed'>
          <ImgContainer>
            <Image src="https://cdn.yourpng.com/uploads/preview/model-girls-png-images-11590815772a7t4xsjrek.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Spring Sale</Title>
            <Desc>It was an easy ride</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='f5fafd'>
          <ImgContainer>
            <Image src="https://cdn.yourpng.com/uploads/preview/model-girls-png-images-11590815772a7t4xsjrek.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Winter Sale</Title>
            <Desc>It was an easy ride</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleClick('left')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
