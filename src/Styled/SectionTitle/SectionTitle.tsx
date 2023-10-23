import React from "react";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
}

const HeaderSectionTitle = styled.span<SectionTitleProps>`
  background-color: #000000;
  color: #fff;
  padding: 0 8px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 4px;
  font-family: "Segoe UI", Arial, sans-serif;
  font-weight: 400;
`;

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title } = props;

  return <HeaderSectionTitle title={title}>{title}</HeaderSectionTitle>;
};
