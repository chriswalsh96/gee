import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ProductNav,
  HeaderContainer,
  HeaderWrapper,
  HeaderContent,
  FaqNav,
  FaqButton,
} from "../Header/style";
import ButtonNav from "../Button-Nav/button-nav";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderContent>
          <img src="./images/gee_logo.png"></img>
          <ProductNav>
            <ButtonNav
              text="Jenbacher"
              backgroundUrl="./images/jenbacher.png"
              stockCounter="15"
            />
            <ButtonNav
              text="MWM"
              backgroundUrl="./images/mwm.png"
              stockCounter="17"
            />
            <ButtonNav
              text="MTU"
              backgroundUrl="./images/mtu.png"
              stockCounter="12"
            />
            <ButtonNav
              text="Caterpillar"
              backgroundUrl="./images/caterpillar.png"
              stockCounter="19"
            />
            <ButtonNav
              text="MAN"
              backgroundUrl="./images/man.png"
              stockCounter="15"
            />
            <ButtonNav
              text="GUASCOR"
              backgroundUrl="./images/guascor.png"
              stockCounter="19"
            />
            <ButtonNav
              text="Cummins"
              backgroundUrl="./images/cummins.png"
              stockCounter="11"
            />
            <ButtonNav
              text="Perkins"
              backgroundUrl="./images/perkins.png"
              stockCounter="12"
            />
            <ButtonNav
              text="SCANIA"
              backgroundUrl="./images/scania.png"
              stockCounter="11"
            />
          </ProductNav>
          <FaqNav>
            <FaqButton>
              <ButtonNav
                text="About"
                color="white"
                backgroundUrl="./images/generic-green.png"
              />
            </FaqButton>
            <FaqButton>
              <ButtonNav
                text="Contact"
                backgroundUrl="./images/generic-green.png"
                color="white"
              />
            </FaqButton>
          </FaqNav>
        </HeaderContent>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
