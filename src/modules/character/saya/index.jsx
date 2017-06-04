import pictureNormal from 'assets/sprites/saya--normal.png';
import abilities from 'modules/attack/saya';

const baseStats = {
  atk: 3,
  def: 6,
  spd: 2,
  dex: 3,
  int: 7,
  hp: 300,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '6em',
  left: '-10em',
};

const getMeta = () => ({
  id: 'saya',
  name: 'Saya',
  source: 'Saya no Uta',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => 'If I take over the sidebar, will people be kind to me?';
const getAbilities = () => abilities;

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
  getAbilities,
};
