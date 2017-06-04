// Takemikazuchi: Mecha swarm (phys 10 on random row or column)

import Inferno from 'inferno';
import getStatsWithEffects from 'repository/get-stats-with-effects';

export default (self, x, y) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 8,
      }),
    }),
  });

  const isLineDimensionX = Math.random() < 0.5;
  const lineNumber = Math.random() * 16 >> 0;
  const hitCharacters = Object.keys(self.state.status).reduce((obj, c) => {
    if (c === 'meiya') return obj;
    const [cx, cy] = self.state.status[c].position;
    if (isLineDimensionX && cy === lineNumber) obj[cx] = c;
    if (!isLineDimensionX && cx === lineNumber) obj[cy] = c;
    return obj;
  }, {});
  (function hit(i) {
    if (i === 16) return setTimeout(() => self.setState({ focus: null, particle: null }), 500);
    if (hitCharacters[i]) {
      const toId = hitCharacters[i];
      const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
      let damage = ((8 + (Math.random() * (from.dex * 2) >> 0)) + (from.atk * 4)) - (to.def * 2);
      if (damage <= 0) damage = 1;
      self.setState({
        particle: <div className="Damage Damage--physical Damage--text">{damage}</div>,
        focus: [
          isLineDimensionX ? i : lineNumber,
          !isLineDimensionX ? i : lineNumber,
        ],
        status: Object.assign(self.state.status, {
          [toId]: Object.assign(to, {
            hp: to.hp - damage,
            effects: to.effects.filter(e => e.id !== 'null' || e.value !== 'physical'),
          }),
          [fromId]: Object.assign(from, {
            ult: from.ult + damage,
          }),
        }),
      });
      setTimeout(() => self.setState({ particle: null }), 100);
    } else {
      self.setState({
        focus: [
          isLineDimensionX ? i : lineNumber,
          !isLineDimensionX ? i : lineNumber,
        ],
      });
    }
    return setTimeout(() => hit(i + 1), 200);
  }(0));
};
