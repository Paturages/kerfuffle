import blueTruth from './blue-truth';
import redTruth from './red-truth';
import endlessNine from './endless-nine';
import goldenTruth from './golden-truth';

export default [
  {
    id: 'redTruth',
    name: 'Red Truth',
    mp: 4,
    range: 5,
    description: 'The truth hurts! Ranged magic attack, inflicts -1 DEF',
    do: redTruth,
  },
  {
    id: 'blueTruth',
    name: 'Blue Truth',
    mp: 6,
    range: 5,
    description: 'Your truth is no match for me! Drains 2 SPD from foe',
    do: blueTruth,
  },
  {
    id: 'endlessNine',
    name: 'Endless Nine',
    mp: 5,
    self: true,
    description: 'His magical resistance is off the charts! Nullifies next received ability',
    do: endlessNine,
  },
  {
    id: 'goldenTruth',
    ult: 100,
    name: 'Golden Truth',
    range: -1,
    description: 'I am the game master! Teleports any foe to any location.',
    do: goldenTruth,
  },
];
