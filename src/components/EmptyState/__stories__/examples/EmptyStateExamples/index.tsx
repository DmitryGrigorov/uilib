import React from "react";
import { IconDirectboxDefault, IconSetting1 } from "@dmitrygrigorov/icons";
import styled from "styled-components";
import EmptyState from "../../../";
import { ITheme, LIGHT_THEME } from "../../../../Pallette/themes";

interface Theming {
  theme: ITheme;
}

const StyledIconForStory = styled(IconDirectboxDefault)<Theming>`
  svg {
    color: ${({ theme }) => theme.colors.amber2};
  }
`;

StyledIconForStory.defaultProps = {
  theme: LIGHT_THEME
};

export const EmptyStateDefault: React.FC = () => (
  <EmptyState
    width="382"
    header="Example heading"
    text="Example content text"
    buttonText="test"
    buttonIcon={<IconSetting1 />}
    isButton={true}
    icon={<StyledIconForStory />}
  />
);

export const EmptyStateNoButton: React.FC = () => (
  <EmptyState
    width="382"
    header="Example heading"
    text="Example content text"
    icon={<StyledIconForStory />}
  />
);

export const EmptyStateNoButtonAndHeader: React.FC = () => (
  <EmptyState
    width="382"
    text="Example content text"
    icon={<StyledIconForStory />}
  />
);

export const EmptyStateNoButtonAndIcon: React.FC = () => (
  <EmptyState
    width="382"
    header="Example heading"
    text="Example content text"
  />
);

export const EmptyStateNoButtonAndText: React.FC = () => (
  <EmptyState
    width="382"
    header="Example heading"
    icon={<StyledIconForStory />}
  />
);

export const EmptyStateNoTextAndIcon: React.FC = () => (
  <EmptyState
    width="382"
    header="Example heading"
    isButton={true}
    buttonIcon={<IconSetting1 />}
    buttonText="test"
  />
);
