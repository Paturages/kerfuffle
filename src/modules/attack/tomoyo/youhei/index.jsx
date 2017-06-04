// Sunohara Youhei: Ranged attack (5 phys)
// Range: 4

import Inferno from 'inferno';
import getStatsWithEffects from 'repository/get-stats-with-effects';

export default (self, x, y) => {
  const toId = Object.keys(self.state.status).find((c) => {
    const [cx, cy] = self.state.status[c].position;
    return cx === x && cy === y;
  });
  if (toId) {
    const fromId = self.state.order[self.state.turn % 9];
    const from = self.state.status[fromId];
    const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
    let damage = ((5 + (Math.random() * from.dex >> 0)) + (from.atk * 3)) - (to.def * 2);
    if (damage <= 0) damage = 1;
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--physical Damage--text">{damage}</div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
          effects: to.effects.filter(e => e.id !== 'null' || e.value !== 'physical'),
        }),
        [fromId]: Object.assign(from, {
          mp: from.mp - 3,
          ult: from.ult + damage,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
