// Ultimate luck: Everyone receives random damage

import Inferno from 'inferno';
import getStatsWithEffects from 'repository/get-stats-with-effects';

export default (self, x, y) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const characterIds = Object.keys(self.state.status);

  self.setState({
    canAttack: false,
    attackRange: null,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        ult: 0,
      }),
    }),
  });

  (function hit(i) {
    if (i === 9) return setTimeout(() => self.setState({ focus: null, particle: null }), 500);
    const toId = characterIds[i];
    const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
    let damage = ((5 + (Math.random() * from.dex >> 0)) + (from.int * 3)) - (to.int * 2);
    if (damage <= 0) damage = 1;
    const stat = ['atk', 'def', 'spd', 'dex', 'int'][Math.random() * 5 >> 0];
    const value = Math.random() * 3 >> 0;
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--physical Damage--text">
        <div>{damage}</div>
        {value && <div>{`-${value} ${stat.toUpperCase()}`}</div>}
      </div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
          effects: (to.effects.filter(e => e.id !== 'null' || e.value !== 'magical')).concat(value ? [{
            id: stat, value: -value, turns: 3,
          }] : []),
        }),
      }),
    });
    setTimeout(() => self.setState({ particle: null }), 500);
    setTimeout(() => hit(i + 1), 600);
  }(0));
};
