// Time leap: +4 INT, -1 other stats for 3 turns

import Inferno from 'inferno';

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">
      <div>+4 INT</div>
      <div>-1 ATK</div>
      <div>-1 DEF</div>
      <div>-1 SPD</div>
      <div>-1 DEX</div>
    </div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        mp: from.mp - 5,
        ult: from.ult + 5,
        int: from.int + 4 > 10 ? 10 : from.int + 4,
        atk: from.atk - 1 < 1 ? 1 : from.atk - 1,
        def: from.def - 1 < 1 ? 1 : from.def - 1,
        spd: from.spd - 1 < 1 ? 1 : from.spd - 1,
        dex: from.dex - 1 < 1 ? 1 : from.dex - 1,
        effects: from.effects.concat([
          { id: 'int', value: 4, turns: 3 },
          { id: 'atk', value: -1, turns: 3 },
          { id: 'def', value: -1, turns: 3 },
          { id: 'spd', value: -1, turns: 3 },
          { id: 'dex', value: -1, turns: 3 },
        ]),
      }),
    }),
  });
  setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
};
