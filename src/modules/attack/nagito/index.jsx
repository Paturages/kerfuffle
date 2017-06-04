import evade from './evade';
import find from './find';
import hit from './hit';
import ultimate from './ultimate';

export default [
  {
    id: 'evade',
    name: 'Lucky evasion',
    mp: 3,
    self: true,
    description: 'Entirely avoid the next inflicted hit.',
    do: evade,
  },
  {
    id: 'find',
    name: 'Lucky find',
    mp: 3,
    self: true,
    description: 'Oh, shiny! What does that do? Grants a random stat bonus for 3 turns.',
    do: find,
  },
  {
    id: 'hit',
    name: 'Lucky hit',
    mp: 3,
    self: true,
    description: "Whoops, that wasn't intentional! Hit a random opponent from anywhere.",
    do: hit,
  },
  {
    ult: 150,
    id: 'ultimate',
    name: 'Ultimate Luck',
    self: true,
    description: 'Hahahaha! I just have the best luck! Everyone (including you) receives random damage and stat losses for 5 turns.',
    do: ultimate,
  },
];
