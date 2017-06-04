import Inferno from 'inferno';
import getStatsWithEffects from 'repository/get-stats-with-effects';

// 9029 + Alternative IV
const randomDamage = (self, effect) => {
  const positions = new Array(10).fill('')
    .map(() => [Math.random() * 16 >> 0, Math.random() * 16 >> 0]);
  (function hit(i) {
    if (i === 10) return setTimeout(() => self.setState({ focus: null, particle: null }), 500);
    const toId = Object.keys(self.state.status).find((c) => {
      if (effect === '9029' && c === 'makina') return false;
      const [cx, cy] = self.state.status[c].position;
      const [px, py] = positions[i];
      return cx === px && cy === py;
    });
    if (toId) {
      const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
      let damage = ((8 + (Math.random() * (8 * 2) >> 0)) + (8 * 4)) - (to.def * 2);
      if (damage <= 0) damage = 1;
      self.setState({
        particle: <div className="Damage Damage--physical Damage--text">{damage}</div>,
        focus: positions[i],
        status: Object.assign(self.state.status, {
          [toId]: Object.assign(to, {
            hp: to.hp - damage,
            effects: to.effects.filter(e => e.id !== 'null' || e.value !== 'physical'),
          }),
        }),
      });
      setTimeout(() => self.setState({ particle: null }), 400);
    } else {
      self.setState({
        focus: positions[i],
      });
    }
    return setTimeout(() => hit(i + 1), 500);
  }(0));
};

const detonateBomb = (self, detonation) => {
  const [dx, dy] = detonation.position;
  const positions = [
    [dx - 1, dy - 1], [dx, dy - 1], [dx + 1, dy - 1],
    [dx - 1, dy], [dx, dy], [dx + 1, dy],
    [dx - 1, dy + 1], [dx, dy + 1], [dx + 1, dy + 1],
  ];
  (function hit(i) {
    if (i === 9) return setTimeout(() => self.setState({ focus: null, particle: null }), 500);
    const [px, py] = positions[i];
    if (px < 0 || py < 0 || px > 15 || py > 15) return hit(i + 1);
    const toId = Object.keys(self.state.status).find((c) => {
      const [cx, cy] = self.state.status[c].position;
      const [_px, _py] = positions[i];
      return cx === _px && cy === _py;
    });
    if (toId) {
      const to = Object.assign(self.state.status[toId], getStatsWithEffects(self, toId));
      let damage = ((8 + (Math.random() * (8 * 2) >> 0)) + (7 * 4)) - (to.def * 2);
      if (damage <= 0) damage = 1;
      self.setState({
        particle: <div className="Damage Damage--physical Damage--text">{damage}</div>,
        focus: positions[i],
        status: Object.assign(self.state.status, {
          [toId]: Object.assign(to, {
            hp: to.hp - damage,
            effects: to.effects.filter(e => e.id !== 'null' || e.value !== 'physical'),
          }),
          makina: Object.assign(self.state.status.makina, {
            ult: self.state.status.makina.ult + damage,
          }),
        }),
      });
      setTimeout(() => self.setState({ particle: null }), 400);
    } else {
      self.setState({
        focus: positions[i],
      });
    }
    return setTimeout(() => hit(i + 1), 500);
  }(0));
};

export default { randomDamage, detonateBomb };
