import React, {
  createContext,
  useRef,
  useState,
  useContext,
  PropsWithChildren
} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SnackBarWrapper } from "../../styles";
import { ISnackBarContext, TSnackBarParams } from "../../types";
import SnackBar from "../SnackBar";

const DEFAULT_DURATION = 3000;

const SnackBarContext = createContext<ISnackBarContext>({
  openSnackBar: () => "",
  closeSnackBar: () => null
});

const SnackBarProviderItem: React.FC<
  TSnackBarParams & {
    id: string | number;
    closeSnackBar: ISnackBarContext["closeSnackBar"];
  }
> = ({ id, closeSnackBar, ...value }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      classNames="snack-bar"
      in={true}
      timeout={300}>
      <SnackBar ref={nodeRef} id={id} closeSnackBar={closeSnackBar} {...value} />
    </CSSTransition>
  );
};

export const SnackBarProvider: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const [snackBars, setSnackBars] = useState(
    new Map<string | number, TSnackBarParams>()
  );

  const getKeySnackBar = (message: string): string | number | null => {
    for (const [key, value] of snackBars) {
      if (value.message === message) {
        return key;
      }
    }
    return null;
  };

  const openSnackBar = ({
    message,
    duration,
    id,
    ...props
  }: TSnackBarParams): number | string => {
    snackBars.entries();
    let keySnackBar = getKeySnackBar(message);
    if (!keySnackBar) {
      // eslint-disable-next-line react-hooks/purity
      keySnackBar = id || `snackBar-${Math.random()}`;
    }

    const timeoutId = setTimeout((): void => {
      closeSnackBar(keySnackBar);
    }, duration || DEFAULT_DURATION);

    const snackBar = snackBars.get(keySnackBar);
    if (snackBar) {
      setSnackBars(
        (_snackBars) =>
          new Map(
            _snackBars.set(keySnackBar, {
              message,
              timeoutId,
              count: snackBar.count ? snackBar.count + 1 : 2,
              ...props
            })
          )
      );
    } else {
      setSnackBars(
        (_snackBars) =>
          new Map(
            _snackBars.set(keySnackBar, {
              message,
              timeoutId,
              ...props
            })
          )
      );
    }
    return keySnackBar;
  };

  const closeSnackBar = (key: string | number): void => {
    setSnackBars((_snackBars) => {
      const copySnackBars = new Map(_snackBars);
      copySnackBars.delete(key);
      return new Map(copySnackBars);
    });
  };

  return (
    <SnackBarContext.Provider
      value={{
        openSnackBar,
        closeSnackBar
      }}>
      {children}
      <SnackBarWrapper>
        <TransitionGroup component={null} appear enter exit>
          {Array.from(snackBars.keys())
            .reverse()
            .map((key) => {
              const value = snackBars.get(key);
              if (value) {
                return (
                  <SnackBarProviderItem
                    key={key}
                    id={key}
                    closeSnackBar={closeSnackBar}
                    {...value}
                  />
                );
              }
              return null;
            })}
        </TransitionGroup>
      </SnackBarWrapper>
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = (): [
  ISnackBarContext["openSnackBar"],
  ISnackBarContext["closeSnackBar"]
] => {
  const { openSnackBar, closeSnackBar } = useContext(SnackBarContext);

  return [openSnackBar, closeSnackBar];
};
