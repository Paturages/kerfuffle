// Alternative IV: BETA swarms for 5 turns

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">Alternative IV!</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        ult: 0,
      }),
    }),
    effects: self.state.effects.concat([{ id: 'beta', turns: 5 }]),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
