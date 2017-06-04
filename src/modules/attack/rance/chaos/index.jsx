// Chaos: Sword attack, -1 INT/ATK to foe

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
    const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId, from.effects.find(e => e.id === 'h')));
    let damage = ((5 + (Math.random() * from.dex >> 0)) + (from.atk * 3)) - (to.def * 2);
    if (damage <= 0) damage = 1;
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--physical Damage--text">
        <div>{damage}</div>
        <div>-1 INT</div>
        <div>-1 ATK</div>
      </div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
          effects: (to.effects.filter(e => e.id !== 'null' || e.value !== 'physical')).concat([
            { id: 'int', value: -1, turns: 1 },
            { id: 'atk', value: -1, turns: 1 },
          ]),
        }),
        [fromId]: Object.assign(from, {
          mp: from.mp - 3,
          ult: from.ult + 5 + damage,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
