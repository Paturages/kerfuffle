// Lucky find: Random stat bonus

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const find = ['atk', 'def', 'spd', 'dex', 'int'][Math.random() * 5 >> 0];
  const value = 1 + (Math.random() * 2 >> 0);
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">{`+${value} ${find.toUpperCase()}`}</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 5,
        ult: from.ult + 5,
        [find]: from[find] + value > 10 ? 10 : from[find] + value,
        effects: from.effects.concat([
          { id: find, value, turns: 1 },
        ]),
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
