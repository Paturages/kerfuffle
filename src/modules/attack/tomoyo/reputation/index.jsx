// Reputation: +1 DEF, +1 INT

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">
      <div>+1 INT</div>
      <div>+1 DEF</div>
    </div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 3,
        ult: from.ult + 5,
        int: from.int + 1 > 10 ? 10 : from.int + 1,
        def: from.def + 1 > 10 ? 10 : from.def + 1,
        effects: from.effects.concat([
          { id: 'int', value: 1, turns: 3 },
          { id: 'def', value: 1, turns: 3 },
        ]),
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
