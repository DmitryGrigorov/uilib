import React, { PropsWithChildren, useMemo } from "react";
import { matchRoutes } from "react-router-dom";
import Button from "../../../../../components/Button";
import { componentsRoutes } from "../../../../router/index";

const PASSTHROUGH_HREF_PATTERN = /^(?:https?:\/\/|mailto:|tel:|\/\/)/i;

const addBlankTargetSafety = (rel?: string): string => {
  const values = new Set((rel ?? "").split(/\s+/).filter(Boolean));
  values.add("noopener");
  values.add("noreferrer");
  return Array.from(values).join(" ");
};

const A: React.FC<
  PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, href, rel, target }) => {
  const linkTransformer = useMemo(() => {
    if (!href) {
      return "";
    }

    if (
      href.startsWith("#") ||
      href.startsWith("/") ||
      PASSTHROUGH_HREF_PATTERN.test(href)
    ) {
      return href;
    }

    const trimmedHrefElements = href
      .replaceAll("?path=/docs/", "/")
      .replaceAll("--default", "")
      .replaceAll("--demo", "")
      .split("-");
    const routeCandidate =
      trimmedHrefElements[0] +
      (trimmedHrefElements.length > 1
        ? "/" + trimmedHrefElements[trimmedHrefElements.length - 1]
        : "");

    if (matchRoutes(componentsRoutes, routeCandidate) !== null) {
      return routeCandidate;
    }

    return "/storybook/" + href;
  }, [href]);

  const safeRel = target === "_blank" ? addBlankTargetSafety(rel) : rel;

  return (
    <Button
      viewType="link"
      size="s"
      href={linkTransformer}
      target={target}
      rel={safeRel}
      style={{ justifyContent: "left" }}>
      {children}
    </Button>
  );
};

export default A;
