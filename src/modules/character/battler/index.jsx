import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/battler--normal.png';
// import pictureAttacking from 'assets/sprites/battler--attacking.png';
// import pictureWeak from 'assets/sprites/battler--weak.png';
// import pictureUlt from 'assets/sprites/battler--ult.png';

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

const stats = Object.assign({}, baseStats);

export default class Battler extends Component {
  static getPicture() {
    return pictureNormal;
  }
  static getBustStyle() {
    return bustStyle;
  }
  static getBaseStats() {
    return Object.assign({}, baseStats);
  }
  constructor(props) {
    super(props);
    if (props.stats) Object.assign(stats, props.stats);
  }
  render() {
    return (<div className="Battler" />);
  }
}
