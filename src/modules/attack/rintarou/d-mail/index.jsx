// D-Mail: Damage via timeline change

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
    let damage = ((5 + (Math.random() * from.dex >> 0)) + (from.int * 3)) - (to.int * 2);
    if (damage <= 0) damage = 1;
    const statLoss = Math.random() < 0.3;
    const stat = statLoss ? ['atk', 'def', 'spd', 'dex', 'int'][Math.random() * 5 >> 0] : '';
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--magical Damage--text">
        <div>{damage}</div>
        {stat && <div>-1 {stat.toUpperCase()}</div>}
      </div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
          effects: (to.effects.filter(e => e.id !== 'null' || e.value !== 'magical')).concat(stat ? [{
            id: stat, value: -1, turns: 2,
          }] : []),
        }),
        [fromId]: Object.assign(from, {
          mp: from.mp - 4,
          ult: from.ult + damage + (stat ? 5 : 0),
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
