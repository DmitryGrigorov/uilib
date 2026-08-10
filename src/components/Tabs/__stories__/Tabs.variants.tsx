import React, { useEffect, useMemo } from "react";
import {
  IconBrush,
  IconCodeCircle,
  IconDocumentText
} from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Tabs from "../";
import { ITabsItem } from "../components/Tabs/types";
import { TSize } from "../components/Tab/types";
import { useVariantStore } from "../../../site/modules/variants";

const TabsVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect(
      "State",
      ["Default", "Selected", "Disabled"],
      "Default"
    );
    store.setVariantSelect("Size", ["l", "m"], "l");
    store.setVariantBoolean("Text", true);
    store.setVariantBoolean("Icon", true);
    return () => {
      store.removeVariants();
    };
  }, []);

  const isIcon = computed(() => store.getValue<"boolean">("Icon")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();
  const size = computed(() => store.getValue<"select">("Size")).get();
  const state = computed(() => store.getValue<"select">("State")).get();

  const items: ITabsItem[] = useMemo(
    () => [
      {
        label: isText ? "Design" : "",
        icon: isIcon ? <IconBrush /> : undefined,
        value: "design-1"
      },
      {
        label: isText ? "Code" : "",
        icon: isIcon ? <IconCodeCircle /> : undefined,
        value: "code-1"
      },
      {
        label: isText ? "Documentation" : "",
        icon: isIcon ? <IconDocumentText /> : undefined,
        value: "docs-1"
      }
    ],
    [isText, isIcon]
  );
  return (
    <Tabs>
      {items.map((item) => (
        <Tabs.Tab
          className={state === "Selected" ? "tab_selected" : undefined}
          size={size as TSize}
          key={item.value || item.label}
          icon={item.icon}
          isDisabled={state === "Disabled"}>
          {item.label}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
});

export default TabsVariants;
