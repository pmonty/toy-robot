# Toy-Robot Challenge

React and Redux implementation of toy robot console application.

## Tools

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org)
- [React-Redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [FuseBox](https://fuse-box.org/)
- [Jest](https://jestjs.io)
- [React-Testing-Library](https://testing-library.com/)

## Install

```javascript
git clone https://github.com/pmonty/toy-robot.git
cd toy-robot
yarn install
```

## Run

```javascript
yarn run develop
```

## Commands

<b>PLACE X,Y,F</b>
This command will place the robot at its initial origin (X,Y) facing in the direction provided (NORTH, SOUTH, EAST, WEST)

<b>MOVE</b>
This command will move the robot one coordinate forward the way it is facing

<b>LEFT</b>
This command will change the direction the robot is facing.

<b>RIGHT</b>
This command will change the direction the robot is facing.

<b>REPORT</b>
This command will report the current location of the robot.

<b>EXPECTED RESULTS</b>
<b>a)----------------</b>
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH

<b>b)----------------</b>
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST

<b>c)----------------</b>
PLACE 4,4,NORTH
MOVE (will add 'No square ahead' to log)
TEST (will add 'Invalid command entered.' to log)
REPORT
Output: 4,4,NORTH

## Tests

```javascript
yarn run test
```

## TODO

- Grid/Table with robot animation using [React-Motion](https://github.com/chenglou/react-motion)
- Dockerfile setup [Docker](https://docs.docker.com/)
- baseUrl and moduleResolution tidy up
- fix command container test
- UI for form and use Formik
- Constants and helper functions
