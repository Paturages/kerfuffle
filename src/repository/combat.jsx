import Inferno from 'inferno';
import Character from 'modules/character';

const characterIds = Object.keys(Character);

const move = function move(self, x, y) {
  const s = self.state;
  const c = s.order[s.turn % 9];
  const [cx, cy] = s.status[c].position;
  if (cx === x && cy === y) return;
  self.setState({
    status: Object.assign(s.status, {
      [c]: Object.assign(s.status[c], {
        moves: s.status[c].moves - (Math.abs(cx - x) + Math.abs(cy - y)),
        position: [x, y],
      }),
    }),
  });
};
const selectAttack = (self, attack) => self.setState({
  attackRange: !attack && self.state.attackRange ? null : (
    attack ? attack.range : 1
  ),
});
const basicAttack = (self, x, y) => {
  const toId = characterIds.find((c) => {
    const [cx, cy] = self.state.status[c].position;
    return cx === x && cy === y;
  });
  if (toId) {
    const fromId = self.state.order[self.state.turn % 9];
    const from = self.state.status[fromId];
    const to = self.state.status[toId];
    const damage = (5 + (from.atk * 3)) - (to.def * 2);
    self.setState({
      canAttack: false,
      attackRange: null,
      focus: to.position,
      particle: <div className="Damage Damage--physical">{damage}</div>,
      status: Object.assign(self.state.status, {
        [toId]: Object.assign(to, {
          hp: to.hp - damage,
        }),
        [fromId]: Object.assign(from, {
          ult: from.ult + damage,
        }),
      }),
    });
    setTimeout(() => self.setState({ focus: null, particle: null }), 1000);
  }
};
const endTurn = (self) => {
  const character = self.state.order[self.state.turn % 9];
  const background = Math.random() < 0.1 ? ['forest', 'mountain', 'lake'][Math.random() * 3 >> 0] : self.state.background;
  self.setState({
    background,
    turn: self.state.turn + 1,
    canAttack: true,
    status: Object.assign(self.state.status, {
      [character]: Object.assign(self.state.status[character], {
        moves: self.state.status[character].spd / 2 >> 0,
      }),
    }),
  });
};

export default { move, selectAttack, basicAttack, endTurn };
