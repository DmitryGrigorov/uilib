import React, { useContext, useEffect, useState, useCallback } from "react";
import { TKeyObjectType } from "../utils/types/typesDeepObject";
import { IFormInstance, IFormListField, IFormListProps } from "./types";
import { FormContext } from "./FormContext";

const List = <
  TValues extends Record<string, any>,
  P extends TKeyObjectType<TValues>
>({
  children,
  name
}: IFormListProps<TValues, P>): React.ReactElement => {
  const context = useContext(FormContext) as IFormInstance;
  const [fields, setFields] = useState<Array<IFormListField<TValues, P>>>([]);

  // Keep internal field list in sync with the externally-controlled form value.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const values = context.getFieldValue(name) as Array<any> | undefined;
    if (values) {
      setFields(
        values.map((_: any, index: number) => ({
          key: index,
          name: `${name}[${index}]`
        })) || []
      );
    }
  }, [name]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const add = useCallback(() => {
    setFields((prevValues) => {
      const newList = [...prevValues];
      newList.push({
        key: prevValues.length,
        name: `${name}[${prevValues.length}]`
      });
      return newList;
    });
  }, []);

  const remove = useCallback((index: number | number[]) => {
    setFields((prevValues) => {
      if (Array.isArray(index)) {
        index.forEach((i) => context.deleteValue(prevValues[i].name));
        return prevValues
          .filter((_, i) => !index.includes(i))
          .map((_, i) => ({
            key: i,
            name: `${name}[${i}]`
          }));
      } else {
        context.deleteValue(prevValues[index].name);
        return prevValues
          .filter((_, i) => i !== index)
          .map((_, i) => ({
            key: i,
            name: `${name}[${i}]`
          }));
      }
    });
  }, []);

  return <div>{children(fields, { add, remove })}</div>;
};

export default List;
