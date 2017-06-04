// Brain manipulation: -2 SPD, -1 INT, -1 ATK
// Range: 2

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
      particle: <div className="Damage Damage--magical Damage--text">
        <div>-2 SPD</div>
        <div>-1 INT</div>
        <div>-1 ATK</div>
      </div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          effects: to.effects.concat([
            { id: 'spd', value: -2, turns: 2 },
            { id: 'int', value: -1, turns: 2 },
            { id: 'atk', value: -1, turns: 2 },
          ]),
        }),
        [fromId]: Object.assign(from, {
          mp: from.mp - 6,
          ult: from.ult + 5,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
