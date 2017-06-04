import acid from './acid';
import intimidation from './intimidation';
import brain from './brain';
import cell from './cell';

export default [
  {
    id: 'acid',
    name: 'Gastric Acid',
    mp: 2,
    range: 5,
    description: 'Ranged attack. Gross.',
    do: acid,
  },
  {
    id: 'intimidation',
    name: 'Intimidation',
    mp: 4,
    range: 3,
    description: "Saya's real appearance has been known to inflict insanity to humans. Inflicts -1 INT, -1 DEF, -1 SPD for 2 turns.",
    do: intimidation,
  },
  {
    id: 'brain',
    name: 'Brain manipulation',
    mp: 6,
    range: 2,
    description: 'Lets humans see Saya as a little girl, to the detriment of the rest of the world. -2 SPD, -1 INT, -1 ATK for 2 turns',
    do: brain,
  },
  {
    ult: 150,
    id: 'cell',
    name: 'Cell reconstruction',
    range: 1,
    description: 'A tedious process that transforms a human into a being similar to Saya. The foe will inherit Saya\'s abilities and reduced stats for 3 turns.',
    do: cell,
  },
];
