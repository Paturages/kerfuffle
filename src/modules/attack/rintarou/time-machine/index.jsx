// Time machine: Recover 33% HP + MP

import Inferno from 'inferno';
import Rintarou from 'modules/character/rintarou';

const baseStats = Rintarou.getBaseStats();

export default (self) => {
  const fromId = self.state.order[self.state.turn % 9];
  const from = self.state.status[fromId];
  const healedHP = baseStats.hp / 3 >> 0;
  const healedMP = (baseStats.int * 10) / 3 >> 0;
  self.setState({
    canAttack: false,
    attackRange: null,
    particle: <div className="Damage Damage--magical Damage--text">
      <div>+{healedHP} HP</div>,
      <div>+{healedMP} MP</div>
    </div>,
    status: Object.assign(self.state.status, {
      [fromId]: Object.assign(from, {
        hp: from.hp + healedHP > baseStats.hp ? baseStats.hp : from.hp + healedHP,
        mp: from.mp + healedMP > baseStats.int * 10 ? baseStats.int * 10 : from.mp + healedMP,
        ult: 0,
      }),
    }),
  });
  setTimeout(() => self.setState({ particle: null }), 1000);
};
