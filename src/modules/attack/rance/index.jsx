import attack from './attack';
import chaos from './chaos';
import sill from './sill';
import h from './h';

export default [
  {
    id: 'chaos',
    name: 'Chaos',
    mp: 3,
    range: 1,
    description: 'The Black Sword. Sword attack that inflicts -1 INT and -1 ATK for the next turn.',
    do: chaos,
  },
  {
    id: 'attack',
    name: 'Rance attack',
    mp: 3,
    range: 1,
    description: "Rance's favorite attack. Strong sword attack.",
    do: attack,
  },
  {
    id: 'sill',
    name: 'Sill Plain',
    mp: 5,
    self: true,
    description: "Rance's faithful slave. Heals self.",
    do: sill,
  },
  {
    ult: 150,
    id: 'h',
    name: 'H',
    self: true,
    description: "It's H time! +4 ATK against female characters for 3 turns (Saya does not count).",
    do: h,
  },
];
