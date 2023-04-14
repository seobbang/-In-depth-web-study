import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Title>타이틀입니당</Title>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.Pic_Color_Sky};
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.Pic_Color_Gray_2};
  ${({ theme }) => theme.fonts.Pic_Noto_B_Title_1}
`;
