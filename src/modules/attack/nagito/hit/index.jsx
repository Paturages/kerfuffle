// Lucky hit: Hit a random foe (magic 6)

import Inferno from 'inferno';
import getStatsWithEffects from 'repository/get-stats-with-effects';

export default (self, x, y) => {
  const characterIds = Object.keys(self.state.status);
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const toId = characterIds.filter(c => c !== 'nagito')[Math.random() * (characterIds.length - 1) >> 0];
  const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
  let damage = ((3 + (Math.random() * from.dex >> 0)) + (from.int * 2)) - (to.int * 2);
  if (damage <= 0) damage = 1;
  self.setState({
    canAttack: false,
    attackRange: null,
    focus: to.position,
    particle: <div className="Damage Damage--physical Damage--text">{damage}</div>,
    status: Object.assign(self.state.status, {
      [toId]: Object.assign(to, {
        hp: to.hp - damage,
        effects: to.effects.filter(e => e.id !== 'null' || e.value !== 'magical'),
      }),
      [fromId]: Object.assign(from, {
        mp: from.mp - 6,
        ult: from.ult + damage,
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
