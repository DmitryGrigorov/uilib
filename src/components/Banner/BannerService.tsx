import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
  PropsWithChildren
} from "react";
import { createPortal } from "react-dom";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IBannerContext, IBannerService, IBannerProps } from "./types";
import { getContainerBanner } from "./helpers";
import Banner from "./Banner";

const BannerContext = createContext<IBannerContext>({
  bannerShow: () => () => {
    /* */
  }
});
BannerContext.displayName = "BannerContext";

export const BannerService: React.FC<PropsWithChildren<IBannerService>> = ({
  children,
  idContainer
}) => {
  const [banners, setBanners] = useState(
    new Map<
      string,
      {
        params: TPropsWithAttributes<IBannerProps>;
        container: HTMLDivElement;
      }
    >()
  );
  const bannersRef = useRef(
    Array.from(banners.values()).map(({ container }) => container)
  );

  useEffect(() => {
    bannersRef.current = Array.from(banners.values()).map(
      ({ container }) => container
    );
  }, [banners]);

  useEffect(
    () => () => {
      bannersRef.current.forEach((container) => {
        container.remove();
      });
    },
    []
  );

  const bannerShow = (props: IBannerProps): (() => void) => {
    // Called from event handlers, not during render - Math.random() here
    // is safe despite the new purity rule's static analysis.
    // eslint-disable-next-line react-hooks/purity
    const key = `banner-${Math.random()}`;
    const container = getContainerBanner(props.type, idContainer);
    setBanners(new Map(banners.set(key, { params: props, container })));

    return () => bannerClose(key);
  };

  const bannerClose = (key: string): void => {
    banners.get(key)?.container.remove();
    banners.delete(key);
  };

  return (
    <BannerContext.Provider value={{ bannerShow }}>
      {children}
      {Array.from(banners.keys()).map((key) => {
        const banner = banners.get(key);
        if (banner) {
          const handlePrimaryClick = (): void => {
            banner.params.onPrimaryClick?.();
            bannerClose(key);
          };
          return createPortal(
            <Banner {...banner.params} onPrimaryClick={handlePrimaryClick} />,
            banner.container
          );
        }
        return null;
      })}
    </BannerContext.Provider>
  );
};

export const useBannerService = (): [IBannerContext["bannerShow"]] => {
  const { bannerShow } = useContext(BannerContext);

  return [bannerShow];
};
