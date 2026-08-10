import React from "react";
import InfoCard from "../../../";
import { TInfoCardSize } from "../../../types";

export const InfoCardInfo: React.FC<{ size?: TInfoCardSize }> = ({ size }) => (
  <InfoCard
    status="info"
    width="382px"
    label="Info Label"
    message="Detailed message text"
    moreButtonText="Show more"
    collapseButtonText="Collapse"
    size={size}
  />
);
export const InfoCardWarning: React.FC<{ size?: TInfoCardSize }> = ({
  size
}) => (
  <InfoCard
    status="warning"
    width="382px"
    label="Warning Label"
    message="Detailed message text"
    moreButtonText="Show more"
    collapseButtonText="Collapse"
    size={size}
  />
);
export const InfoCardError: React.FC<{ size?: TInfoCardSize }> = ({ size }) => (
  <InfoCard
    status="error"
    label="Error Label"
    width="382px"
    message="Detailed message text"
    moreButtonText="Show more"
    collapseButtonText="Collapse"
    size={size}
  />
);

export const InfoCardSuccess: React.FC<{ size?: TInfoCardSize }> = ({
  size
}) => (
  <InfoCard
    status="success"
    label="Success Label"
    width="382px"
    message="Detailed message text"
    moreButtonText="Show more"
    collapseButtonText="Collapse"
    size={size}
  />
);

export const InfoCardAnotherButtons: React.FC<{ size?: TInfoCardSize }> = ({
  size
}) => (
  <InfoCard
    status="info"
    label="Info Label"
    width="382px"
    message="Detailed message text"
    moreButtonText="Show"
    collapseButtonText="Hide"
    size={size}
  />
);

export const InfoCardAnotherText: React.FC<{ size?: TInfoCardSize }> = ({
  size
}) => (
  <InfoCard
    status="info"
    label="Heading"
    width="382px"
    message="Different message text"
    size={size}
  />
);

export const InfoCardClosable: React.FC<{ size?: TInfoCardSize }> = ({
  size
}) => (
  <InfoCard
    isClosableIcon={true}
    status="info"
    label="Heading"
    width="382px"
    message="Detailed message text"
    size={size}
  />
);
