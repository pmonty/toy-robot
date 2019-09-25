import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "..";
import { RobotActions } from "./actions";

export interface Coordinate {
  x: number;
  y: number;
}

export interface RobotState {
  isPlaced: boolean;
  location: Coordinate;
  facing: Coordinate;
  log: any;
}

// Map facing instruction
export type Direction = "NORTH" | "SOUTH" | "WEST" | "EAST";
export type Facing = Record<Direction | string, Coordinate>;
export const FACING: Facing = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 }
};

export type ThunkReturn<R> = ThunkAction<
  R,
  ApplicationState,
  null,
  RobotActions
>;

export type AsyncActionCreator<R> = ActionCreator<ThunkReturn<R>>;
