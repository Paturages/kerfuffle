// Blue truth: +2 SPD self, -2 SPD foe
// Range 5

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
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--magical Damage--text">-2 SPD</div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          effects: to.effects.concat([{ id: 'spd', value: -2, turns: 1 }]),
        }),
        [fromId]: Object.assign(from, {
          ult: from.ult + 5,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
    setTimeout(() => self.setState({
      particle: <div className="Damage Damage--magical Damage--text">+2 SPD</div>,
      status: Object.assign(self.state.status, {
        [fromId]: Object.assign(from, {
          effects: to.effects.concat([{ id: 'spd', value: 2, turns: 1 }]),
          ult: from.ult + 5,
          mp: from.mp - 6,
        }),
      }),
    }), 1100);
    setTimeout(() => self.setState({ particle: null }), 2100);
  }
};
