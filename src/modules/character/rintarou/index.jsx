import pictureNormal from 'assets/sprites/rintarou--normal.png';
import abilities from 'modules/attack/rintarou';

const baseStats = {
  atk: 3,
  def: 3,
  spd: 3,
  dex: 7,
  int: 8,
  hp: 250,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '8em',
  left: '-9em',
};

const getMeta = () => ({
  id: 'rintarou',
  name: 'Okabe Rintarou',
  source: 'Steins;Gate',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => "FUAHAHAHAHA! Are you telling me to seize the sidebar? If this is what we must do to reach the Steins Gate. I'll get back to you. El. Psy. Kongroo.";
const getAbilities = () => abilities;

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
  getAbilities,
};
