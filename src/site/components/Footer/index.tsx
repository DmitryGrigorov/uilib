import React from "react";
import {
  PRIMARY_NAVIGATION,
  RESOURCE_NAVIGATION
} from "../../navigation/routes";
import {
  BrandDescription,
  BrandLink,
  BrandMark,
  BrandName,
  ExternalArrow,
  FooterBottom,
  FooterContainer,
  FooterHeading,
  FooterInternalLink,
  FooterLinkGroup,
  FooterLinkList,
  FooterMeta,
  FooterRoot,
  FooterTop,
  FooterExternalLink
} from "./styles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterRoot>
      <FooterContainer>
        <FooterTop>
          <div>
            <BrandLink to="/" aria-label="UI Lib home">
              <BrandMark aria-hidden="true">UI</BrandMark>
              <BrandName>UI Lib</BrandName>
            </BrandLink>
            <BrandDescription>
              A production-ready React design system for teams that value speed,
              clarity, and polished product experiences.
            </BrandDescription>
          </div>

          <FooterLinkGroup aria-labelledby="footer-explore-heading">
            <FooterHeading id="footer-explore-heading">Explore</FooterHeading>
            <FooterLinkList>
              {PRIMARY_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <FooterInternalLink to={item.href}>
                    {item.label}
                  </FooterInternalLink>
                </li>
              ))}
              <li>
                <FooterInternalLink to="/#quick-start">
                  Quick start
                </FooterInternalLink>
              </li>
            </FooterLinkList>
          </FooterLinkGroup>

          <FooterLinkGroup aria-labelledby="footer-resources-heading">
            <FooterHeading id="footer-resources-heading">
              Resources
            </FooterHeading>
            <FooterLinkList>
              {RESOURCE_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <FooterExternalLink
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}>
                    {item.label}
                    <ExternalArrow aria-hidden="true">
                      {item.newTab ? "\u2197" : "\u2192"}
                    </ExternalArrow>
                  </FooterExternalLink>
                </li>
              ))}
            </FooterLinkList>
          </FooterLinkGroup>
        </FooterTop>

        <FooterBottom>
          <FooterMeta>&copy; {currentYear} Dmitry Grigorov. UI Lib.</FooterMeta>
          <FooterMeta>Built for product teams that ship.</FooterMeta>
        </FooterBottom>
      </FooterContainer>
    </FooterRoot>
  );
};

export default Footer;
