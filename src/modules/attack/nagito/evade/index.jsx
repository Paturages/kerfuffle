// Lucky evade: Avoid next inflicted hit

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">Hit protection!</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 4,
        ult: from.ult + 5,
        effects: from.effects.concat([
          { id: 'null', value: 'physical' },
        ]),
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
