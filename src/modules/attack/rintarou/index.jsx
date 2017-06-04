import madScientist from './mad-scientist';
import dMail from './d-mail';
import timeLeap from './time-leap';
import timeMachine from './time-machine';

export default [
  {
    id: 'madScientist',
    name: 'Mad Scientist',
    mp: 5,
    range: 3,
    description: "Hey mister, I am mad scientist. It's so COOOOL! Sonovabitch. Utterly confuse the foe and skip their next turn.",
    do: madScientist,
  },
  {
    id: 'dMail',
    name: 'D-Mail',
    mp: 4,
    range: 5,
    description: 'Magic damage with a chance to inflict stat loss.',
    do: dMail,
  },
  {
    id: 'timeLeap',
    name: 'Time Leap',
    mp: 5,
    self: true,
    description: 'Strange memories from the future. Grants +4 INT but lowers all other stats by 1 for 3 turns.',
    do: timeLeap,
  },
  {
    ult: 150,
    id: 'timeMachine',
    name: 'Time Machine',
    self: true,
    description: "Let's go back! Recover 33% total HP and MP.",
    do: timeMachine,
  },
];
