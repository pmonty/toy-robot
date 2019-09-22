export interface Coordinate {
  x: number;
  y: number;
}

export interface RobotState {
  isPlaced: boolean;
  location: Coordinate;
  facing: Coordinate;
  commands: string[];
}

// Map facing instruction
export type Direction = "NORTH" | "SOUTH" | "WEST" | "EAST";
export type Orientation = Record<Direction, Coordinate>;
export const ORIENTATION: Orientation = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 }
};
