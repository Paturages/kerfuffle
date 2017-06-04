import Inferno from 'inferno';
import getStatsWithEffects from './get-stats-with-effects';
import Environment from './environment';

const move = function move(self, x, y) {
  const s = self.state;
  const c = s.order[s.turn % 9];
  const [cx, cy] = s.status[c].position;
  if (cx === x && cy === y) return;
  self.setState({
    status: Object.assign(s.status, {
      [c]: Object.assign(s.status[c], {
        moves: s.status[c].moves - (Math.abs(cx - x) + Math.abs(cy - y)),
        position: [x, y],
      }),
    }),
  });
};
const selectAttack = (self, attack) => self.setState({
  ability: attack,
  attackRange: !attack && self.state.attackRange != null ? null : (
    attack ? (attack.range || 0) : 1
  ),
});
const basicAttack = (self, x, y) => {
  const toId = Object.keys(self.state.status).find((c) => {
    const [cx, cy] = self.state.status[c].position;
    return cx === x && cy === y;
  });
  if (toId) {
    const fromId = self.state.order[self.state.turn % 9];
    const from = self.state.status[fromId];
    const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId, from.effects.find(e => e.id === 'h')));
    let damage = ((1 + (Math.random() * 8 >> 0)) + (from.atk * 3)) - (to.def * 2);
    if (damage <= 0) damage = 1;
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--physical">{damage}</div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
          effects: to.effects.filter(e => e.id !== 'null' || e.value !== 'physical'),
        }),
        [fromId]: Object.assign(from, {
          ult: from.ult + damage,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};

/*
  Character effects catalogue:
  - atk, def, spd, dex, int: stat gain or loss (args: value, turns)
  - skip: skip the turn (args: turns)
  - disable: disable attack (args: value (ability.id), turns)
  - null: stop the next incoming entity (args: value (magical|physical))
  - h: +4 ATK against females (tomoyo|meiya|makina|automod) (args: turns)
  - saya: Base stats are 90% of Saya's rounded down (args: turns)
*/

/*
  Environment effects catalogue:
  * 9029: Deal damage to 10 random locations (args: turns)
  * bomb: if turns === 0, deal damage in a 3*3 area (args: position, turns)
  * beta: Deal damage to 10 random locations (args: turns)
*/

let do9029;
let doAltIV;
let doDetonate;
const triggerEnvironment = self => new Promise((resolve) => {
  setTimeout(() => {
    if (do9029) {
      self.setState({
        particle: <div className="Damage Damage--physical">Ichigaya helicopter swarm!</div>,
      });
      setTimeout(() => Environment.randomDamage(self, '9029'), 1000);
      do9029 = null;
      setTimeout(() => triggerEnvironment(self).then(() => resolve()), 8000);
    } else if (doAltIV) {
      self.setState({
        particle: <div className="Damage Damage--physical">BETA Attack!</div>,
      });
      setTimeout(() => Environment.randomDamage(self, 'beta'), 1000);
      doAltIV = null;
      setTimeout(() => triggerEnvironment(self).then(() => resolve()), 8000);
    } else if (doDetonate) {
      self.setState({
        particle: <div className="Damage Damage--physical">{"Oh my god it's a BOMB!"}</div>,
      });
      setTimeout(() => Environment.detonateBomb(self, doDetonate), 1000);
      doDetonate = null;
      setTimeout(() => triggerEnvironment(self).then(() => resolve()), 7000);
    } else {
      resolve();
    }
  });
});

const endTurn = (self) => {
  self.setState({
    effects: self.state.effects
      .map((e) => {
        if (e.id === '9029') do9029 = true;
        else if (e.id === 'beta') doAltIV = true;
        else if (e.id === 'sachi') doDetonate = e.turns === 1 ? e : null;
        if (e.turns === 1) return null;
        return Object.assign(e, { turns: e.turns - 1 });
      })
      .filter(_ => _),
  });
  console.log(self.state.effects, do9029, doAltIV, doDetonate);
  triggerEnvironment(self).then(() => {
    const oldCharacterId = self.state.order[self.state.turn % 9];
    const oldCharacter = self.state.status[oldCharacterId];
    if (oldCharacter.effects.length) {
      self.setState({
        status: Object.assign(self.state.status, {
          [oldCharacterId]: Object.assign(oldCharacter, {
            effects: oldCharacter.effects
              .map((s) => {
                if (s.turns === 1) return null;
                return Object.assign(s, { turns: s.turns - 1 });
              })
              .filter(_ => _),
          }),
        }),
      });
    }

    let newTurn = self.state.turn + 1;
    let isValid;
    while (!isValid) {
      const id = self.state.order[self.state.turn % 9];
      if (!(id in self.state.status)) newTurn += 1;
      else if (self.state.status[id].effects.find(x => x.id === 'skip')) {
        self.setState({
          status: Object.assign(self.state.status, {
            [id]: Object.assign(self.state.status[id], {
              effects: self.state.status[id].effects
                .map((s) => {
                  if (s.id !== 'skip') return s;
                  if (s.turns === 1) return null;
                  return Object.assign(s, { turns: s.turns - 1 });
                })
                .filter(_ => _),
            }),
          }),
        });
        newTurn += 1;
      } else isValid = true;
    }
    const newCharacterId = self.state.order[newTurn % 9];
    const newCharacter = self.state.status[newCharacterId];

    const background = Math.random() < 0.1 ? ['forest', 'mountain', 'lake'][Math.random() * 3 >> 0] : self.state.background;
    const statsWithEffects = getStatsWithEffects(self, newCharacterId);

    self.setState({
      background,
      turn: newTurn,
      canAttack: true,
      attackRange: null,
      ability: null,
      status: Object.assign(self.state.status, {
        [newCharacterId]: Object.assign(newCharacter, {
          moves: statsWithEffects.spd > 2 ? statsWithEffects.spd / 2 >> 0 : 1,
        }, statsWithEffects),
      }),
    });
  });
};

export default { move, selectAttack, basicAttack, endTurn };
