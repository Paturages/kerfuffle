import sideStep from './side-step';
import sniper from './sniper';
import sachi from './sachi';
import _9029 from './9029';

export default [
  {
    id: 'sideStep',
    name: 'Side-step',
    mp: 3,
    range: 1,
    description: "Attack that ignores the foe's defense.",
    do: sideStep,
  },
  {
    id: 'sniper',
    name: 'Sniper',
    mp: 5,
    range: 6,
    description: 'Long-ranged attack.',
    do: sniper,
  },
  {
    id: 'sachi',
    name: 'Komine Sachi',
    mp: 5,
    self: true,
    description: 'The faithful maid plants a bomb that will explode in 10 turns.',
    do: sachi,
  },
  {
    ult: 100,
    id: '9029',
    name: '9029',
    self: true,
    description: 'Call in helicopter swarms for 3 turns.',
    do: _9029,
  },
];
