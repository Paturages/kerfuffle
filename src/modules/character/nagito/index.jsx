import pictureNormal from 'assets/sprites/nagito--normal.png';

const baseStats = {
  atk: 3,
  def: 3,
  spd: 4,
  dex: 5,
  int: 10,
  hp: 125,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '17em',
  height: '9em',
  left: '-10em',
};

const getMeta = () => ({
  id: 'nagito',
  name: 'Komaeda Nagito',
  source: 'Super Danganronpa 2',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => 'Oh, the Sidebar! Such a great symbol of hope, a true showcase of the wonders of humanity!';

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
};
