import pictureNormal from 'assets/sprites/makina--normal.png';
// import pictureSideStep from 'assets/sprites/makina--side-step.png';

const baseStats = {
  atk: 5,
  def: 3,
  spd: 9,
  dex: 8,
  int: 3,
  hp: 90,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '8em',
  left: '-10em',
};

const getMeta = () => ({
  id: 'makina',
  name: 'Irisu Makina',
  source: 'Grisaia trilogy',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => "I'm gonna get this tasty sidebar for daddy!";

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
};
