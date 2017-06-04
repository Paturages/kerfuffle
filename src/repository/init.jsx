import Character from 'modules/character';

export default (self) => {
  const characterIds = Object.keys(Character);

  const initialState = {
    turn: 1,
    background: 'forest',
    music: 'intro',
    character: 'automod',
    canAttack: true,
    status: characterIds.reduce((obj, c) => Object.assign(obj, { [c]: Character[c].getBaseStats() }), {}),
    map: new Array(16).fill(new Array(16).fill('')).map(x => x.slice().map(() => ({}))),
  };

  // Random walls
  // new Array(30)
  //   .fill('')
  //   .map(() => [(Math.random() * 16) >> 0, (Math.random() * 16) >> 0]) // eslint-disable-line no-bitwise
  //   .forEach(([x, y]) => (initialState.map[x][y].type = 'wall'))
  // ;

  // Random character positions
  const positions = [];
  characterIds.forEach(function placeCharacter(character) {
    const x = Math.random() * 16 >> 0; // eslint-disable-line no-bitwise
    const y = Math.random() * 16 >> 0; // eslint-disable-line no-bitwise
    if (
      initialState.map[x][y].type === 'wall' ||
      positions.find(([cx, cy]) => Math.abs(cx - x) + Math.abs(cy - y) < 5)
    ) placeCharacter(character);
    else {
      positions.push([x, y]);
      initialState.status[character].position = [x, y];
    }
  });

  // Init character vitals
  characterIds.forEach(character => (
    initialState.status[character] = Object.assign({
      mp: initialState.status[character].int * 10,
      moves: initialState.status[character].spd / 2 >> 0,
      ult: 0,
    }, initialState.status[character])
  ));

  // Character order
  const order = characterIds.slice();
  for (let i = 0; i < 50; i++) {
    order.push(order.splice(Math.random() * 9 >> 0, 1)[0]);
  }
  initialState.order = order;
  // initialState.order = ['automod', 'automod'];

  self.setState(Object.assign(self.state, initialState));
};
