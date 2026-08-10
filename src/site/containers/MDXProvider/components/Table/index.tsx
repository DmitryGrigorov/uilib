import React, {
  PropsWithChildren,
  PropsWithRef,
  useRef,
  useState
} from "react";
import { ITableProps, TableStyled } from "./styles";

const Table: React.FC<PropsWithRef<PropsWithChildren<ITableProps>>> = ({
  children
}) => {
  const [isScroll, setScroll] = useState<boolean>(false);
  const ref = useRef<HTMLTableElement>(null);

  const handleScroll = (): void => {
    if ((ref.current?.scrollLeft ?? 0) > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <TableStyled onScroll={handleScroll} isScroll={isScroll} ref={ref}>
      {children}
    </TableStyled>
  );
};

export default Table;
