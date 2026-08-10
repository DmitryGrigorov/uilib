import React, {
  forwardRef,
  PropsWithRef,
  useMemo,
  useState,
  useEffect
} from "react";
import {
  IconArrowLeft1,
  IconArrowRight1,
  IconMoreCircle
} from "@dmitrygrigorov/icons";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import Button from "../Button";
import Divider from "../Divider";
import { P1 } from "../typography";
import { IPaginationProps } from "./types";
import PaginationControl from "./components/PaginationControl/PaginationControl";
import PaginationPageSelection from "./components/PaginationPageSelection/PaginationPageSelection";
import {
  PaginationContainer,
  ElementsContainer,
  PageElement,
  Dots,
  ELEMENT_WIDTH,
  ELEMENTS_GAP,
  MinimizedContainer,
  TrailIcon,
  PaginationConfiguration,
  PaginationHeader
} from "./style";
import { fillArray } from "./helpers";

const Pagination = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<PropsWithRef<IPaginationProps>>
>(
  (
    {
      iconNext,
      iconPrev,
      generalPages = 1,
      totalPages,
      className,
      switcherTextPrev,
      switcherTextNext,
      isShowSwitchers,
      currentPage = 1,
      isMinimized = false,
      onPageChange,
      width,
      isDisabled,
      isFill,
      isShowConfig = false,
      isOpenPaginationConf = false,
      onToggle,
      paginationConf,
      isShowGoToPage,
      testId = "testIDWithoutName"
    },
    ref
  ) => {
    const [isShown, setIsShown] = useState<boolean>(isOpenPaginationConf);
    const totalPagesRounded = Math.floor((totalPages || generalPages) ?? 0);
    const [isMinimizedLocal, setIsMinimizedLocal] = useState(isMinimized);
    const renderPrevIcon = useMemo((): JSX.Element | undefined => {
      if (typeof switcherTextPrev !== "undefined") {
        return undefined;
      } else if (typeof iconPrev === "undefined") {
        return <IconArrowLeft1 width={16} height={16} />;
      } else {
        return iconPrev;
      }
    }, [iconPrev, switcherTextPrev]);

    const renderNextIcon = useMemo((): JSX.Element | undefined => {
      if (typeof switcherTextNext !== "undefined") {
        return undefined;
      } else if (typeof iconNext === "undefined") {
        return <IconArrowRight1 width={16} height={16} />;
      } else {
        return iconNext;
      }
    }, [iconNext, switcherTextNext]);

    const [visiblePages, setVisiblePages] = React.useState<number[]>([]);
    const elementsContainerRef = React.useRef<HTMLDivElement>(null);
    const minimizedContainerRef = React.useRef<HTMLDivElement>(null);
    const allPagesArr = fillArray(totalPagesRounded, 1);
    const allPages = allPagesArr.map((num) => ({
      label: String(num),
      value: num
    }));

    useEffect(() => {
      setVisiblePages(fillArray(totalPagesRounded - 2, 2));
    }, [totalPagesRounded]);

    React.useLayoutEffect(() => {
      if (totalPagesRounded < 5) {
        return;
      }
      let resizeObserver: ResizeObserver;

      if (isMinimizedLocal) {
        resizeObserver = new ResizeObserver(() => {
          if (
            (minimizedContainerRef.current?.clientWidth ?? 0) >=
            (ELEMENT_WIDTH + ELEMENTS_GAP) * 5
          ) {
            isMinimizedLocal && setIsMinimizedLocal(isMinimized);
          }
        });
        minimizedContainerRef.current &&
          resizeObserver.observe(minimizedContainerRef.current);
      } else {
        resizeObserver = new ResizeObserver(() => {
          if (
            (elementsContainerRef.current?.clientWidth ?? 0) <
            (ELEMENT_WIDTH + ELEMENTS_GAP) * 5
          ) {
            !isMinimizedLocal && setIsMinimizedLocal(true);
          }

          const visibleElementsCount = Math.min(
            Math.floor(
              ((elementsContainerRef.current?.clientWidth ?? 0) -
                2 * (ELEMENT_WIDTH + ELEMENTS_GAP)) /
                (ELEMENT_WIDTH + ELEMENTS_GAP)
            ),
            totalPagesRounded - 2
          );

          const newStartElement = Math.min(
            Math.max(currentPage - Math.floor(visibleElementsCount / 2), 2),
            Math.max(totalPagesRounded - visibleElementsCount, 2)
          );

          let newVisiblePages = fillArray(
            visibleElementsCount,
            newStartElement
          );

          const _isLeftEllipsis = newVisiblePages[0] >= 3;
          const _isRightEllipsis =
            newVisiblePages[newVisiblePages.length - 1] <=
            totalPagesRounded - 2;

          if (_isLeftEllipsis) {
            newVisiblePages = newVisiblePages.slice(1);
          }

          if (_isRightEllipsis) {
            newVisiblePages = newVisiblePages.slice(
              0,
              newVisiblePages.length - 1
            );
          }

          setVisiblePages(newVisiblePages);
        });

        elementsContainerRef.current &&
          resizeObserver.observe(elementsContainerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, [
      currentPage,
      totalPagesRounded,
      generalPages,
      isMinimizedLocal,
      isMinimized
    ]);

    const renderError = (message: string): JSX.Element => (
      <P1 className="error-text" type="phoenix" size={16}>
        {message}
      </P1>
    );

    const handlePaginationConf = (): void => {
      onToggle?.(!isShown);
      setIsShown(!isShown);
    };

    const renderErrors = (): JSX.Element | null => {
      if (totalPagesRounded < 1) {
        return renderError("The total number of pages must be greater than 0.");
      } else if (typeof currentPage === "undefined" || currentPage < 1) {
        return renderError("The current page value is invalid.");
      } else if (currentPage > totalPagesRounded) {
        return renderError(
          "The current page exceeds the total number of pages."
        );
      }
      return null;
    };

    const errorComponent = renderErrors();

    return (
      <PaginationContainer
        ref={ref}
        isFill={isFill}
        width={width}
        className={className}
        data-testid={`${testId}_pagination`}
        data-element="pagination">
        {errorComponent ? (
          errorComponent
        ) : (
          <>
            <PaginationHeader data-element="pagination_header">
              {(isShowSwitchers || isMinimizedLocal) && (
                <Button
                  viewType="ghost"
                  size="xs"
                  onClick={() => onPageChange?.(currentPage - 1)}
                  icon={renderPrevIcon}
                  isDisabled={isDisabled || currentPage <= 1}
                  data-element="pagination-prevBtn">
                  {switcherTextPrev}
                </Button>
              )}
              {isMinimizedLocal ? (
                <MinimizedContainer ref={minimizedContainerRef}>
                  <PageElement
                    isDisabled={isDisabled}
                    isSelected
                    data-element="pagination-pageElement">
                    <P1 type="phoenix" size={16}>
                      {currentPage}
                    </P1>
                  </PageElement>
                </MinimizedContainer>
              ) : (
                <ElementsContainer
                  data-element="pagination-elementContainer"
                  ref={elementsContainerRef}>
                  <PageElement
                    isDisabled={isDisabled}
                    isSelected={currentPage === 1}
                    onClick={() =>
                      !isDisabled && currentPage !== 1 && onPageChange?.(1)
                    }
                    data-element="pagination-pageElement">
                    <P1 type="phoenix" size={16}>
                      1
                    </P1>
                  </PageElement>
                  {totalPagesRounded > 5 && visiblePages[0] !== 2 && (
                    <Dots isDisabled={isDisabled}>
                      <P1 type="phoenix" size={16}>
                        ...
                      </P1>
                    </Dots>
                  )}
                  {visiblePages.map((e) => (
                    <PageElement
                      isDisabled={isDisabled}
                      isSelected={currentPage === e}
                      key={e}
                      onClick={() =>
                        !isDisabled && currentPage !== e && onPageChange?.(e)
                      }
                      data-element="pagination-pageElement">
                      <P1 type="phoenix" size={16}>
                        {e}
                      </P1>
                    </PageElement>
                  ))}
                  {totalPagesRounded > 5 &&
                    visiblePages[visiblePages.length - 1] <=
                      totalPagesRounded - 2 && (
                      <Dots isDisabled={isDisabled}>
                        <P1 type="phoenix" size={16}>
                          ...
                        </P1>
                      </Dots>
                    )}
                  {totalPagesRounded > 1 && (
                    <PageElement
                      isDisabled={isDisabled}
                      isSelected={currentPage === totalPagesRounded}
                      onClick={() =>
                        !isDisabled &&
                        currentPage !== totalPagesRounded &&
                        onPageChange?.(totalPagesRounded)
                      }
                      data-element="pagination-pageElement">
                      <P1 type="phoenix" size={16}>
                        {totalPagesRounded ?? generalPages}
                      </P1>
                    </PageElement>
                  )}
                </ElementsContainer>
              )}

              {(isShowSwitchers || isMinimizedLocal) && (
                <Button
                  viewType="ghost"
                  size="xs"
                  onClick={() => onPageChange?.(currentPage + 1)}
                  icon={renderNextIcon}
                  isDisabled={isDisabled || currentPage >= totalPagesRounded}
                  data-element="pagination-nextBtn">
                  {switcherTextNext}
                </Button>
              )}
              {isShowConfig && (
                <TrailIcon
                  isDisabled={isDisabled}
                  onClick={() => !isDisabled && handlePaginationConf()}>
                  <IconMoreCircle />
                </TrailIcon>
              )}
            </PaginationHeader>
            {isShown && !isDisabled && (
              <PaginationConfiguration data-element="paginationConf">
                <PaginationControl
                  itemsPerPage={paginationConf?.itemsPerPage}
                  onItemsPerPageChange={paginationConf?.onItemsPerPageChange}
                />
                {isShowGoToPage && (
                  <>
                    <Divider />
                    <PaginationPageSelection
                      pages={allPages}
                      onPageChange={(selectedPage) =>
                        onPageChange?.(selectedPage)
                      }
                    />
                  </>
                )}
              </PaginationConfiguration>
            )}
          </>
        )}
      </PaginationContainer>
    );
  }
);

Pagination.displayName = "Pagination";

export default Pagination;
