import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SnackBar from "../SnackBar";
import { SnackBarWrapper } from "../../styles";
import { TSnackBarParams } from "../../types";
import store from "./store";

const CONTAINER_SNACK_BAR = "uilib-snack-bar";

const SnackBarTransitionItem: React.FC<
  TSnackBarParams & Required<Pick<TSnackBarParams, "id">>
> = (params) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      classNames="snack-bar"
      in={true}
      timeout={300}>
      <SnackBar
        ref={nodeRef}
        closeSnackBar={() => onCloseSnackBar(params.id)}
        {...params}
      />
    </CSSTransition>
  );
};

export const SnackBarInstance: React.FC = () => {
  const [snackBarList, setSnackBarList] = useState<
    Array<TSnackBarParams & Required<Pick<TSnackBarParams, "id">>>
  >([]);
  const refInstance = useRef(null);
  let element = document.getElementById(CONTAINER_SNACK_BAR);
  if (!element) {
    element = document.createElement("div");
    element.setAttribute("id", CONTAINER_SNACK_BAR);
    document.body.appendChild(element);
  }

  const updateSnackBarList = (): void => {
    setSnackBarList([...store.data]);
  };

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" &&
      element &&
      element.children.length > 1
    ) {
      window.console.error(
        "Warning: You are using two instances SnackBarInstance. Use only one instance per application."
      );
    }
  }, []);

  useEffect(() => {
    store.subscribe(updateSnackBarList);

    return () => {
      store.unsubscribe(updateSnackBarList);
      element?.remove();
    };
  }, []);

  return createPortal(
    <SnackBarWrapper ref={refInstance}>
      <TransitionGroup component={null} appear enter exit>
        {snackBarList.map((params) => (
          <SnackBarTransitionItem key={params.id} {...params} />
        ))}
      </TransitionGroup>
    </SnackBarWrapper>,
    element
  );
};

export function openSnackBar(params: TSnackBarParams): void {
  const id = store.data.length + 1;
  store.add({ ...params, id: params.id || id });
}

const onCloseSnackBar = (id: number | string): void => {
  store.remove(id);
};
