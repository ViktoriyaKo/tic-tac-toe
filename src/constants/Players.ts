import cross from '/icons/cross.png';
import zero from '/icons/zero.png';

export enum PlayerMark {
  CROSS = 'X',
  ZERO = 'O',
}

export const Players = [
  { name: 'Player #1', icon: cross },
  { name: 'Player #2', icon: zero },
];

export const DRAW = 'DRAW';
