import { ORIENTATION } from "../robot/types";

export const getFacingDirection: any = ({ x, y }) => {
  const keys = Object.keys(ORIENTATION);

  return keys.find(k => {
    const value = ORIENTATION[k];

    return value.x === x && value.y === y;
  });
};
