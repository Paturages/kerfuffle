// Cell reconstruction: Transforms foe into lesser version of Saya
// Range: 1

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
      particle: <div className="Damage Damage--magical Damage--text">Cell reconstruction!</div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          effects: to.effects.concat([
            { id: 'saya', turns: 3 },
          ]),
        }),
        [fromId]: Object.assign(from, {
          ult: 0,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
