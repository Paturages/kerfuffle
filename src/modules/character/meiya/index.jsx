import pictureNormal from 'assets/sprites/meiya--normal.png';
import abilities from 'modules/attack/meiya';

const baseStats = {
  atk: 6,
  def: 5,
  spd: 5,
  dex: 6,
  int: 6,
  hp: 250,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '12em',
  left: '-12em',
};

const getMeta = () => ({
  id: 'meiya',
  name: 'Mitsurugi Meiya',
  source: 'Muv-Luv trilogy',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => 'I must reclaim this sidebar... for mankind... for humanity...';
const getAbilities = () => abilities;

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
  getAbilities,
};
