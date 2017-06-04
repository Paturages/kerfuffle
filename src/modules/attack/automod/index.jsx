import flair from './flair';
import _delete from './delete';
import ban from './ban';
import yandere from './yandere';

export default [
  {
    id: 'flair',
    name: 'Flair',
    mp: 2,
    range: 5,
    description: 'Flairing a foe lets people know more about them. Inflicts -1 DEF for 2 turns.',
    do: flair,
  },
  {
    id: 'delete',
    name: 'Delete',
    mp: 4,
    range: 5,
    description: "Disables a foe's ability by random for 2 turns.",
    do: _delete,
  },
  {
    id: 'ban',
    name: 'Ban',
    mp: 8,
    range: 5,
    description: "Skips a foe's turn",
    do: ban,
  },
  {
    id: 'yandere',
    ult: 100,
    name: 'Yandere',
    self: true,
    description: 'Automod-chan goes yandere! 10 SPD and ATK, abilities disabled for 3 turns',
    do: yandere,
  },
];
