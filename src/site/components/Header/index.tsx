import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from "react";
import {
  IconArrowRight,
  IconClose,
  IconLink1,
  IconMenuHamburger,
  IconSearchNormal1
} from "@dmitrygrigorov/icons";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import AppThemeProvider from "../../containers/App/components/AppTheme/AppThemeProvider";
import {
  IComponentSearchItem,
  PRIMARY_NAVIGATION,
  RESOURCE_NAVIGATION,
  searchComponents
} from "../../navigation";
import { IThemeSite } from "../../themes/types";
import {
  DesktopNavigationStyled,
  ExternalLinkStyled,
  HeaderInnerStyled,
  HeaderLogoStyled,
  HeaderSearchSlotStyled,
  HeaderSettingsStyled,
  HeaderStyled,
  MenuButtonStyled,
  MobileNavigationStyled,
  MobilePanelStyled,
  MobileResourcesStyled,
  NavigationLinkStyled,
  ResourceNavigationStyled,
  ScreenReaderOnlyStyled,
  SearchClearButtonStyled,
  SearchEmptyStyled,
  SearchInputStyled,
  SearchInputWrapperStyled,
  SearchResultArrowStyled,
  SearchResultCopyStyled,
  SearchResultNameStyled,
  SearchResultStyled,
  SearchResultsStyled,
  SearchResultTitleStyled,
  SearchRootStyled
} from "./styles";
import { IHeaderProps } from "./types";

interface IComponentSearchProps {
  idPrefix: string;
  onNavigate?: () => void;
}

const ComponentSearch = ({
  idPrefix,
  onNavigate
}: IComponentSearchProps): JSX.Element => {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const results = useMemo(() => searchComponents(query), [query]);
  const listboxId = `${idPrefix}-component-results`;
  const inputId = `${idPrefix}-component-search`;
  const statusId = `${idPrefix}-component-search-status`;

  // Resets the active listbox item whenever the search results change.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setActiveIndex(results.length > 0 ? 0 : -1);
  }, [results]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    const handlePointerDown = (event: globalThis.MouseEvent): void => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const selectResult = (result: IComponentSearchItem): void => {
    navigate(result.href);
    setQuery("");
    setIsOpen(false);
    setActiveIndex(-1);
    onNavigate?.();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
    setIsOpen(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!results.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => (current + 1) % results.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) =>
        current <= 0 ? results.length - 1 : current - 1
      );
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectResult(results[activeIndex]);
    }
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setQuery("");
    setIsOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const showResults = isOpen && query.trim().length > 0;

  return (
    <SearchRootStyled ref={rootRef}>
      <ScreenReaderOnlyStyled as="label" htmlFor={inputId}>
        Search components
      </ScreenReaderOnlyStyled>
      <SearchInputWrapperStyled>
        <IconSearchNormal1
          aria-hidden="true"
          className="header-search-icon"
          focusable="false"
        />
        <SearchInputStyled
          ref={inputRef}
          aria-activedescendant={
            showResults && activeIndex >= 0
              ? `${idPrefix}-component-option-${activeIndex}`
              : undefined
          }
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-describedby={statusId}
          aria-expanded={showResults}
          autoComplete="off"
          id={inputId}
          onChange={handleChange}
          onFocus={() => query.trim() && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search components…"
          role="combobox"
          type="search"
          value={query}
        />
        {query && (
          <SearchClearButtonStyled
            aria-label="Clear component search"
            onClick={handleClear}
            type="button">
            <IconClose aria-hidden="true" focusable="false" />
          </SearchClearButtonStyled>
        )}
      </SearchInputWrapperStyled>
      <ScreenReaderOnlyStyled aria-live="polite" id={statusId} role="status">
        {showResults
          ? `${results.length} component${
              results.length === 1 ? "" : "s"
            } found`
          : ""}
      </ScreenReaderOnlyStyled>
      {showResults && (
        <SearchResultsStyled
          aria-label="Components"
          id={listboxId}
          role="listbox">
          {results.length ? (
            results.map((result, index) => (
              <SearchResultStyled
                aria-selected={activeIndex === index}
                id={`${idPrefix}-component-option-${index}`}
                key={result.id}
                onClick={() => selectResult(result)}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                role="option"
                tabIndex={-1}
                type="button">
                <SearchResultCopyStyled>
                  <SearchResultNameStyled>{result.id}</SearchResultNameStyled>
                  <SearchResultTitleStyled>
                    {result.title}
                  </SearchResultTitleStyled>
                </SearchResultCopyStyled>
                <SearchResultArrowStyled>
                  <IconArrowRight aria-hidden="true" focusable="false" />
                </SearchResultArrowStyled>
              </SearchResultStyled>
            ))
          ) : (
            <SearchEmptyStyled>No matching components</SearchEmptyStyled>
          )}
        </SearchResultsStyled>
      )}
    </SearchRootStyled>
  );
};

