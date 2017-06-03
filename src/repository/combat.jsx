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
const selectAttack = self => self.setState({
  attackRange: self.state.attackRange ? null : 1,
});
const basicAttack = (self, x, y) => {
  const characterId = characterIds.find((c) => {
    const [cx, cy] = self.state.status[c].position;
    return cx === x && cy === y;
  });
  if (characterId) {
    const from = self.state.status[self.state.order[self.state.turn % 9]];
    const to = self.state.status[characterId];
    self.setState({
      canAttack: false,
      attackRange: null,
      status: Object.assign(self.state.status, {
        [characterId]: Object.assign(to, {
          hp: to.hp - from.atk,
        }),
      }),
    });
  }
};
const endTurn = (self) => {
  const character = self.state.order[self.state.turn % 9];
  self.setState({
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
