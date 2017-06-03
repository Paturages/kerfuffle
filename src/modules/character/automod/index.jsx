import pictureNormal from 'assets/sprites/automod--normal.png';

const baseStats = {
  atk: 4,
  def: 4,
  spd: 5,
  dex: 5,
  int: 8,
  hp: 100,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '10em',
  height: '8em',
  left: '-9em',
};

const getMeta = () => ({
  id: 'automod',
  name: 'Automod-chan',
  source: '/r/visualnovels',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => (
  'I will protect the purity and the sanity of the /r/visualnovels sidebar!'
);

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
};
