// Red truth: Ranged attack (magic 5), -1 DEF to foe

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
    let damage = ((1 + (Math.random() * from.dex >> 0)) + (from.int * 3)) - (to.int * 2);
    if (damage <= 0) damage = 1;
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--magical Damage--text">
        <div>{damage}</div>
        <div>-1 DEF</div>
      </div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
          effects: (to.effects.filter(e => e.id !== 'null' || e.value !== 'magical')).concat([{ id: 'def', value: -1, turns: 2 }]),
        }),
        [fromId]: Object.assign(from, {
          ult: from.ult + damage + 5,
          mp: from.mp - 4,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
