import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100vw;
  background-image: url("./images/banner.png");
  height: 112px;
  background-size: cover;
  position: relative;
`;

const ProductNav = styled.div`
  display: grid;
  width: 600px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 6px;
  margin-left: 24px;
`;

const HeaderContainer = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  position: relative;
  min-width: 1245px;
  padding-top: 19px;
`;

const HeaderContent = styled.div`
  padding-left: 40px;
  display: flex;
`;

const FaqNav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 40px;
  bottom: 0;
`;

const FaqButton = styled.div`
  margin-top: 6px;
`;

export {
  ProductNav,
  HeaderContainer,
  HeaderContent,
  FaqNav,
  FaqButton,
  HeaderWrapper,
};
