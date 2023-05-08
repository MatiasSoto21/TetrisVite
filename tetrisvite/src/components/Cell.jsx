import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => {
  let color = TETROMINOS[type].color;
  let borderColor = TETROMINOS[type].border;
  return (
    /*     <StyledCell type={type} css={TETROMINOS[type].css}>

    </StyledCell> */
    <div className={color + `  border-2 ${borderColor}`}></div>
  );
};

export default React.memo(Cell);
