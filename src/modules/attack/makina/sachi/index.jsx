// Sachi: Plants a bomb that explodes in 10 turns

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">Planted bomb!</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 5,
      }),
    }),
    effects: self.state.effects.concat([{ id: 'bomb', position: from.position, turns: 10 }]),
  });
  setTimeout(() => self.setState({ particle: null }), 1000);
};
