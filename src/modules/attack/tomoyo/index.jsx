import kick from './kick';
import youhei from './youhei';
import reputation from './reputation';
import miracle from './miracle';

export default [
  {
    id: 'kick',
    name: 'Kick combo',
    mp: 3,
    range: 1,
    description: 'Dishes out multiple kicks.',
    do: kick,
  },
  {
    id: 'youhei',
    name: 'Sunohara Youhei',
    mp: 3,
    range: 4,
    description: "It's as good as a projectile as any.",
    do: youhei,
  },
  {
    id: 'reputation',
    name: 'Reputation',
    mp: 3,
    self: true,
    description: "Gang Slayer, Studen Council President... There's many reasons to respect Sakagami Tomoyo. +1 DEF, +1 INT for 3 turns.",
    do: reputation,
  },
  {
    ult: 150,
    id: 'miracle',
    name: 'Miracle of the Light Orbs',
    self: true,
    description: 'A strange wish granting power coming from another world... Heals 50% of total HP.',
    do: miracle,
  },
];
