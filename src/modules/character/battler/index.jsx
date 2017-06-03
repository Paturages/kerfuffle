import Inferno from 'inferno';

import pictureNormal from 'assets/sprites/battler--normal.png';
// import pictureAttacking from 'assets/sprites/battler--attacking.png';
// import pictureWeak from 'assets/sprites/battler--weak.png';
// import pictureUlt from 'assets/sprites/battler--ult.png';

import './style.scss';

const baseStats = {
  atk: 2,
  def: 3,
  spd: 3,
  dex: 5,
  int: 10,
  hp: 100,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '11em',
  left: '-10em',
};

const getMeta = () => ({
  id: 'battler',
  name: 'Ushiromiya Battler',
  source: 'Umineko no Naku Koro Ni',
});
const getPicture = () => pictureNormal;
const getBustStyle = () => bustStyle;
const getBaseStats = () => Object.assign({}, baseStats);
const getOpeningDialog = () => (
  <div className="Battler__blue-truth">
    <i>Umineko no Naku Koro ni</i> is without a doubt, hands down the best visual novel there is! That there could be any better visual novel is a Devil's Proof! The sidebar is ours!!
  </div>
);

export default {
  getMeta,
  getPicture,
  getBustStyle,
  getBaseStats,
  getOpeningDialog,
};
