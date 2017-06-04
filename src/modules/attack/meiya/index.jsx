import minaruKamui from './minaru-kamui';
import mugenKidou from './mugen-kidou';
import takemikazuchi from './takemikazuchi';
import alternativeIV from './alternative-iv';

export default [
  {
    id: 'minaruKamui',
    name: 'Minaru Kamui',
    mp: 3,
    range: 1,
    description: 'Meiya\'s trusted katana. Dishes out a strong sword attack.',
    do: minaruKamui,
  },
  {
    id: 'mugenKidou',
    name: 'Mugen Kidou',
    mp: 5,
    range: 1,
    description: 'Meiya\'s specialty. Sends multiple sword hits.',
    do: mugenKidou,
  },
  {
    id: 'takemikazuchi',
    name: 'Takemikazuchi',
    mp: 8,
    self: true,
    description: "Yep. We're bringing mechas in there. Attacks an entire row or column by random (cannot hurt self).",
    do: takemikazuchi,
  },
  {
    ult: 150,
    id: 'alternativeIV',
    name: 'Alternative IV',
    self: true,
    description: 'The ultimate plan to save humanity. At which price though? BETA will swarm the map for 5 turns (can hurt self).',
    do: alternativeIV,
  },
];
