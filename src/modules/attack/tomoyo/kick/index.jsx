// Multi-kick: 3-6 phys 4

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
    const nbHits = 3 + (Math.random() * from.dex >> 0);
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      status: Object.assign(self.state.status, {
        [fromId]: Object.assign(from, {
          mp: from.mp - 3,
        }),
      }),
    });
    (function hit(i) {
      if (i === nbHits) return setTimeout(() => self.setState({ focus: null, particle: null }), 500);
      let damage = ((Math.random() * 5 >> 0) + (from.atk * 2)) - (to.def * 2);
      if (damage <= 0) damage = 1;
      self.setState({
        particle: <div className="Damage Damage--physical Damage--text">{damage}</div>,
        status: Object.assign(self.state.status, {
          [toId]: Object.assign(to, {
            hp: to.hp - damage,
            effects: i ? to.effects : to.effects.filter(e => e.id !== 'null' || e.value !== 'physical'),
          }),
          [fromId]: Object.assign(from, {
            ult: from.ult + damage,
          }),
        }),
      });
      if (!i) setTimeout(() => Object.assign(to, getStatsWithEffects(self, toId))); // Account for canceled 'null'
      setTimeout(() => self.setState({ particle: null }), 500);
      setTimeout(() => hit(i + 1), 600);
    }(0));
  }
};
