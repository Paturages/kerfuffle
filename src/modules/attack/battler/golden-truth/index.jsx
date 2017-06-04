// Golden truth: Teleports a random character to anywhere

import Inferno from 'inferno';
import getStatsWithEffects from 'repository/get-stats-with-effects';

export default (self, x, y) => {
  const characterIds = Object.keys(self.state.status);
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const toId = characterIds.filter(c => c !== 'battler')[Math.random() * (characterIds.length - 1) >> 0];
  const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
  self.setState({
    canAttack: false,
    attackRange: null,
    focus: to.position,
  });
  setTimeout(() => self.setState({
    focus: [x, y],
    particle: <div className="Damage Damage--magical Damage--text">Teleport!</div>,
    status: Object.assign(self.state.status, {
      [toId]: Object.assign(to, {
        position: [x, y],
      }),
      [fromId]: Object.assign(from, {
        ult: 0,
      }),
    }),
  }), 1000);
  setTimeout(() => self.setState({ focus: null, particle: null }), 2000);
};
