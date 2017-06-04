// Sill: Heal 3*INT

import Inferno from 'inferno';
import Rance from 'modules/character/rance';

const baseStats = Rance.getBaseStats();

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const healed = (Math.random() * from.dex >> 0) + (from.int * 3);
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">+{healed} HP</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        hp: from.hp + healed > baseStats.hp ? baseStats.hp : from.hp + healed,
        mp: from.mp - 5,
        ult: from.ult + healed,
      }),
    }),
  });
  setTimeout(() => self.setState({ particle: null }), 1000);
};
