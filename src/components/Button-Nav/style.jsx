import styled from "styled-components";

const Button = styled.div`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 14px;
  background-image: ${(props) => `url(${props.backgroundUrl})`};
  background-size: cover;
  text-align: center;
  position: relative;
`;

const NavCounter = styled.div`
  position: absolute;
  top: 2px;
  right: 4px;
  font-weight: 800;
  font-size: 12px;
  width: 14px;
  display: block;
`;

export { Button, NavCounter };
