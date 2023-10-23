import React from "react";
import styled from "styled-components";

interface NavbarButtonProps {
  title: string;
}

const StyledButton = styled.button<NavbarButtonProps>`
  padding: 8px 16px;
  width: 100%;
  color: #fff;
  border: none;
  background-color: #000;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #ccc;
  }
`;

export const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const { title } = props;
  return <StyledButton title={title}>{title}</StyledButton>;
};
