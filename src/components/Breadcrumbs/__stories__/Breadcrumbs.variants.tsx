import React, { useEffect, useMemo } from "react";
import { IconHome1 } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Breadcrumbs from "../";
import { IBreadcrumbItem } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const TagVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Text", true);
    store.setVariantBoolean("Lead Icon", true);
    store.setVariantBoolean("Trail Icon", false);
    store.setVariantBoolean("Arrow", false);
    store.setVariantSelect("Class", ["Base", "Divider"], "Base");
    store.setVariantSelect("State", ["Default", "Current"], "Default");
    return () => {
      store.removeVariants();
    };
  }, []);
  const state = computed(() => store.getValue<"select">("State")).get();
  const classComponent = computed(() =>
    store.getValue<"select">("Class")
  ).get();
  const isLeadIcon = computed(() =>
    store.getValue<"boolean">("Lead Icon")
  ).get();
  const isTrailIcon = computed(() =>
    store.getValue<"boolean">("Trail Icon")
  ).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();
  const isArrow = computed(() => store.getValue<"boolean">("Arrow")).get();

  useEffect(() => {
    if (isTrailIcon) {
      store.setVariantValue({
        type: "boolean",
        name: "Lead Icon",
        value: false,
        isActive: true
      });
    }
  }, [isTrailIcon]);

  useEffect(() => {
    if (isLeadIcon) {
      store.setVariantValue({
        type: "boolean",
        name: "Trail Icon",
        value: false,
        isActive: true
      });
    }
  }, [isLeadIcon]);

  const items = useMemo((): IBreadcrumbItem[] => {
    const itemsBreadCrumbs: IBreadcrumbItem[] = [
      {
        text: isText ? "Home" : undefined,
        icon: isLeadIcon || isTrailIcon ? <IconHome1 /> : undefined,
        viewType: state === "Current" ? "current" : undefined,
        iconType: isLeadIcon ? "lead" : "trail",
        subitems: isArrow
          ? [
              { label: "1", groupId: 1 },
              { label: "2", groupId: 2 },
              { label: "12", groupId: 1 },
              { label: "123", groupId: 1 },
              { label: "124", groupId: 1 },
              { label: "125", groupId: 1 }
            ]
          : undefined
      }
    ];
    if (classComponent === "Divider") {
      return [...itemsBreadCrumbs, {}];
    }
    return itemsBreadCrumbs;
  }, [state, isLeadIcon, isTrailIcon, classComponent, isText, isArrow]);

  return <Breadcrumbs items={items} />;
});

export default TagVariants;