const ResourceLinks = (): JSX.Element => (
  <>
    {RESOURCE_NAVIGATION.map((item) => (
      <ExternalLinkStyled
        aria-label={item.ariaLabel}
        href={item.href}
        key={item.href}
        rel={item.newTab ? "noreferrer noopener" : undefined}
        target={item.newTab ? "_blank" : undefined}>
        {item.label}
        <IconLink1 aria-hidden="true" focusable="false" />
      </ExternalLinkStyled>
    ))}
  </>
);

const Header: React.FC<IHeaderProps> = ({ isLogo, compact, className }) => {
  const theme = useTheme() as IThemeSite;
  const headerRef = useRef<HTMLElement>(null);
  const reactId = useId().replace(/:/g, "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const usesLegacySidebarLayout =
    className?.split(/\s+/).includes("sidebar-child") ?? false;
  const isCompact = compact ?? usesLegacySidebarLayout;
  const showLogo = Boolean(isLogo);
  const mobileNavigationId = `${reactId}-mobile-navigation`;
  const themeLabelId = `${reactId}-theme-label`;

  useEffect(() => {
    if (isCompact || !isMobileOpen) {
      return undefined;
    }

    const handlePointerDown = (event: globalThis.MouseEvent): void => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    const handleEscape = (event: globalThis.KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isCompact, isMobileOpen]);

  return (
    <HeaderStyled ref={headerRef} $compact={isCompact} className={className}>
      <HeaderInnerStyled>
        {showLogo && (
          <HeaderLogoStyled aria-label="UI Lib home" to="/">
            <img
              alt="UI Lib"
              height="35"
              src={theme.header?.logo}
              width="122"
            />
          </HeaderLogoStyled>
        )}

        {!isCompact && (
          <DesktopNavigationStyled aria-label="Primary navigation">
            {PRIMARY_NAVIGATION.map((item) => (
              <NavigationLinkStyled
                end={item.href === "/"}
                key={item.href}
                to={item.href}>
                {item.label}
              </NavigationLinkStyled>
            ))}
          </DesktopNavigationStyled>
        )}

        {!isCompact && (
          <HeaderSearchSlotStyled>
            <ComponentSearch idPrefix={`${reactId}-desktop`} />
          </HeaderSearchSlotStyled>
        )}

        {!isCompact && (
          <ResourceNavigationStyled aria-label="Developer resources">
            <ResourceLinks />
          </ResourceNavigationStyled>
        )}

        <HeaderSettingsStyled aria-labelledby={themeLabelId} role="group">
          <span data-header-theme-label id={themeLabelId}>
            Color theme
          </span>
          <AppThemeProvider.ThemeSwitcher />
        </HeaderSettingsStyled>

        {!isCompact && (
          <>
            <MenuButtonStyled
              aria-controls={mobileNavigationId}
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsMobileOpen((current) => !current)}
              type="button">
              {isMobileOpen ? (
                <IconClose aria-hidden="true" focusable="false" />
              ) : (
                <IconMenuHamburger aria-hidden="true" focusable="false" />
              )}
            </MenuButtonStyled>
            <MobilePanelStyled $isOpen={isMobileOpen} id={mobileNavigationId}>
              <ComponentSearch
                idPrefix={`${reactId}-mobile`}
                onNavigate={() => setIsMobileOpen(false)}
              />
              <MobileNavigationStyled aria-label="Primary navigation">
                {PRIMARY_NAVIGATION.map((item) => (
                  <NavigationLinkStyled
                    end={item.href === "/"}
                    key={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    to={item.href}>
                    {item.label}
                  </NavigationLinkStyled>
                ))}
              </MobileNavigationStyled>
              <MobileResourcesStyled aria-label="Developer resources">
                <ResourceLinks />
              </MobileResourcesStyled>
            </MobilePanelStyled>
          </>
        )}
      </HeaderInnerStyled>
    </HeaderStyled>
  );
};

export default Header;
