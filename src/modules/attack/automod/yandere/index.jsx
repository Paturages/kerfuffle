// Yandere: 10 SPD+ATK for 3 turns

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">10 ATK+SPD!</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        ult: 0,
        atk: 10,
        spd: 10,
        effects: from.effects.concat([
          { id: 'atk', value: 10, turns: 3 },
          { id: 'spd', value: 10, turns: 3 },
        ]),
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
