import pictureNormal from 'assets/sprites/tomoyo--normal.png';

const baseStats = {
  atk: 8,
  def: 4,
  spd: 7,
  dex: 3,
  int: 3,
  hp: 100,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '8em',
  height: '8em',
  left: '-9em',
};

const getMeta = () => ({
  id: 'tomoyo',
  name: 'Sakagami Tomoyo',
  source: 'Clannad',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => 'So it has come to this... I will honor my friends and my family by taking this sidebar!';

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
};
