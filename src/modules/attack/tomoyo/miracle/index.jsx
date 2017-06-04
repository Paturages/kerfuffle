// Miracle: Heals 50% HP

import Inferno from 'inferno';
import Tomoyo from 'modules/character/tomoyo';

const baseStats = Tomoyo.getBaseStats();

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const healed = baseStats.hp / 2 >> 0;
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">+{healed} HP</div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        hp: from.hp + healed > baseStats.hp ? baseStats.hp : from.hp + healed,
        ult: 0,
      }),
    }),
  });
  setTimeout(() => self.setState({ particle: null }), 1000);
};
