import pictureNormal from 'assets/sprites/rance--normal.png';
import abilities from 'modules/attack/rance';

const baseStats = {
  atk: 7,
  def: 7,
  spd: 4,
  dex: 5,
  int: 2,
  hp: 250,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '18em',
  left: '-9em',
};

const getMeta = () => ({
  id: 'rance',
  name: 'Rance',
  source: 'Rance series',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => "The name of this super cool guy is Rance. I'm a hero who'll one day conquer the entire subreddit and create a huge harem.";
const getAbilities = () => abilities;

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
  getAbilities,
};
