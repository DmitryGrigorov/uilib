import React, { useEffect } from "react";
import { IconSave1 } from "@dmitrygrigorov/icons";
import styled from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import PageHeader from "../";
import { MEDIA } from "../../Pallette/style-utils";
import { useVariantStore } from "../../../site/modules/variants";

const PageHeaderWrapper = styled.div`
  ${MEDIA.desktopXl`
    width: 382px;
  `};
  ${MEDIA.desktopL`
    width: 288px;
  `};
  ${MEDIA.desktopM`
    width: 194px;
  `};
  ${MEDIA.mobile`
    width: 327px;
  `};
`;

const PageHeaderVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Arrow", true);
    store.setVariantBoolean("Button", true);
    return () => {
      store.removeVariants();
    };
  }, []);
  const isLeadIcon = computed(() => store.getValue<"boolean">("Arrow")).get();
  const isTrailContent = computed(() =>
    store.getValue<"boolean">("Button")
  ).get();

  return (
    <PageHeaderWrapper>
      <PageHeader
        isLeadIcon={isLeadIcon}
        text=" Icon library"
        trailIcon={isTrailContent ? <IconSave1 /> : undefined}
      />
    </PageHeaderWrapper>
  );
});

export default PageHeaderVariants;
