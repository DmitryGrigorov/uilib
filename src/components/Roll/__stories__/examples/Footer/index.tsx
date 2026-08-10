import React from "react";
import H from "../../../../../components/typography/H";
import Button from "../../../../Button";
import { FooterWrapper } from "./styles";
import { IFooterProps } from "./types";

const Footer: React.FC<IFooterProps> = ({ isLong }) => (
  <FooterWrapper isLong={isLong}>
    <div className="header">
      <H type="capricornus">Save changes?</H>
    </div>
    <div className="buttons">
      <Button size="s" viewType="secondary">
        No
      </Button>
      <Button size="s">Yes</Button>
    </div>
  </FooterWrapper>
);

export default Footer;
