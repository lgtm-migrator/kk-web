import "./style.module.scss";

import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import uniqid from "uniqid";

type Row = ComponentPropsWithoutRef<"td">["children"][];

export type TableProps = {
  rows: Row[];
};

const Table: FC<TableProps> = ({ rows }) => {
  const children = useMemo(
    () =>
      rows.map((row) => {
        const tds = row.map((value) => (
          <td key={uniqid()} styleName="td">
            {value}
          </td>
        ));

        return <tr key={uniqid()}>{tds}</tr>;
      }),
    [rows]
  );

  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
