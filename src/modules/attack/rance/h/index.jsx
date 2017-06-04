// H: +2 ATK against females for 3 turns

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">H time!</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 4,
        ult: from.ult + 5,
        effects: from.effects.concat([
          { id: 'h', turns: 3 },
        ]),
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
